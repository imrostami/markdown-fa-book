// plugins/global-plugin.js
export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        const plugin = document.createElement("script");
        plugin.setAttribute("src", "/assets/libs/code-highlighter/prism.js");
        document.body.appendChild(plugin);

        const codePluginStyle = document.createElement("link");
        codePluginStyle.setAttribute("rel", "stylesheet");
        codePluginStyle.setAttribute("href", "/assets/libs/code-highlighter/prism.css");
        document.head.appendChild(codePluginStyle);
    }
});
