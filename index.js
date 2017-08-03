import { getParentElement, isNativeHTMLElement, $, $$ } from './utils'

function generateResult(element) {
  const { attributes } = element
  return [...attributes].map(function (attribute) {
    console.log(attribute)
    return Object.assign(Object.create(null), {
      [attribute]: element.getAttribute(attribute)
    })
  })
}

class ContributionMap {
  constructor() {
    const target = $('.js-contribution-graph')
    const parent = getParentElement(target)

    const contributions = $$('.js-calendar-graph-svg rect')
    const contributionTree = [...contributions].map(generateResult)
    console.log(contributionTree)
  }
}

new ContributionMap()