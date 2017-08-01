import { getParentElement, isNativeHTMLElement } from './utils'

const $ = document.querySelector.bind(document)
const $$ = document.querySelector.bind(document)

console.log(getParentElement($('.js-contribution-graph')))

