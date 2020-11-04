
$(function(){
    var deptContent = [];
    $.ajax({
        url : "/getAllSource",//请求地址
        dataType : 'json',//数据格式
        type : "get",//请求方式
        data :"",
        async : false,//是否异步请求
        success : function(msg) {//如何发送成功
            if(msg){
                $.each(msg.data, function (n, value) {
                    console.log(msg.data[n].sucode);
                    console.log(msg.data[n].svcode);
                    console.log( msg.data[n].sccode);
                    console.log(msg.data[n].sproduct);
                    deptContent.push( {product: msg.data[n].sproduct, '单位码':msg.data[n].svcode, '车辆码':msg.data[n].sccode, '小区码': msg.data[n].sucode})
                    console.log(deptContent)
                });


            }
        }
    })
    /**************************************************************************************/
// 基于准备好的dom，初始化echarts实例
    var main = echarts.init($('#main')[0]);
// 指定图表的配置项和数据
    var opt1 = {
        testa:'',
        legend: {
            textStyle: {
                color: "rgba(248, 246, 246, 1))"
            }
        },
        tooltip: {},
        color: ["#aaffa9", "#00CBE9", "#ff8e4a"],
        dataset: {
            dimensions: ['product', '单位码', '车辆码', '小区码'],

            source: deptContent

        },
        xAxis: {type: 'category',
            axisLabel: {
                show: true,
                textStyle: {
                    color:"#fff"
                }
            }},

        yAxis: {
            axisLabel: {
                show: true,
                textStyle: {
                    color:"#fff"


                }
            }
        },
        series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
        ]
    };


// 使用刚指定的配置项和数据显示图表。
    main.setOption(opt1);
    opt1.dataset.source[0]='查查'
    console.log(opt1);
    main.on('click', function (params) {
        var countValue = params.value;
        alert(countValue.product);
        console.log(countValue.小区码)
        console.log(countValue);
    })






    /**************************************************************************************/
    var myChart = echarts.init(document.getElementById('main1'));

    var option1 = {
        title: {
            text: '每日注册趋势',
            textStyle: {
                fontWeight: 'normal',
                color: '#fff',
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['单位码', '车辆码', '小区码'],
            color: '#fff',
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2-01', '2-02', '2-03', '2-04', '2-05', '2-06', '2-07','2-08','2-09','2-10','2-11','2-12','2-13','2-14','2-15','2-16','2-17','2-18','2-19','2-20','2-21','2-22','2-23','2-24','2-25','2-26','2-27','2-28','2-29','3-01'],
            axisLabel: {
                show: true,
                textStyle: {
                    color:"#fff"
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color:"#fff"
                }
            }
        },
        series: [
            {
                name: '单位码',
                type: 'line',
                stack: '总量',
                data: [1820, 2932, 5901, 3934, 4290, 4330, 5320,4330,4432,3330,5330,2786,4330,4330,4330,4330,4330,4330,4330,4630,4330,3230,4330,4330,4330,4330,4330,4330,1330,2230,4230,3330,4330,4930,4330,4330,4330,6330,4330,]
            },
            {
                name: '车辆码',
                type: 'line',
                stack: '总量',
                data: [1820, 2932, 5901, 3934, 4290, 4330, 5320,4330,4432,3330,5330,2786,4330,4330,4330,2330,4330,3330,4330,4330,4330,4330,4330,4330,4330,4330,4330,630,4330,4330,4330,4330,4330,4330,4330,4330,4330,4330,4330,],
            },
            {
                name: '小区码',
                type: 'line',
                stack: '总量',
                data: [12, 932, 901, 2224, 1290, 1330, 700,6330,2230,1330,5530,3430,1330,6430,1330,4330,1330,1330,2330,1330,430,5330,1330,3330,3410,4330,5530,2230,4430,1330,4530,3330,5530,1430,5530,1330,1330,4830,5430,1330,1330,1330,]
            },

        ]
    };

    myChart.setOption(option1);



    /**************************************************************************************/
    var myChart = echarts.init(document.getElementById('main2'));
    var option2 = {
        color: ["#52DFCDFF", "#e7b76cFF",],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['扫码总量', '今日增量']
        },
        grid: {
            left: '1%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.1],
            axisLabel: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            data: ['其他车', '公交车', '网约车', '出租车'],
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#E5FF8B"
                }
            }
        },
        series: [
            {
                name: '扫码总量',
                type: 'bar',
                label: {
                    show: true,
                    position: 'inside'
                },
                data: [ 244, 200, 220, 210]
            },
            {
                name: '今日增量',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true
                },
                data: [374, 390, 450, 420]
            },

        ]
    };
    myChart.setOption(option2);
    /**************************************************************************************/

});

//加载初始化数据
function initData(){


}


