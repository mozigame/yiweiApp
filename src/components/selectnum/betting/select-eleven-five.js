import {calcNumber, calcSelecSevenFiveFingle, calcSelecSevenFiveDuplex } from '../../../tools/command'

export default {
    select_eleven_five_any_one:{
        select_eleven_five_any_one_duplex(data){
            return calcSelecSevenFiveDuplex(data, 1)
        },
        select_eleven_five_any_one_single(data){
            return calcSelecSevenFiveFingle(data, 2)
        }
    },
    select_eleven_five_any_two:{
        select_eleven_five_any_two_duplex(data){
            return calcSelecSevenFiveDuplex(data, 2)
        },
        select_eleven_five_any_two_single(data){
            return calcSelecSevenFiveFingle(data, 4)
        },
    },
    select_eleven_five_any_three:{
        select_eleven_five_any_three_duplex(data){
            return calcSelecSevenFiveDuplex(data, 3)
        },
        select_eleven_five_any_three_single(data){
            return calcSelecSevenFiveFingle(data, 6)
        }
    },
    select_eleven_five_any_four:{
        select_eleven_five_any_four_duplex(data){
            return calcSelecSevenFiveDuplex(data, 4)
        },
        select_eleven_five_any_four_single(data){
            return calcSelecSevenFiveFingle(data, 8)
        },
    },
    select_eleven_five_any_five:{
        select_eleven_five_any_five_duplex(data){
            return calcSelecSevenFiveDuplex(data, 5)
        },
        select_eleven_five_any_five_single(data){
            return calcSelecSevenFiveFingle(data, 10)
        },
    },
    select_eleven_five_any_six:{
        select_eleven_five_any_six_duplex(data){
            return calcSelecSevenFiveDuplex(data, 6)
        },
        select_eleven_five_any_six_single(data){
            return calcSelecSevenFiveFingle(data, 12)
        },
    },
    select_eleven_five_any_seven:{
        select_eleven_five_any_seven_duplex(data){
            return calcSelecSevenFiveDuplex(data, 7)
        },
        select_eleven_five_any_seven_single(data){
            return calcSelecSevenFiveFingle(data, 14)
        },
    },
    select_eleven_five_any_eight:{
        select_eleven_five_any_eight_duplex(data){
            return calcSelecSevenFiveDuplex(data, 8)
        },
        select_eleven_five_any_eight_single(data){
            return calcSelecSevenFiveFingle(data, 16)
        },
    },
    select_eleven_five_first_three:{
        select_eleven_five_first_three_group_duplex(data){
            return calcSelecSevenFiveDuplex(data, 3)
        },
        select_eleven_five_first_three_group_single(data){
            return calcSelecSevenFiveFingle(data, 6)
        },
        select_eleven_five_first_three_direct_duplex(data){
            var rst = { count: 0, numbers: '' }
            var wan = data['wan']
            var qian = data['qian']
            var bai = data['bai']
            if(wan && wan.length > 0 && qian && qian.length > 0 && bai && bai.length > 0){
                var count  = 0
                wan.forEach( function(elemWan) {
                    qian.forEach( function(elemQian) {
                        bai.forEach( function(elemBai) {
                            if(elemWan !== elemQian && elemQian !== elemBai && elemWan !== elemBai){
                                count ++
                            }
                        })
                    })
                })
                rst.count = count
                if(count > 0){
                    rst.numbers = calcNumber(wan, qian, bai)
                }
            }
            return rst
        },
        select_eleven_five_first_three_direct_single(data){
            return calcSelecSevenFiveFingle(data, 6)
        },
    },
    select_eleven_five_first_two:{
        select_eleven_five_first_two_group_duplex(data){
            return calcSelecSevenFiveDuplex(data, 2)
        },
        select_eleven_five_first_two_group_single(data){
            return calcSelecSevenFiveFingle(data, 4)
        },
        select_eleven_five_first_two_direct_duplex(data){
            var rst = { count: 0, numbers: '' }
            var wan = data['wan']
            var qian = data['qian']
            if(wan && wan.length > 0 && qian && qian.length > 0){
                var count  = 0
                wan.forEach( function(elemWan) {
                    qian.forEach( function(elemQian) {
                        if(elemWan !== elemQian){
                            count ++
                        }
                    })
                })
                rst.count = count
                if(count > 0){
                    rst.numbers = calcNumber(wan, qian)
                }
            }
            return rst
        },
        select_eleven_five_first_two_direct_single(data){
            return calcSelecSevenFiveFingle(data, 4)
        },
    },
    select_eleven_five_location:{
        select_eleven_five_location_direct_duplex(data){
            var rst = { count: 0, numbers: '' }
            var wan = data['wan'] || []
            var qian = data['qian'] || []
            var bai = data['bai'] || []
            rst.count = wan.length + qian.length + bai.length
            if(rst.count > 0){
                rst.numbers = calcNumber(wan, qian, bai)
            }
            return rst
        }
    },
}
