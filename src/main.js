const setBtn = document.getElementById("setCookie")
const getBtn = document.getElementById("getCookie")

function setCookie(){
  fetch("/api/setCookie", {credential: 'include'})
  console.log("Cookie setado!")
}

function getCookie(){
  fetch("/api/getCookies", {
    method: "GET",
    credential: 'include',
    // mode: "cors"
  })
  console.log("cookie acessado!")
}

setBtn.addEventListener("click", setCookie)
getBtn.addEventListener("click", getCookie)