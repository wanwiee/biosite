<template>
  <div>
    <!-- Header -->
    <section class="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold mb-4">About Us</h1>
        <p class="text-xl">Learn more about our counseling services and legacy</p>
      </div>
    </section>

    <!-- Navigation Tabs -->
    <div class="bg-blue-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex space-x-8">
          <router-link 
            to="/about/counselor" 
            class="py-4 px-2 border-b-2 text-white hover:text-blue-200 transition"
            :class="$route.name === 'Counselor' ? 'border-white' : 'border-transparent'"
          >
            Counselor
          </router-link>
          <router-link 
            to="/about/family-background" 
            class="py-4 px-2 border-b-2 text-white hover:text-blue-200 transition"
            :class="$route.name === 'FamilyBackground' ? 'border-white' : 'border-transparent'"
          >
            Family Background
          </router-link>
        </div>
      </div>
    </div>

    <!-- Content -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
