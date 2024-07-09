<template>
  <div>
    <h1
        class="px-4 py-4 fw-bold modal-title default-text-color pr-0">
    {{pageTitle}}
    </h1>
    <div class="document-body">
      <slot/>
    </div>
  </div>
</template>


<script setup>
const props = defineProps(['pageTitle'])
</script>

<style scoped>
  .document-body{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>