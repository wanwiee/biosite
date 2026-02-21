<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-blue-700 to-blue-500 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl font-bold mb-4">Welcome to Counselor Biosite</h1>
        <p class="text-xl mb-8">Your trusted source for guidance and counseling services</p>
        <router-link to="/about/counselor" class="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
          Learn More About Our Counselor
        </router-link>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-blue-800 mb-12">Our Services</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 bg-blue-50 rounded-lg shadow-md">
            <div class="text-blue-700 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-blue-800 mb-2">Individual Counseling</h3>
            <p class="text-gray-600">Personalized guidance and support for your unique needs.</p>
          </div>
          
          <div class="p-6 bg-blue-50 rounded-lg shadow-md">
            <div class="text-blue-700 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-blue-800 mb-2">Family Support</h3>
            <p class="text-gray-600">Building stronger family connections through understanding.</p>
          </div>
          
          <div class="p-6 bg-blue-50 rounded-lg shadow-md">
            <div class="text-blue-700 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-blue-800 mb-2">Career Guidance</h3>
            <p class="text-gray-600">Professional advice for your career development.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links Section -->
    <section class="py-16 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-blue-800 mb-12">Quick Links</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <router-link to="/about/counselor" class="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition text-center">
            <h3 class="text-lg font-semibold text-blue-700">The Counselor</h3>
            <p class="text-gray-500 text-sm mt-2">Meet our dedicated counselor</p>
          </router-link>
          
          <router-link to="/about/family-background" class="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition text-center">
            <h3 class="text-lg font-semibold text-blue-700">Family Background</h3>
            <p class="text-gray-500 text-sm mt-2">Our family-oriented approach</p>
          </router-link>
          
          <router-link to="/legacy" class="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition text-center">
            <h3 class="text-lg font-semibold text-blue-700">Legacy</h3>
            <p class="text-gray-500 text-sm mt-2">Our history and achievements</p>
          </router-link>
          
          <router-link to="/contact" class="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition text-center">
            <h3 class="text-lg font-semibold text-blue-700">Contact Us</h3>
            <p class="text-gray-500 text-sm mt-2">Get in touch with us</p>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
