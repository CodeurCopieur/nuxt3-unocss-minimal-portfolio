<script setup>
  const colorMode = useColorMode();
</script>
<template>
  <div class="flex w-full py-5 md:py-10 px-5 z-10 top-0 fixed items-center justify-between backdrop-blur-md dark:bg-gray-900/10">
    <nuxt-link to="">
      <svg 
        class="h-12 w-12"
        :class="{'text-gray-50' :$colorMode.preference === 'dark'}"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
            clip-rule="evenodd">
          </path>
      </svg>
    </nuxt-link>

    <nav class="flex gap-10 items-center">
      <nuxt-link to="/" 
        class="font-medium text-lg text-dark-900/50 dark:text-gray-50/80"
        :class="{'hover:text-dark-900' :$colorMode.preference !== 'dark' }">Home</nuxt-link>
      <nuxt-link to="/about" 
        class="font-medium text-lg text-dark-900/50 dark:text-gray-50/80"
        :class="{'hover:text-dark-900' :$colorMode.preference !== 'dark' }">About</nuxt-link>
        <switch-mode/>
    </nav>
  </div>
</template>