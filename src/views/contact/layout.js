import '../../style/style.scss'
import main from './main.js'
import header from '../header.js'
import footer from '../footer.js'
import validation from './validator.js'
import textarea from './textarea.js'
import email from './emailJS.js'


document.querySelector('#app').innerHTML = `
    <header></header>
    <main></main>
    <footer></footer>
    `

document.querySelector("header").append(header(false))
document.querySelector("main").append(main())
document.querySelector("footer").append(footer())

validation();
email();
textarea();