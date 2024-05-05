			
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});


 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1()
    echarts_2()
    echarts_3()
    pe04()

    pe01()
    pe02()
    pe03()
    function echarts_4() {
      var myChart = echarts.init(document.getElementById('echarts4'));
      var data = [{
        "name": " ",
        "value": 20000
    }, {
        "name": " ",
        "value": 18170
    }, {
        "name": " ",
        "value": 19870
    } ]
   
   
    option = {
   
        color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"],

        grid: {
            bottom: 0,
            left: 0,
            right: '0'
        },
        series: [
            // 主要展示层的
            {
                radius: ['30%', '50%'],
                center: ['50%', '50%'],
                type: 'pie',
                label: {
                    normal: {
                        show: true,
                          formatter: ['{b|{b}}','{c|{c}次}', '{d|同比：{d}%}'].join('\n'),
                         rich: {
                       c: {
                           color: 'rgb(241,246,104)',
                           fontSize: 20,
                           fontWeight:'bold',
                           lineHeight: 25
                       },
                       b: {
                           color: 'rgb(98,137,169)',
                           fontSize: 15,
                           height: 40
                       },
                   },
                       
                        position: 'outside'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 15,
                        length2: 50
                    },
                    emphasis: {
                        show: true
                    }
                },
                name: " ",
                data: data,
   
            },
            // 边框的设置
            {
                radius: ['30%', '35%'],
                center: ['50%', '50%'],
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                animation: false,
                tooltip: {
                    show: false
                },
                data: [{
                    value: 1,
                    itemStyle: {
                        color: "rgba(250,250,250,0.3)",
                    },
                }],
            }, {
                name: '外边框',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                center: ['50%', '50%'],
                radius: ['60%', '61%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 9,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: '#0c2c69'
                        }
                    }
                }]
            },
        ]
    };
     
             myChart.setOption(option);
             window.addEventListener("resize",function(){
                 myChart.resize();
             });
     
       
         }
function echarts_1() {
 var myChart = echarts.init(document.getElementById('echarts1'));
 option = {
  tooltip: {
  trigger: 'axis',
  axisPointer: {type: 'shadow'},

},
legend: {
    x: 'center',
    y: '0',
    icon: 'circle',
    itemGap:8,
    textStyle: {color: 'rgba(255,255,255,.5)'},
    itemWidth: 10,
    itemHeight: 10,
},
grid: {
  left: '0',
    top: '30',
  right: '15',
  bottom: '0',
  containLabel: true
},
xAxis: {
  type: 'category',
  data: ['广电', '电信', '移动', '联通', '铁塔'],
  axisLine: {show:false},
 
  axisLabel: {
    textStyle: {
     color:'rgba(255,255,255,.6)',
     fontSize:14
    }
  },
},

yAxis: {
  type: 'value',
  splitNumber:4,
  axisLine: { show: false },
axisTick: {show: false},
  splitLine: {
    show: true,
    lineStyle: {
      color: 'rgba(255,255,255,0.05)'
    }
  },
  axisLabel:  {
      textStyle: {
        color:'rgba(255,255,255,.6)',
        fontSize:14
                 },
             },
},
series: [ {
    name: '2019',
    type: 'bar',
    barWidth: '15%',
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#8bd46e'
            }, {
                offset: 1,
                color: '#03b48e'
            }]),
            barBorderRadius: 11,
        }
        
      },
    data: [16.9,30, 42.9, 11.5,11.5]
  
  },
    {
    name: '2020',
    type: 'bar',
  barWidth: '15%',
  itemStyle: {
    normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#3893e5'
        }, {
            offset: 1,
            color: '#248ff7'
        }]),
    barBorderRadius: 11,
    }
  },
    data: [8.39,25.36, 47.53, 4.96,13.54]
  
  },
  {
    name: '2021',
    type: 'bar',
    barWidth: '15%',
    itemStyle: {
      normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#43cadd'
          }, {
              offset: 1,
              color: '#0097c9'
          }]),
      barBorderRadius: 11,
      }
    },
    data:  [8.7,24.77,52.54, 5.28,0.81]
  
  }
  
]
};

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

	
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts2'));

       option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
    grid: {
        left: '0',
		top: '30',
        right: '20',
        bottom: '-10',
        containLabel: true
    },legend: {
        data: ['', ''],
        right: 'center',
        top:0,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.1)'
			}

        },

   data: ['2016', '2017', '2018', '2019', '2020', '2021']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
       // splitNumber: 6,
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '贵州数字经济增速(%)',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: 'rgba(228, 228, 126, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(228, 228, 126, .8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(228, 228, 126, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#dddc6b',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [10.5, 37.2, 24.6,22.1,15.6, 20.6]
    }, {
        name: '全国数字经济增速(%)',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: 'rgba(255, 128, 128, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 128, 128,.8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255, 128, 128, .1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#dddc6b',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [18.9, 20.3, 20.9, 15.6,9.7,16.2]

    }, 

		 ]

};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts3'));

       option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
    grid: {
        left: '0',
		top: '30',
        right: '20',
        bottom: '-10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.1)'
			}

        },

   data: [ '2017', '2018', '2019', '2020', '2021','2022']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)',

            }
        }
    }],
    series: [
		{
        name: '大数据与实体融合指数（%）',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 10,
        showSymbol: true,
        lineStyle: {
			
            normal: {
				color: 'rgba(228, 228, 126, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(228, 228, 126, .8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(228, 228, 126, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#dddc6b',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [33.8, 36.9, 39.5, 41.1,42.5, 44.5]

    }

		 ]

};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function pe01() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe01'));
        var txt=24.33
        option = {
            title: {
              text: txt+'%',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '13'
              }
            },
            color:'#49bcf7',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                  normal: {
                    color:'#eaff00',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未使用',
                value: 100-txt
              }]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function pe02() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe02'));
        var txt=15.82
        option = {
            title: {
              text: txt+'%',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '13'
              }
            },
            color:'#49bcf7',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                  normal: {
                    color:'#ea4d4d',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未使用',
                value: 100-txt
              }]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function pe03() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe03'));
        var txt=43.96
        option = {
            title: {
              text: txt+'%',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '13'
              }
            },
            color:'#49bcf7',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                  normal: {
                    color:'#395ee6',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未使用',
                value: 100-txt
              }
            ]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function pe04() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('lastecharts'));
      option = {
    
        tooltip: {
            trigger: 'axis'
        },
        radar: [{
            indicator: [{
                text: '数据流通交易额',
                max: 3500
            }, {
                text: '电子信息产业总产值',
                max: 3500
            }, {
                text: '电子信息制造业总产值',
                max: 3500
            }, {
                text: '软件和信息技术服务业年收入',
                max: 3500
            }, {
                text: '电信业务年收入',
                max: 3500
            }],
            textStyle: {
                color: 'red'
            },
            center: ['55%', '50%'],
            radius: '70%',
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
        
            name: {
                padding:-5,
                formatter: '{value}',
                textStyle: {
                  fontSize:14,
                    color: 'rgba(255,255,255,.6)'
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(255,255,255,.05)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.05)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.05)'
                }
            }
        }, ],
        series: [{
            name: '雷达图',
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            data: [{
                name: '2025（亿元）',
                value: [100, 3500, 2100, 1000, 400],
                lineStyle: {
                    normal: { 
                        color:'#03b48e',
                        width:2,
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#03b48e',
                        opacity:.4
                    }
                },
                symbolSize: 0,
              
            }, ]
        }, ]
    };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize",function(){
          myChart.resize();
      });
  }
})



		
		
		


		



















