console.log("Hello");
const initial=()=>{
    const hamburger = document.querySelector(".hamburger");
    const sidebarCloseButton = document.querySelector(".close-button");
    const sidebarContainer = document.querySelector(".sidebar-container");
  const openSideBar=()=>{
      sidebarContainer.classList.add("show-sidebar")
  }
  const closeSideBar=()=>{
      sidebarContainer.classList.remove("show-sidebar")
  }
  sidebarCloseButton.addEventListener("click",closeSideBar)
    hamburger.addEventListener("click",openSideBar);
}
initial()

const Nav=()=>{
    const navbarContains=document.querySelector(".nav-container");
    window.addEventListener("scroll",function () {
        const scrolNumber=window.scrollY;
        const targetNumber=window.innerWidth>=992?70:50;
        if (scrolNumber>=targetNumber) {
            navbarContains.classList.add("sticky-nav")
        } else {
        navbarContains.classList.remove("sticky-nav") 
        }
    })
}

Nav()