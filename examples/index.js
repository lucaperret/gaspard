import { find, css, addClass, fadeIn } from '../'

const app = find('#app')
css(app, 'background-color', 'green')

const paragraph = find('p:first-child', app)[0]
addClass(paragraph, 'introduction')
fadeIn(paragraph)
