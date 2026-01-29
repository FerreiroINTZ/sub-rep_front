// fetch("http://localhost:3100/", {credentials: 'include'})

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