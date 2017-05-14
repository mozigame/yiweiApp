import {calcNumber, combin, calcNumberSum, calcThreeSumCount,arrySameNum } from '../../../tools/command'

export default {
    select_three_direct: {
        select_three_direct_duplex(data){
            var rst = { count: 0, numbers: '' }
            var bai = data['bai'] || []
            var shi = data['shi'] || []
            var ge = data['ge'] || []
            rst.count = bai.length * shi.length * ge.length
            if(rst.count > 0){
                rst.numbers = calcNumber(bai, shi, ge)
            }
            return rst
        },
        select_three_direct_single(data){
            var rst = { count: 0, numbers: '' }
            if(data){
                var re = /[\s,$]/g
                var dataArray = data.split(re)
                var valid = dataArray.some(elem => isNaN(elem) || elem.length !== 3)
                if(!valid){
                    rst.count = dataArray.length
                    rst.numbers = dataArray.join('$')
                } else {
                    rst.msg = '输入的注单号码格式不正确,请重新输入'
                }
            }
            return rst
        },
    },
    select_three_group: {
        select_three_group_suplex(data){
            var rst = { count: 0, numbers: '' }
            var groupThree = data['groupThree'] || []
            rst.count = combin(groupThree.length, 2) * 2
            if(rst.count > 0){
                rst.numbers = calcNumber(groupThree)
            }
            return rst
        },
        select_three_group_single(data){
            var rst = { count: 0, numbers: '' }
            if(data){
                var re = /[\s,$]/g
                var dataArray = data.split(re)
                var valid = dataArray.some(elem => isNaN(elem) || elem.length !== 3 || !arrySameNum(elem, 2))
                if(!valid){
                    rst.count = dataArray.length
                    rst.numbers = dataArray.join('$')
                } else {
                    rst.msg = '输入的注单号码格式不正确,请重新输入'
                }
            }
            return rst
        },
        select_three_group_six_duplex(data){
            var rst = { count: 0, numbers: '' }
            var groupSix = data['groupSix'] || []
            rst.count = combin(groupSix.length, 3)
            if(rst.count > 0){
                rst.numbers = calcNumber(groupSix)
            }
            return rst
        },
        select_three_group_six_single(data){
            var rst = { count: 0, numbers: '' }
            if(data){
                var re = /[\s,$]/g
                var dataArray = data.split(re)
                var valid = dataArray.some(elem => isNaN(elem) || elem.length !== 3 || arrySameNum(elem, 2) || arrySameNum(elem, 3))
                if(!valid){
                    rst.count = dataArray.length
                    rst.numbers = dataArray.join('$')
                } else {
                    rst.msg = '输入的注单号码格式不正确,请重新输入'
                }
            }
            return rst
        },
    },
    select_three_not_location: {
        select_three_not_location_three(data) {
            var rst = { count: 0, numbers: '' }
            var noLocation = data['not_location'] || []
            rst.count = noLocation.length
            if(rst.count > 0){
                rst.numbers = calcNumber(noLocation)
            }
            return rst
        }
    },
    select_three_direct_sum: {
        select_three_direct_sum_three(data) {
            console.log('select_three_direct_sum_three',data)
            var rst = { count: 0, numbers: '' }
            var sum = data['sum'] || []
            var count  = 0
            sum.forEach( function(elemeit) {
                var s = elemeit.replace(/s_/gi,"")
                count = count + calcThreeSumCount(s)
            })
            rst.count = count
            if(rst.count > 0){
                rst.numbers = calcNumberSum(sum)
            }
            return rst
        }
    },
    select_three_direct_two: {
        select_three_direct_two_last_direct_duplex(data){
            var rst = { count: 0, numbers: '' }
            var shi = data['shi'] || []
            var ge = data['ge'] || []
            rst.count = shi.length * ge.length
            if(rst.count > 0){
                rst.numbers = calcNumber(shi, ge)
            }
            return rst
        },
        select_three_direct_two_last_direct_single(data){
            var rst = { count: 0, numbers: '' }
            if(data){
                var re = /[\s,$]/g
                var dataArray = data.split(re)
                var valid = dataArray.some(elem => isNaN(elem) || elem.length !== 2)
                if(!valid){
                    rst.count = dataArray.length
                    rst.numbers = dataArray.join('$')
                } else {
                    rst.msg = '输入的注单号码格式不正确,请重新输入'
                }
            }
            return rst
        },
        select_three_direct_two_first_direct_duplex(data){
            var rst = { count: 0, numbers: '' }
            var bai = data['bai'] || []
            var shi = data['shi'] || []
            rst.count = bai.length * shi.length
            if(rst.count > 0){
                rst.numbers = calcNumber(bai, shi)
            }
            return rst
        },
        select_three_direct_two_first_direct_single(data){
            var rst = { count: 0, numbers: '' }
            if(data){
                var re = /[\s,$]/g
                var dataArray = data.split(re)
                var valid = dataArray.some(elem => isNaN(elem) || elem.length !== 2)
                if(!valid){
                    rst.count = dataArray.length
                    rst.numbers = dataArray.join('$')
                } else {
                    rst.msg = '输入的注单号码格式不正确,请重新输入'
                }
            }
            return rst
        }
    },
    select_three_direct_one: {
        select_three_direct_one_last_direct(data){
            var rst = { count: 0, numbers: '' }
            var ge = data['ge'] || []
            rst.count = ge.length
            if(rst.count > 0){
                rst.numbers = calcNumber(ge)
            }
            return rst
        },
        select_three_direct_one_first_direct(data){
            var rst = { count: 0, numbers: '' }
            var bai = data['bai'] || []
            rst.count = bai.length
            if(rst.count > 0){
                rst.numbers = calcNumber(bai)
            }
            return rst
        },
    },
}