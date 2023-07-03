<script setup>
  defineProps({
    src: {
      type: String,
      require: true
    }
  });
</script>
<template>
  <picture>
    <img class="rounded-xl h-full object-cover w-full transform transtion-all ease-in-out duration-150" 
         :src="src"
         width="200"
         height="200" 
         alt="image-portfolio">
  </picture>
</template>

