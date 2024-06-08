const slider = document.getElementById('slider')
const paginator = document.getElementById('paginator')
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg"]
let position = 0
const interval = 6000
const selectedColor = "#566573"
const keyboardShortcut = {
  ArrowRight: () => nextSlide(),
  ArrowLeft: () => prevSlide()
}

function initSlider(image) {
  slider.innerHTML = `<img src="${image}" width="800" height="400"/>`
}

function nextSlide() {
  if (position >= images.length - 1) {
    position = -1
  }
  position++
  initSlider(images[position])
  selectButton()
}

function prevSlide() {
  if (position <= 0) {
    position = images.length
  }
  position--
  selectButton()
  initSlider(images[position])
}

setInterval(() => nextSlide(), interval)
prevBtn.addEventListener('click', () => prevSlide())
nextBtn.addEventListener('click', () => nextSlide())
document.addEventListener('keydown', (e) => keyboardShortcut[e.key]())

function selectButton() {
  const buttons = document.querySelectorAll("button")
  buttons.forEach((button, index) => {
    button.style.backgroundColor = ""
    if (index === position + 1 && index > 0) {
      button.style.backgroundColor = selectedColor
    }
  })
}

images.forEach((_, index) => {
  const button = document.createElement("button")
  if (index === 0) {
    button.style.backgroundColor = selectedColor
  }
  button.innerText = index + 1
  paginator.appendChild(button)
  button.addEventListener('click', () => {
    initSlider(images[index])
    position = index
    selectButton()
  })
})
initSlider(images[position])