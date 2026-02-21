<template>
  <div>
    <section class="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold mb-2">Speeches</h1>
        <p class="text-blue-100">Inspiring talks and presentations</p>
      </div>
    </section>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-6">
          <!-- Speech Item -->
          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-blue-800">The Importance of Mental Health Awareness</h3>
            <p class="text-gray-600 mt-2">A speech delivered at the Community Health Conference 2024.</p>
            <button class="mt-4 text-blue-600 hover:text-blue-800 font-medium">Read More →</button>
          </div>
          
          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-blue-800">Building Stronger Families</h3>
            <p class="text-gray-600 mt-2">Keynote speech at the Family Values Summit.</p>
            <button class="mt-4 text-blue-600 hover:text-blue-800 font-medium">Read More →</button>
          </div>
          
          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-blue-800">Overcoming Life's Challenges</h3>
            <p class="text-gray-600 mt-2">Inspiring talk for youth empowerment event.</p>
            <button class="mt-4 text-blue-600 hover:text-blue-800 font-medium">Read More →</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Speeches'
}
</script>
