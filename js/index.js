const toggleMenu = () =>{
    const icon = document.getElementById("burger")
    const menu = document.getElementById("menu-links")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
  }