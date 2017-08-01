import { getParentElement, isNativeHTMLElement, $ } from './utils'

class ContributionMap {
  constructor() {
    const target = $('.js-contribution-graph')
    const parent = getParentElement(target)
    console.log(parent)
  }
}

new ContributionMap()