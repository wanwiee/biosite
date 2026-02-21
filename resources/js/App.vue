<template>
  <div class="min-h-screen bg-white">
    <!-- Navbar -->
    <nav class="bg-blue-700 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="text-white text-xl font-bold">
              Counselor Biosite
            </router-link>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-4">
            <!-- Home -->
            <router-link to="/" class="text-white hover:bg-blue-600 px-3 py-2 rounded-md">
              Home
            </router-link>

            <!-- About Dropdown -->
            <div class="relative group">
              <button class="text-white hover:bg-blue-600 px-3 py-2 rounded-md flex items-center">
                About
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div class="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <router-link to="/about/counselor" class="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                  Counselor
                </router-link>
                <router-link to="/about/family-background" class="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                  Family Background
                </router-link>
              </div>
            </div>

            <!-- Legacy -->
            <router-link to="/legacy" class="text-white hover:bg-blue-600 px-3 py-2 rounded-md">
              Legacy
            </router-link>

            <!-- News Dropdown -->
            <div class="relative group">
              <button class="text-white hover:bg-blue-600 px-3 py-2 rounded-md flex items-center">
                News
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div class="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <router-link to="/news/releases" class="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                  News Releases
                </router-link>
                <router-link to="/news/speeches" class="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                  Speeches
                </router-link>
                <!-- Videos Submenu -->
                <div class="relative group-sub">
                  <button class="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 flex justify-between items-center">
                    Videos
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div class="absolute left-48 top-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-sub-hover:opacity-100 group-sub-hover:visible transition-all z-50">
                    <router-link to="/news/videos/live-stream" class="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                      Live Stream
                    </router-link>
                    <router-link to="/news/videos/vlogs" class="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                      Vlogs
                    </router-link>
                    <router-link to="/news/videos/weekly-recap" class="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                      Weekly Recap
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact -->
            <router-link to="/contact" class="text-white hover:bg-blue-600 px-3 py-2 rounded-md">
              Contact
            </router-link>

            <!-- Documents (DMS) -->
            <router-link to="/documents" class="text-white hover:bg-blue-600 px-3 py-2 rounded-md">
              Documents
            </router-link>

            <!-- Admin -->
            <router-link to="/admin" class="text-white hover:bg-blue-600 px-3 py-2 rounded-md bg-blue-800">
              Admin
            </router-link>
          </div>

          <!-- Mobile menu button -->
          <div class="flex items-center md:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-white hover:bg-blue-600 p-2 rounded-md">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-blue-700">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link to="/" class="text-white block px-3 py-2 rounded-md hover:bg-blue-600">Home</router-link>
          
          <!-- Mobile About -->
          <div class="relative">
            <button @click="aboutOpen = !aboutOpen" class="text-white w-full text-left px-3 py-2 rounded-md hover:bg-blue-600 flex justify-between items-center">
              About
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="aboutOpen" class="pl-4 space-y-1">
              <router-link to="/about/counselor" class="text-white block px-3 py-2 rounded-md hover:bg-blue-600">Counselor</router-link>
              <router-link to="/about/family-background" class="text-white block px-3 py-2 rounded-md hover:bg-blue-600">Family Background</router-link>
            </div>
          </div>

          <router-link to="/legacy" class="text-white block px-3 py-2 rounded-md hover:bg-blue-600">Legacy</router-link>
          
          <!-- Mobile News -->
          <div class="relative">
            <button @click="newsOpen = !newsOpen" class="text-white w-full text-left px-3 py-2 rounded-md hover:bg-blue-600 flex justify-between items-center">
              News
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="newsOpen" class="pl-4 space-y-1">
              <router-link to="/news/releases" class="text-white block px-3 py-2 rounded-md hover:bg-blue-600">News Releases</router-link>
              <router-link to="/news/speeches" class="text-white block px-3 py-2 rounded-md hover:bg-blue-600">Speeches</router-link>
              
              <!-- Mobile Videos -->
              <div class="relative">
                <button @click="videosOpen = !videosOpen" class="text-white w-full text-left px-3 py-2 rounded-md hover:bg-blue-600 flex justify-between items-center">
                  Videos
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div v-if="videosOpen" class="pl-4 space-y-1">
                  <router-link to="/news/videos/live-stream" class="text-white block px-3 py-2 rounded-md hover:bg-blue-600">Live Stream</router-link>
                  <router-link to="/news/videos/vlogs" class="text-white block px-3 py-2 rounded-md hover:bg-blue-600">Vlogs</router-link>
                  <router-link to="/news/videos/weekly-recap" class="text-white block px-3 py-2 rounded-md hover:bg-blue-600">Weekly Recap</router-link>
                </div>
              </div>
            </div>
          </div>

          <router-link to="/contact" class="text-white block px-3 py-2 rounded-md hover:bg-blue-600">Contact</router-link>
          <router-link to="/documents" class="text-white block px-3 py-2 rounded-md hover:bg-blue-600">Documents</router-link>
          <router-link to="/admin" class="text-white block px-3 py-2 rounded-md hover:bg-blue-600 bg-blue-800">Admin</router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-blue-800 text-white py-8 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-sm">&copy; 2024 Kon Sonny VISA Aguillo - Counselor Biosite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false,
      aboutOpen: false,
      newsOpen: false,
      videosOpen: false
    }
  }
}
</script>
