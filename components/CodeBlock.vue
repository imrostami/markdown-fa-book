<template>
  <div class="codeblock">
    <div class="code-actions">
     <CopyButton :text="code"/>
    </div>
    <pre class="code-pre">
    <code :class="lang">
      {{code}}
    </code>
  </pre>
  </div>
</template>


<style scoped>
.codeblock {
  display: block;
  background: var(--app-code-bg);
  border-radius: 22px;

}
.code-pre{
  margin: 0;
}
.code-actions{
  display: inline;
  position: absolute;
  padding: 10px;
}
</style>

<script setup>
import CopyButton from "~/components/CopyButton.vue";

defineProps(['lang' , 'code'])

onBeforeMount(()=>{
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