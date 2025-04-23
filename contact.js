// selecting Elements
const sideNav = document.getElementById("sideNav")
const menuIcon = document.getElementById("menuIcon")
const closeNav = document.getElementById("closeNav")

menuIcon.addEventListener("click", function()
{
    sideNav.style.right=0

})
closeNav.addEventListener("click",function()
{
    sideNav.style.right="-50%"
    // sideNav.style.display="none"
})