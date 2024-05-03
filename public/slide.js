let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

const moveNext = () => {
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
}

const movePrev = () => {
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length - 1])
}

next.addEventListener('click', moveNext)
prev.addEventListener('click', movePrev)

// Automatic slide
setInterval(() => {
  moveNext() // This will automatically move to the next slide every 5 seconds
}, 5000)
