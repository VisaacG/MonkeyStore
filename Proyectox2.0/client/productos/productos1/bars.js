import {getProducts} from './fetchAPI.js'

bars = document.querySelector(".bars")
bars.onclick = function(){
    navBar = document.querySelector(".navbar")
    navBar.classList.toggle("active")
}


getProducts()
    .then(products => console.log(products))
    .catch(err => console.log(err))
