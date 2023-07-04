<script setup>
  
</script>

<template>
  <footer class="py-8">
    <div class="flex mx-auto w-full gap-4 items-center justify-center md:w-1/2">
      <a 
        href="https://github.com/CodeurCopieur" 
        class="text-gray-400 inline-block"
        :class="{'hover:text-dark-900' :$colorMode.preference !== 'dark' }">
        Github
      </a>
      <a 
        href="https://twitter.com/CodeurCopieur" 
        class="text-gray-400 inline-block"
        :class="{'hover:text-dark-900' :$colorMode.preference !== 'dark' }">
        Twitter
      </a>
    </div>
    <div class="mx-auto mt-4 text-center text-xs text-gray-400 w-1/3">
      © 2023
    </div>
  </footer>
</template>