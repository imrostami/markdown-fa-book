<script setup>
  defineProps(['code'])
</script>

<template>
  <div class="heading-exam row">
    <CodeBlock lang="language-markdown" :code="code" class="col-md-7 col-sm-12"/>
    <div class="exam-section col-md-5 col-sm-12">
      <slot/>
    </div>

  </div>
</template>

<style scoped>
.exam-section{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>