import '../../style/style.scss'
import main from './main.js'

document.querySelector('#app').innerHTML = `
    <header></header>
    <main></main>
    <footer></footer>
    `

document.querySelector("main").append(main())
