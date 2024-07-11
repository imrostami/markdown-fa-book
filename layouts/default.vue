<template>

  <div>
    <Html lang="fa" dir="rtl" data-bs-theme="dark"></Html>
    <Body class="scrool-area"></Body>
    <SidebarNav />

    <main class="p-4 container-fluid" id="main-content">
      <div class="main-wrap container">
        <slot />
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
  #main-content{
    margin-top: 4rem;
  }
  main{
    background-color: #161616 !important;
  }
</style>