const rotateIcon = (event) => {
  if (event.target.classList.contains("btn")) {
    const button = event.target.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.firstElementChild 
    if(button.classList.contains("arrow-down")) {
      button.classList.add("arrow-up")
      button.classList.remove("arrow-down")
    } else if (button.classList.contains("arrow-up")) {
      button.classList.add("arrow-down")
      button.classList.remove("arrow-up")
    }
  }
  if (event.target.classList.contains("clicking-object")) {
    const button = event.target.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.firstElementChild 
    if(button.classList.contains("arrow-down")) {
      button.classList.add("arrow-up")
      button.classList.remove("arrow-down")
    } else if (button.classList.contains("arrow-up")) {
      button.classList.add("arrow-down")
      button.classList.remove("arrow-up")
    }
  }
  if (event.target.classList.contains("arrow-down") || event.target.classList.contains("arrow-up")) {
    const button = event.target
    if(button.classList.contains("arrow-down")) {
      button.classList.add("arrow-up")
      button.classList.remove("arrow-down")
    } else if (button.classList.contains("arrow-up")) {
      button.classList.add("arrow-down")
      button.classList.remove("arrow-up")
    }
  }
}


document.querySelector('#container-table').addEventListener('click', rotateIcon)