import { GaspardElements } from '../src'
const elements = new GaspardElements('#app2')
elements.css('background-color', 'red').addClass('test').fadeOut(2000)
console.log(elements)
