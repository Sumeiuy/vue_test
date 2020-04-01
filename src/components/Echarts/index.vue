<template>
  <div>
    <div id="echarts"
         :style="{width: '600px', height: '600px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  mounted () {
    var dom = document.getElementById('echarts')
    var myChart = this.echarts.init(dom)
    let option = {
      backgroundColor: '#2c343c',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999',
            type: 'solid'
          }
        }
      },
      // toolbox: {
      //   feature: {
      //     dataView: {show: true, readOnly: false},
      //     magicType: {show: true, type: ['line', 'bar']},
      //     restore: {show: true},
      //     saveAsImage: {show: true}
      //   }
      // },
      legend: {
        data: ['蒸发量', '降水量', '平均温度']
      },
      xAxis: [
        {
          type: 'value',
          data: ['0', '1', '5', '14', '24', '32', '42', '54', '63', '73', '83', '94', '99'],
          axisPointer: {
            type: 'line'
          },
          axisLine: {
            show: true,
            // 隐藏X轴轴线
            lineStyle: {
              color: '#fff'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '水量',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} ml'
          },
          axisLine: {
            show: true,
            // 隐藏X轴轴线
            lineStyle: {
              color: '#fff'
            }
          }
        },
        {
          type: 'value',
          name: '温度',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} °C'
          },
          axisLine: {
            show: true,
            // 隐藏X轴轴线
            lineStyle: {
              color: '#fff'
            }
          }
        }
      ],
      series: [
        {
          name: '',
          type: 'line',
          data: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4]
        },
        {
          name: '',
          type: 'line',
          data: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4]
        },
        {
          name: '',
          type: 'line',
          data: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4]
        }
      ]
    }
    // 绘制图表
    myChart.setOption(option)
  }
}
</script>
