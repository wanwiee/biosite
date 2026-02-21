<template>
  <div>
    <section class="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p class="text-blue-100">Manage documents and requests</p>
      </div>
    </section>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div class="bg-blue-50 p-6 rounded-lg">
            <div class="text-2xl font-bold text-blue-800">{{ totalDocuments }}</div>
            <div class="text-gray-600">Total Documents</div>
          </div>
          <div class="bg-yellow-50 p-6 rounded-lg">
            <div class="text-2xl font-bold text-yellow-800">{{ pendingCount }}</div>
            <div class="text-gray-600">Pending</div>
          </div>
          <div class="bg-green-50 p-6 rounded-lg">
            <div class="text-2xl font-bold text-green-800">{{ approvedCount }}</div>
            <div class="text-gray-600">Approved</div>
          </div>
          <div class="bg-red-50 p-6 rounded-lg">
            <div class="text-2xl font-bold text-red-800">{{ rejectedCount }}</div>
            <div class="text-gray-600">Rejected</div>
          </div>
        </div>

        <!-- Pending Documents -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold text-blue-800 mb-4">Pending Documents</h2>
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="doc in pendingDocuments" :key="doc.id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">{{ doc.title }}</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-500">{{ doc.description }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      {{ doc.status }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ doc.date }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button @click="approveDocument(doc.id)" class="text-green-600 hover:text-green-900 mr-3">Approve</button>
                    <button @click="openRejectModal(doc)" class="text-red-600 hover:text-red-900 mr-3">Reject</button>
                    <button @click="openNeedsModal(doc)" class="text-blue-600 hover:text-blue-900">Add Needs</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="pendingDocuments.length === 0" class="text-center py-8 text-gray-500">
              No pending documents.
            </div>
          </div>
        </div>

        <!-- All Documents -->
        <div>
          <h2 class="text-xl font-semibold text-blue-800 mb-4">All Documents</h2>
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Possible Needs</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="doc in allDocuments" :key="doc.id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">{{ doc.title }}</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-500">{{ doc.description }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span :class="getStatusClass(doc.status)" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                      {{ doc.status }}
                    </span>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-500">
                      <span v-if="doc.needs && doc.needs.length > 0">
                        <span v-for="(need, index) in doc.needs" :key="index" class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1">
                          {{ need }}
                        </span>
                      </span>
                      <span v-else class="text-gray-400">No needs specified</span>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ doc.date }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Reject Modal -->
    <div v-if="showRejectModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h3 class="text-lg font-semibold text-blue-800 mb-4">Reject Document</h3>
        <p class="text-gray-600 mb-4">Please provide a reason for rejection:</p>
        <textarea v-model="rejectReason" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter rejection reason..."></textarea>
        <div class="flex justify-end mt-4 space-x-2">
          <button @click="showRejectModal = false" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">Cancel</button>
          <button @click="confirmReject" class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Reject</button>
        </div>
      </div>
    </div>

    <!-- Add Needs Modal -->
    <div v-if="showNeedsModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h3 class="text-lg font-semibold text-blue-800 mb-4">Add Possible Needs</h3>
        <p class="text-gray-600 mb-4">Select or add possible needs for this document:</p>
        
        <!-- Predefined needs -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">Common Needs:</label>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="need in predefinedNeeds" 
              :key="need"
              @click="toggleNeed(need)"
              :class="selectedNeeds.includes(need) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'"
              class="px-3 py-1 text-sm rounded-full hover:bg-blue-500 hover:text-white transition"
            >
              {{ need }}
            </button>
          </div>
        </div>
        
        <!-- Custom need input -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">Add Custom Need:</label>
          <div class="flex space-x-2">
            <input v-model="customNeed" type="text" class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter custom need...">
            <button @click="addCustomNeed" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add</button>
          </div>
        </div>
        
        <div class="flex justify-end mt-4 space-x-2">
          <button @click="showNeedsModal = false" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">Cancel</button>
          <button @click="confirmNeeds" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  data() {
    return {
      documents: [
        {
          id: 1,
          title: 'Application Form',
          description: 'Initial counseling application form',
          status: 'Pending',
          needs: [],
          date: '2024-12-20'
        },
        {
          id: 2,
          title: 'Medical Certificate',
          description: 'Health clearance document',
          status: 'Approved',
          needs: ['Medical Review', 'Background Check'],
          date: '2024-12-18'
        },
        {
          id: 3,
          title: 'ID Verification',
          description: 'Government issued ID',
          status: 'Approved',
          needs: ['ID Validation'],
          date: '2024-12-15'
        },
        {
          id: 4,
          title: 'Employment Letter',
          description: 'Proof of employment',
          status: 'Pending',
          needs: [],
          date: '2024-12-19'
        }
      ],
      showRejectModal: false,
      showNeedsModal: false,
      rejectReason: '',
      selectedDocId: null,
      selectedNeeds: [],
      customNeed: '',
      predefinedNeeds: [
        'Additional Information',
        'Background Check',
        'Medical Review',
        'ID Validation',
        'Interview Scheduled',
        'Counseling Session',
        'Follow-up Required'
      ]
    }
  },
  computed: {
    pendingDocuments() {
      return this.documents.filter(d => d.status === 'Pending')
    },
    allDocuments() {
      return this.documents
    },
    totalDocuments() {
      return this.documents.length
    },
    pendingCount() {
      return this.pendingDocuments.length
    },
    approvedCount() {
      return this.documents.filter(d => d.status === 'Approved').length
    },
    rejectedCount() {
      return this.documents.filter(d => d.status === 'Rejected').length
    }
  },
  methods: {
    approveDocument(id) {
      const doc = this.documents.find(d => d.id === id)
      if (doc) {
        doc.status = 'Approved'
        alert('Document approved successfully!')
      }
    },
    openRejectModal(doc) {
      this.selectedDocId = doc.id
      this.rejectReason = ''
      this.showRejectModal = true
    },
    confirmReject() {
      const doc = this.documents.find(d => d.id === this.selectedDocId)
      if (doc) {
        doc.status = 'Rejected'
        alert(`Document rejected. Reason: ${this.rejectReason || 'No reason provided'}`)
      }
      this.showRejectModal = false
      this.selectedDocId = null
      this.rejectReason = ''
    },
    openNeedsModal(doc) {
      this.selectedDocId = doc.id
      this.selectedNeeds = doc.needs ? [...doc.needs] : []
      this.customNeed = ''
      this.showNeedsModal = true
    },
    toggleNeed(need) {
      const index = this.selectedNeeds.indexOf(need)
      if (index > -1) {
        this.selectedNeeds.splice(index, 1)
      } else {
        this.selectedNeeds.push(need)
      }
    },
    addCustomNeed() {
      if (this.customNeed.trim() && !this.selectedNeeds.includes(this.customNeed.trim())) {
        this.selectedNeeds.push(this.customNeed.trim())
        this.customNeed = ''
      }
    },
    confirmNeeds() {
      const doc = this.documents.find(d => d.id === this.selectedDocId)
      if (doc) {
        doc.needs = [...this.selectedNeeds]
        alert('Possible needs added successfully!')
      }
      this.showNeedsModal = false
      this.selectedDocId = null
      this.selectedNeeds = []
    },
    getStatusClass(status) {
      if (status === 'Approved') return 'bg-green-100 text-green-800'
      if (status === 'Rejected') return 'bg-red-100 text-red-800'
      return 'bg-yellow-100 text-yellow-800'
    }
  }
}
</script>
