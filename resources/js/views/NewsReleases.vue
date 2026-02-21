<template>
  <div>
    <section class="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold mb-2">News Releases</h1>
        <p class="text-blue-100">Latest updates and announcements</p>
      </div>
    </section>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-8">
          <!-- Sample News Item -->
          <article class="border-l-4 border-blue-500 pl-6 py-2">
            <span class="text-sm text-gray-500">December 2024</span>
            <h3 class="text-xl font-semibold text-blue-800 mt-1">New Counseling Services Available</h3>
            <p class="text-gray-600 mt-2">We are excited to announce new counseling services to better serve our community.</p>
          </article>
          
          <article class="border-l-4 border-blue-500 pl-6 py-2">
            <span class="text-sm text-gray-500">November 2024</span>
            <h3 class="text-xl font-semibold text-blue-800 mt-1">Community Outreach Program</h3>
            <p class="text-gray-600 mt-2">Join us in our efforts to bring mental health awareness to the community.</p>
          </article>
          
          <article class="border-l-4 border-blue-500 pl-6 py-2">
            <span class="text-sm text-gray-500">October 2024</span>
            <h3 class="text-xl font-semibold text-blue-800 mt-1">Annual Family Wellness Fair</h3>
            <p class="text-gray-600 mt-2">Mark your calendars for our upcoming family wellness event.</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NewsReleases'
}
</script>
