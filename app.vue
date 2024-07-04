<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup>
onBeforeMount(() => {
  const plugin = document.createElement("script");
  plugin.setAttribute(
      "src",
      "/assets/libs/code-highlighter/prism.js"
  );

  document.body.appendChild(plugin);


  const codePluginStyle = document.createElement("link");
  codePluginStyle.setAttribute(
      "rel",
      "stylesheet"
  );
  codePluginStyle.setAttribute("href",
      "/assets/libs/code-highlighter/prism.css");

  document.head.appendChild(codePluginStyle);

})


</script>