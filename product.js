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
//selecting products
const productContainer = document.getElementById("productContainer")
const search = document.getElementById("search")

const productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    const enteredValue = event.target.value.toUpperCase();
    

    // for(let i=0; i<productList.length; i++){
    //     let productName = productList[i].querySelector("h1").textContent
    //     if(productName.toUpperCase().indexOf(enteredValue)<0)
    // {
    //     productList[i].style.display="none"
    // }
    // else{
    //     productList[i].style.display="block"
    // }


        
    // }
    for (let i = 0; i < productList.length; i++) {
        const h1 = productList[i].querySelector("h1");
    
        // 🛑 Safeguard: skip if h1 doesn't exist
        if (!h1) continue;
    
        const productName = h1.textContent.toUpperCase();
        if (productName.indexOf(enteredValue) < 0) {
          productList[i].style.display = "none";
        } else {
          productList[i].style.display = "block";
        }
      }

})
