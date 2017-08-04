import { getParentElement, isNativeHTMLElement, $, $$ } from './utils'

function generateResult(element) {
  const { attributes } = element
  return [...attributes].reduce(function(memo, current) {
    return Object.assign({}, memo, {
      [current.name]: current.value,
    })
  }, Object.create(null))
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