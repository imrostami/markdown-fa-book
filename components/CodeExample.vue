<script setup>
  defineProps(['code'])
</script>

<template>
  <div class="heading-exam row py-2 container">
    <div class="code-section col-md-6 col-sm-12 pb-3">
      <p class="mt-2 py-2 px-2 rounded-4 heading-cp">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
        نمونه کد
      </p>
      <CodeBlock lang="language-markdown" :code="code"/>
    </div>
    <div class="output-section col-md-6 col-sm-12 py-2">
      <p class="heading-cp mt-2 py-2 px-2 rounded-4">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-terminal-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9l3 3l-3 3" /><path d="M13 15l3 0" /><path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>
        خروجی
      </p>
      <div class="exam-section">
        <slot/>
      </div>
    </div>

  </div>
</template>

<style scoped>
.exam-section{
  display: flex;
  align-items: center;

}
.heading-exam{

  background: linear-gradient(270deg, rgb(28 49 42) 0%, rgb(33 33 33) 55%);
  padding-inline: 15px;
  border-radius: 30px;
  margin: auto !important;
}

.heading-cp{

  background:linear-gradient(276deg, rgb(0 0 0 / 25%) 0%, rgb(33 33 33 / 0%) 55%);

}
.codeblock{
  background-color: #0e0e0eab;
}

</style>