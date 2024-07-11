<template>
  <div>
    <div
      class="sidebar-backdrop hidden-backdrop"
      id="sideback"
      @click="handleMenu"
    ></div>

    <div class="app-holder container-fluid sticky-top">
      <header class="header bottom-0 header-transparent">
        <button
          @click="handleMenu"
          class="navbar-toggler btn-noborder border-none outline-none shadow-none"
          id="toggle-sidebar"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <strong class="hd-title">
          راهنمای جامع Markdown
        </strong>
      </header>

      <aside
        class="d-flex flex-column flex-shrink-0 p-3 text-white"
        id="sidebar"
      >
        <a
          href="#"
          class="d-flex align-items-center text-white text-decoration-none m-0"
        >
          <div class="sidebar-header d-flex justify-content-between w-100">
            <div
              class="sidebar-title d-flex justify-content-center align-items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-book-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
                <path d="M19 16h-12a2 2 0 0 0 -2 2" />
                <path d="M9 8h6" />
              </svg>
              <span>
                <a href="/" class="text-decoration-none text-white">فهرست کتاب</a>
              </span>

            </div>

            <button id="close-sidebar" class="btn" @click="handleMenu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
        </a>
        <hr />
        <div class="overflow-y-auto h-100 chapter-area scrool-area">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <Chapter title="بخش 1 : کاربردهای Markdown">
              <ChapterItem title="Markdown چیست ؟" url="/book"/>
              <ChapterItem title="Markdown چگونه کار می کند؟" url="/book/intro/HowItWork"/>
              <ChapterItem title="ابزار های تست و برسی Markdown" url="/book/intro/LabTools"/>
            </Chapter>
            <ChapterItem title="بخش 2 : کار با Heading ها" url="/book/Heading"/>
            <ChapterItem title="بخش 3 : قالب بندی محتوا" url="/book/FormatingContent"/>
            <ChapterItem title="بخش 4 : ایجاد نقل قول (Blockquote)" url="/book/Blockquotes"/>
            <ChapterItem title="بخش 5 : لیست ها (Lists)" url="/book/Lists/"/>
            <ChapterItem title="بخش 6 : کار با لینک ها و تصاویر" url="/book/LinkAndPhotos/"/>
            <ChapterItem title="بخش 7 : ایجاد کد بلاک (Code Blocks)" url="/book/CodeBlocks/"/>
            <ChapterItem title="بخش 8 : ایجاد جداول" url="/book/Tables/"/>



          </div>
        </div>

        <hr />
        <a href="#" class="btn btn-link text-decoration-none"
          >سایر کتاب های من</a
        >
      </aside>
    </div>
  </div>
</template>


<script setup>
const handleMenu = () => {
  var sidebar = document.getElementById("sidebar");
  var toggleSidebar = document.getElementById("toggle-sidebar");
  var sidebarBackdrop = document.getElementById("sideback");
  var closeSidebarBtn = document.getElementById("close-sidebar");

  sidebar.classList.toggle("open");
  sidebarBackdrop.classList.toggle("hidden-backdrop");
};


onMounted(()=>{
  var navLinks = document.querySelectorAll('.chapter-item-link');
  navLinks.forEach(x=>x.addEventListener('click',handleMenu));
})

</script>

<style scoped>
.app-holder {
  position: fixed !important;
  border: 1px solid;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-color: #2f2f2f;
  border-width: 4px;
}

aside{
  width: 380px;
  height: 100%;



}


.accordion-button:focus{
  box-shadow: none !important;
  border: none !important;
}

</style>