const heading = document.querySelector('#title-contactme')

const timeout = () => {
  setTimeout(
    function() { heading.innerHTML = "Let me know."} , 2000)
  setTimeout(
    function() { heading.innerHTML = "I'll be happy to help!"} , 4000)
}

document.addEventListener("DOMContentLoaded", timeout);