<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="itemid"
        aria-expanded="false"
        :aria-controls="itemarea"
      >
        {{ title }}
      </button>
    </h2>
    <div
      :id="itemarea"
      class="accordion-collapse collapse"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
  props: ["title"],
  data() {
    var randomId = Math.random().toString(36).substring(2, 15);
    
    return {
      itemid: "#" + randomId,
      itemarea: randomId,
    };
  },
};
</script>

<style>
</style>