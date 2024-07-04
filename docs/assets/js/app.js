var sidebar = document.getElementById("sidebar")
var toggleSidebar = document.getElementById("toggle-sidebar");
var sidebarBackdrop = document.getElementById("sideback")
var closeSidebarBtn = document.getElementById("close-sidebar");
const handleMenu = ()=>{
    sidebar.classList.toggle("open")
    sidebarBackdrop.classList.toggle("hidden-backdrop")

}



toggleSidebar.addEventListener("click", handleMenu)

sidebarBackdrop.addEventListener("click" , handleMenu)

closeSidebarBtn.addEventListener("click" , handleMenu)
