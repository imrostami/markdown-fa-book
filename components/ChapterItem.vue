<template>
  <NuxtLink class="nav-link text-white chapter-item-link" :to="url">{{ title }}</NuxtLink>
</template>

<script>

export default {
    props: ['url', 'title'],
};
</script>

<style>
</style>