<template>
  <div>
    <h2 class="text-2xl font-bold text-blue-800 mb-6">Live Stream</h2>
    <div class="bg-blue-50 p-8 rounded-lg text-center">
      <svg class="w-16 h-16 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
      <p class="text-gray-600">Live streaming sessions will be available here.</p>
      <p class="text-gray-500 text-sm mt-2">Stay tuned for upcoming live counseling sessions and Q&A.</p>
      <button class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Notify Me When Live
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LiveStream'
}
</script>
