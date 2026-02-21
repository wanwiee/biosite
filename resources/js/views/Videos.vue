<template>
  <div>
    <section class="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold mb-2">Videos</h1>
        <p class="text-blue-100">Watch our latest videos</p>
      </div>
    </section>

    <!-- Video Navigation Tabs -->
    <div class="bg-blue-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex space-x-8">
          <router-link 
            to="/news/videos/live-stream" 
            class="py-4 px-2 border-b-2 text-white hover:text-blue-200 transition"
            :class="$route.name === 'LiveStream' ? 'border-white' : 'border-transparent'"
          >
            Live Stream
          </router-link>
          <router-link 
            to="/news/videos/vlogs" 
            class="py-4 px-2 border-b-2 text-white hover:text-blue-200 transition"
            :class="$route.name === 'Vlogs' ? 'border-white' : 'border-transparent'"
          >
            Vlogs
          </router-link>
          <router-link 
            to="/news/videos/weekly-recap" 
            class="py-4 px-2 border-b-2 text-white hover:text-blue-200 transition"
            :class="$route.name === 'WeeklyRecap' ? 'border-white' : 'border-transparent'"
          >
            Weekly Recap
          </router-link>
        </div>
      </div>
    </div>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Videos'
}
</script>
