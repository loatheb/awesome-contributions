const recursionHelper = fn => args => Array.isArray(args) ? args.map(fn) : fn(args)

const isNativeHTMLElementHelper = recursionHelper(node => node.nodeType === 1)
const getParentElementHelper = recursionHelper(node => node.parentElement)

export const getParentElement = nodes => getParentElementHelper(nodes)
export const isNativeHTMLElement = nodes => isNativeHTMLElementHelper(nodes)

export { $, $$ } from './selector'
