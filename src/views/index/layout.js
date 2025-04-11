import '../../style/style.scss'
import main from './main.js'
import header from './header.js'

document.querySelector('#app').innerHTML = `
    <header></header>
    <main></main>
    <footer></footer>
    `

document.querySelector("header").append(header())
document.querySelector("main").append(main())
