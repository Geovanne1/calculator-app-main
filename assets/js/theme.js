const span = document.querySelector('.ilustration')
const label = document.querySelectorAll('label')
const theme1 = document.querySelector('.theme1')
const theme2 = document.querySelector('.theme2')
const theme3 = document.querySelector('.theme3')
const stylesThemes = document.querySelector('.style-themes')

console.log(stylesThemes)

for(let i = 0; i < label.length; i++) {
  label[i].addEventListener('change', () => {
    if (theme1.checked) {
     span.style.justifyContent = 'flex-start'
     stylesThemes.href = './assets/css/themes/theme1.css'
    } else if (theme2.checked) {
      console.log('o tema 2 esta marcado')
      span.style.justifyContent = 'center'
      stylesThemes.href = './assets/css/themes/theme2.css'
    } else if (theme3.checked) {
      console.log('o tema 3 esta marcado')
      span.style.justifyContent = 'flex-end'
      stylesThemes.href = './assets/css/themes/theme3.css'
    }
  })
}