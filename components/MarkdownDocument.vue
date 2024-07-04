<template>

  <div ref="markdownBody" class="markdown-body">
    <div class="loading-contianer">
      <div class="spinner-border" role="status">
      </div>

      <span class="loading-container-text">در حال بارگذاری ...</span>
    </div>
  </div>



</template>

<script setup>

import fm from 'front-matter';
const markdownBody = ref('')
 const props = defineProps({
   source:String
 })

 const emit = defineEmits(['pageMeta'])



 onMounted(()=>{
   const converter = new showdown.Converter();
   fetch(props.source)
       .then(responce => {
         if(!responce.ok){
           return '<span class="fw-lighter text-center d-block mt-5">هنوز چیز جالبی اینجا برای نشون دادن نیست :) </span>'
         }
         return responce.text()
       }).then(data=>{
        const {attributes,body} = fm(data)
        emit('pageMeta' , attributes)
        markdownBody.value.innerHTML = converter.makeHtml(body)
       

   })
 })

</script>

<style scoped>
  .loading-contianer{
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>