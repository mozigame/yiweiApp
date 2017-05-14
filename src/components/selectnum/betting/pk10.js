import {calcNumber, combin, calcPK10Single } from '../../../tools/command'

export default {
    pk10_guess_one: {
        pk10_guess_one_duplex(data){
            var rst = { count: 0, numbers: '' }
            var one = data['guess_one']
            if(one && one.length >= 1){
                rst.count = combin(one.length, 1)
                rst.numbers = calcNumber(one)
            }
            return rst
        }
    },
    pk10_guess_one_two: {
        pk10_guess_one_two_duplex(data){
            var rst = { count: 0, numbers: '' }
            var one = data['guess_one'] || []
            var two = data['guess_two'] || []
            var count = 0
            one.forEach( function(elemOne) {
                two.forEach( function(elemTwo) {
                    if(elemOne !== elemTwo){
                        count++
                    }
                })
            })
            rst.count = count
            if(rst.count > 0){
                rst.numbers = calcNumber(one, two)
            }    
            return rst
        },
        pk10_guess_one_two_single(data){
            return calcPK10Single(data, 4)
        },
    },
    pk10_guess_first_three: {
        pk10_guess_first_three_duplex(data){
            var rst = { count: 0, numbers: '' }
            var one = data['guess_one']
            var two = data['guess_two']
            var three = data['guess_three']
            if(one && one.length > 0 && two && two.length > 0 && three && three.length > 0){
                var count  = 0
                one.forEach( function(elemOne) {
                    two.forEach( function(elemTwo) {
                        three.forEach( function(elemThree) {
                            if(elemOne !== elemTwo && elemTwo !== elemThree && elemOne !== elemThree){
                                count ++
                            }
                        })
                    })
                })
                rst.count = count
                if(count > 0){
                    rst.numbers = calcNumber(one, two, three)
                }
            }
            return rst
        },
        pk10_guess_first_three_single(data){
            return calcPK10Single(data, 6)
        },
    },
    pk10_guess_location: {
        pk10_guess_location_one_five(data){
            var rst = { count: 0, numbers: '' }
            var one = data['guess_1'] || []
            var two = data['guess_2'] || []
            var three = data['guess_3'] || []
            var four = data['guess_4'] || []
            var five = data['guess_5'] || []
            rst.count = one.length + two.length + three.length + four.length + five.length
            if(rst.count > 0){
                rst.numbers = calcNumber(one, two, three, four, five)
            }
            return rst
        },
        pk10_guess_location_six_ten(data){
            var rst = { count: 0, numbers: '' }
            var six = data['guess_6'] || []
            var seven = data['guess_7'] || []
            var eight = data['guess_8'] || []
            var nine = data['guess_9'] || []
            var ten = data['guess_10'] || []
            rst.count = six.length + seven.length + eight.length + nine.length + ten.length
            if(rst.count > 0){
                rst.numbers = calcNumber(six, seven, eight, nine, ten)
            }
            return rst
        },
    },
    pk10_guess_daxiao: {
        pk10_guess_daxiao_one(data){
            var rst = { count: 0, numbers: '' }
            var one = data['guess_1_c']
            if(one && one.length >= 1){
                rst.count = combin(one.length, 1)
                rst.numbers = calcNumber(one)
            }
            return rst
        },
        pk10_guess_daxiao_two(data){
            var rst = { count: 0, numbers: '' }
            var two = data['guess_2_c']
            if(two && two.length >= 1){
                rst.count = combin(two.length, 1)
                rst.numbers = calcNumber(two)
            }
            return rst
        },
        pk10_guess_daxiao_three(data){
            var rst = { count: 0, numbers: '' }
            var three = data['guess_3_c']
            if(three && three.length >= 1){
                rst.count = combin(three.length, 1)
                rst.numbers = calcNumber(three)
            }
            return rst
        },
    },
    pk10_guess_danshuang: {
        pk10_guess_danshuang_one(data){
            var rst = { count: 0, numbers: '' }
            var one = data['guess_1_c']
            if(one && one.length >= 1){
                rst.count = combin(one.length, 1)
                rst.numbers = calcNumber(one)
            }
            return rst
        },
        pk10_guess_danshuang_two(data){
            var rst = { count: 0, numbers: '' }
            var two = data['guess_2_c']
            if(two && two.length >= 1){
                rst.count = combin(two.length, 1)
                rst.numbers = calcNumber(two)
            }
            return rst
        },
        pk10_guess_danshuang_three(data){
            var rst = { count: 0, numbers: '' }
            var three = data['guess_3_c']
            if(three && three.length >= 1){
                rst.count = combin(three.length, 1)
                rst.numbers = calcNumber(three)
            }
            return rst
        },
    },
}