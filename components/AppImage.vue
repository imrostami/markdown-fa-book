<template>
  <div class="text-center">
    <img :src="source" :alt="alt" class="rounded-3 img-fluid">
  </div>
</template>
<script setup>
defineProps(['source' , 'alt'])
</script>

<style scoped>
  img{
    width: 100%;
    height: auto;
  }
</style>