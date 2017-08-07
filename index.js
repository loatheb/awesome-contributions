/* global __DEV__ */
import echarts from 'echarts'

import { getParentElement, $, $$ } from './utils'

function generateResult(element) {
  const { attributes } = element
  return [...attributes].reduce(function(memo, current) {
    return Object.assign({}, memo, {
      [current.name]: current.value,
    })
  }, Object.create(null))
}

function generateEchartsOption(data) {
  return [data['data-date'], +(data['data-count'])]
}

class ContributionMap {
  constructor() {
    if (__DEV__) {
      this.initData = require('./data.js')
      this.myChart = echarts.init($('#main'))
    } else {
      const target = $('.js-calendar-graph')
      const parent = getParentElement(target)
      parent.style.height = '500px'
      parent.style.width = '100%'
      const contributions = $$('.js-calendar-graph-svg rect')
      this.initData = [...contributions].map(generateResult)
      this.myChart = echarts.init(parent)
    }
  }
  render () {
    const data = this.initData.map(generateEchartsOption)

    const startDate = data[0][0]
    const endDate = data[data.length - 1][0]

    const option = {
      visualMap: {
        show: false,
      },
      calendar: {
        range: [startDate, endDate],
        cellSize: 15,
        yearLabel: {
          show: false,
        },
        monthLabel: {
          show: false,
        },
        dayLabel: {
          show: false,
        },
      },
      tooltip : {
        trigger: 'item'
      },
      series: {
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: val => val[1] * 2,
        data,
      },
    }
    this.myChart.setOption(option)
  }
}

new ContributionMap().render()