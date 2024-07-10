<template>
  <figure>
        <img :src="imageUrl" :alt="imageAlt">
        <figcaption>
           <slot/>
        </figcaption>
      </figure>
</template>

<script setup>
    defineProps(['imageUrl' , 'imageAlt'])
</script>

<style scoped>
.accordion-body{
    padding: 20px;
    
}
figure{
    padding: 20px;
}
figcaption{
    margin-top: 15px;
}
img{
    width: 100%;
    height: auto;
}
</style>