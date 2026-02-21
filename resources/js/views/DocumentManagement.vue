<template>
  <div>
    <section class="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold mb-2">Document Management</h1>
        <p class="text-blue-100">Submit your documents for review</p>
      </div>
    </section>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Upload Section -->
        <div class="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 class="text-xl font-semibold text-blue-800 mb-4">Upload New Document</h2>
          <form @submit.prevent="uploadDocument" class="space-y-4">
            <div>
              <label class="block text-gray-700 mb-2">Document Title</label>
              <input v-model="newDocument.title" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter document title" required>
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Description</label>
              <textarea v-model="newDocument.description" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Brief description of the document"></textarea>
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Document File</label>
              <input type="file" @change="handleFileUpload" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
            </div>
            <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Upload Document
            </button>
          </form>
        </div>

        <!-- Documents List -->
        <h2 class="text-xl font-semibold text-blue-800 mb-4">My Documents</h2>
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
              <tr v-for="doc in documents" :key="doc.id">
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
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ doc.date }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button @click="viewDocument(doc)" class="text-blue-600 hover:text-blue-900 mr-3">View</button>
                  <button @click="deleteDocument(doc.id)" class="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="documents.length === 0" class="text-center py-8 text-gray-500">
          No documents uploaded yet.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DocumentManagement',
  data() {
    return {
      newDocument: {
        title: '',
        description: '',
        file: null
      },
      documents: [
        {
          id: 1,
          title: 'Application Form',
          description: 'Initial counseling application form',
          status: 'Pending',
          date: '2024-12-20'
        },
        {
          id: 2,
          title: 'Medical Certificate',
          description: 'Health clearance document',
          status: 'Approved',
          date: '2024-12-18'
        },
        {
          id: 3,
          title: 'ID Verification',
          description: 'Government issued ID',
          status: 'Approved',
          date: '2024-12-15'
        }
      ]
    }
  },
  methods: {
    handleFileUpload(event) {
      this.newDocument.file = event.target.files[0]
    },
    uploadDocument() {
      const doc = {
        id: this.documents.length + 1,
        title: this.newDocument.title,
        description: this.newDocument.description,
        status: 'Pending',
        date: new Date().toISOString().split('T')[0]
      }
      this.documents.unshift(doc)
      this.newDocument = { title: '', description: '', file: null }
      alert('Document uploaded successfully!')
    },
    getStatusClass(status) {
      if (status === 'Approved') return 'bg-green-100 text-green-800'
      if (status === 'Rejected') return 'bg-red-100 text-red-800'
      return 'bg-yellow-100 text-yellow-800'
    },
    viewDocument(doc) {
      alert(`Viewing: ${doc.title}`)
    },
    deleteDocument(id) {
      if (confirm('Are you sure you want to delete this document?')) {
        this.documents = this.documents.filter(d => d.id !== id)
      }
    }
  }
}
</script>
