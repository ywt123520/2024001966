 $(window).load(function(){  
             $(".loading").fadeOut()
            })  
			
/****/
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});

 $(function () {

 	echarts_1();
 	echarts_2();
 	echarts_3();

 	function echarts_1() {
 		var myChart = echarts.init(document.getElementById('echart1'));
 		option = {
 			tooltip: {

 				trigger: 'axis',
 				axisPointer: {
 					lineStyle: {
 						color: '#57617B'
 					}
 				},
 				formatter: '{b}年	:<br/> 里程数{c}'
 			},

 			grid: {
 				left: '0',
 				right: '20',
 				top: '10',
 				bottom: '0',
 				containLabel: true
 			},
 			xAxis: [{
 				type: 'category',
 				boundaryGap: false,
 				axisLine: {
					show: false,
 					lineStyle: {
 						color: 'rgba(255,255,255,.6)'
 					}
 				},
 				data: ['2017', '2018', '2019', '2020', '2021', '2022']
 			}],
 			yAxis: [{
 				axisLabel: {
 					show: true,
 					textStyle: {
 						color: 'rgba(255,255,255,.6)'
 					}
 				},
 				axisLine: {
					show: false,
 					
 				},
 				splitLine: {
 					lineStyle: {
						type:'dotted',
 						color: 'rgba(255,255,255,.1)'
 					}
 				}
 			}],
 			series: [{
 				name: '里程数',
 				type: 'line',
 				smooth: true,
 				symbol: 'circle',
 				symbolSize: 5,
 				showSymbol: false,
 				lineStyle: {
 					normal: {
 						width: 2
 					}
 				},

 				areaStyle: {
 					normal: {
 						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
 							offset: 0,
 							color: 'rgba(98, 201, 141, 0.5)'
 						}, {
 							offset: 1,
 							color: 'rgba(98, 201, 141, 0.1)'
 						}], false),
 						shadowColor: 'rgba(0, 0, 0, 0.1)',
 						shadowBlur: 10
 					}
 				},
 				itemStyle: {
 					normal: {
 						color: '#4cb9cf',
 						borderColor: 'rgba(98, 201, 141,0.27)',
 						borderWidth: 12
 					}
 				},
 				data: [3205, 3560, 3598, 3867, 3873, 4600]
 			}]
 		};

 		// 使用刚指定的配置项和数据显示图表。
 		myChart.setOption(option);
 		window.addEventListener("resize", function () {
 			myChart.resize();
 		});
 	}
	 function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
   option = {
        tooltip: {
            trigger: 'axis'
        },
        radar: {
            indicator: [{
                name: '等外',
                max: 80,
                num:60,
            }, {
                name: '高速',
                max: 80,
                num:33,
            }, {
                name: '一级',
                max: 80,
                num:10,
            }, {
                name: '二级',
                max: 80,
                num:50,
            }, {
                name: '三级',
                max:80,
                num:100,
            }, {
                name: '四级',
                max: 80,
                num:100,
            }],
            splitNumber: 4,
			 nameGap: 0,
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#2c353d'
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#2c353d'],
                    width: 1
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['transparent']
                }
            },
            name: {
                color: 'rgba(255,255,255,.8)',
				
            },
        },
        series: [{
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#096e32',
                    borderColor: '#46ff91'
                }
            },
            areaStyle:{
                color:['#096e32'],
                opacity:0.4
            },
            data: [{
                value: [3.6, 3.3, 2.5, 8.1, 8.9, 73.6],
            }]
        },]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	 function echarts_3() {
 		var myChart = echarts.init(document.getElementById('echart3'));
 		option = {
 			tooltip: {

 				trigger: 'axis',
 				axisPointer: {
 					lineStyle: {
 						color: '#57617B'
 					}
 				},
 				formatter: '{b}年:<br/> 里程数{c}'
 			},

 			grid: {
 				left: '0',
 				right: '20',
 				top: '10',
 				bottom: '0',
 				containLabel: true
 			},
 			xAxis: [{
 				type: 'category',
 				boundaryGap: false,
 				axisLine: {
					show: false,
 					lineStyle: {
 						color: 'rgba(255,255,255,.6)'
 					}
 				},
 				data: ['2017', '2018', '2019', '2020', '2021', '2022']
 			}],
 			yAxis: [{
 				axisLabel: {
 					show: true,
 					textStyle: {
 						color: 'rgba(255,255,255,.6)'
 					}
 				},
 				axisLine: {
					show: false,
 					
 				},
 				splitLine: {
 					lineStyle: {
						type:'dotted',
 						color: 'rgba(255,255,255,.1)'
 					}
 				}
 			}],
 			series: [{
 				name: '里程数',
 				type: 'line',
 				//smooth: true,
 				symbol: 'circle',
 				symbolSize: 5,
 				//showSymbol: false,
 				lineStyle: {
 					normal: {
 						width: 2
 					}
 				},

 				areaStyle: {
 					normal: {
 						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
 							offset: 0,
 							color: 'rgba(98, 201, 141, 0.5)'
 						}, {
 							offset: 1,
 							color: 'rgba(98, 201, 141, 0.1)'
 						}], false),
 						shadowColor: 'rgba(0, 0, 0, 0.1)',
 						shadowBlur: 10
 					}
 				},
 				itemStyle: {
 					normal: {
 						color: '#4cb9cf',
 						borderColor: 'rgba(98, 201, 141,0.27)',
 						borderWidth: 12
 					}
 				},
 				data: [5835, 6453, 7005, 7607, 8010, 8331]
 			}]
 		};

 		// 使用刚指定的配置项和数据显示图表。
 		myChart.setOption(option);
 		window.addEventListener("resize", function () {
 			myChart.resize();
 		});
 	}
 })












