
import { randomTz, calcThreeSumCount, calcTwoSumCount,fillVal,randomBallPosition } from '../../tools/command'
const cai1 = {
        five_star : {
            direct_single(){
                return ''
            },
            direct_duplex(){
                return randomTz(0,9,5,true)
            },
            group_120(){
                return randomTz(0,9,5,false,'','')
            },
            group_60(){
                const twoDup = randomTz(0,9,1)
                return twoDup + ',' + randomTz(0,9,3,false,'','',[twoDup])
            },
            group_30(){
                const twoDup = randomTz(0,9,2,false,'','')
                return twoDup + ',' + randomTz(0,9,1,false,'','',twoDup.split(''))
            },
            group_20(){
                const threeDup = randomTz(0,9,1)
                return threeDup + ',' + randomTz(0,9,2,false,'','',[threeDup])
            },
            group_10(){
                const threeDup = randomTz(0,9,1)
                return threeDup + ',' + randomTz(0,9,1,false,'','',[threeDup])
            },
            group_5(){
                const fourDup = randomTz(0,9,1)
                return fourDup + ',' + randomTz(0,9,1,false,'','',[fourDup])
            },
        },
        four_star : {
            direct_first_four_single(){
                return ''
            },
            direct_first_four_duplex(){
                return randomTz(0,9,4,true)
            },
            direct_last_four_single(){
                return ''
            },
            direct_last_four_duplex(){
                return randomTz(0,9,4,true)
            },
            group_24(){
                return randomTz(0,9,4,false,'','')
            },
            group_12(){
                const twoDup = randomTz(0,9,1)
                return twoDup + ',' + randomTz(0,9,2,false,'','',[twoDup])
            },
            group_6(){
                return randomTz(0,9,2,false,'','')
            },
            group_4(){
                const threeDup = randomTz(0,9,1)
                return threeDup + ',' + randomTz(0,9,1,false,'','',[threeDup])
            },
        },
        first_three: {
            direct_first_three_single(){
                return ''
            },
            direct_first_three_duplex(){
                return randomTz(0,9,3,true)
            },
            direct_first_three_sum(){
                const sum = randomTz(0,27,1,false,'0')
                const count = calcThreeSumCount(sum)
                return { count: count, numbers: sum }
            },
            group_first_three_three_duplex(){
                const num = randomTz(0,9,2,false,'','')
                return { count: 2, numbers: num }
            },
            group_first_three_three_single(){
                return ''
            },
            group_first_three_six_duplex(){
                return randomTz(0,9,3,false,'','')
            },
            group_first_three_six_single(){
                return ''
            },
            group_first_three_mix_single(){
                return ''
            },

        },
        middle_three: {
            direct_middle_three_single(){
                return ''
            },
            direct_middle_three_duplex(){
                return randomTz(0,9,3,true)
            },
            direct_middle_three_sum(){
                const sum = randomTz(0,27,1,false,'0')
                const count = calcThreeSumCount(sum)
                return { count: count, numbers: sum }
            },
            group_middle_three_three_duplex(){
                const num = randomTz(0,9,2,false,'','')
                return { count: 2, numbers: num }
            },
            group_middle_three_three_single(){
                return ''
            },
            group_middle_three_six_duplex(){
                return randomTz(0,9,3,false,'','')
            },
            group_middle_three_six_single(){
                return ''
            },
            group_middle_three_mix_single(){
                return ''
            },

        },
        last_three: {
            direct_last_three_single(){
                return ''
            },
            direct_last_three_duplex(){
                return randomTz(0,9,3,true)
            },
            direct_last_three_sum(){
                const sum = randomTz(0,27,1,false,'0')
                const count = calcThreeSumCount(sum)
                return { count: count, numbers: sum }
            },
            group_last_three_three_duplex(){
                const num = randomTz(0,9,2,false,'','')
                return { count: 2, numbers: num }
            },
            group_last_three_three_single(){
                return ''
            },
            group_last_three_six_duplex(){
                return randomTz(0,9,3,false,'','')
            },
            group_last_three_six_single(){
                return ''
            },
            group_last_three_mix_single(){
                return ''
            },
        },
        any_three: {
            direct_any_three_single(){
                return ''
            },
            direct_any_three_duplex(){
                return fillVal(3, 0, 9, true)
            },
            direct_any_three_sum(){
                const sum = randomTz(0,27,1,false,'0')
                const tzbs = randomBallPosition(3)
                const count = calcThreeSumCount(sum)
                return { count: count, numbers: sum, tzbs : tzbs }
            },
            group_any_three_three_duplex(){
                const tzbs = randomBallPosition(3)
                const num = randomTz(0,9,2,false,'','')
                return { count: 2, numbers: num ,tzbs : tzbs }
            },
            group_any_three_three_single(){
                return ''
            },
            group_any_three_six_duplex(){
                const tzbs = randomBallPosition(3)
                const num = randomTz(0,9,3,false,'','')
                return { numbers: num ,tzbs : tzbs }
            },
            group_any_three_six_single(){
                return ''
            },
            group_any_three_mix_single(){
                return ''
            },

        },
        first_two: {
            direct_first_two_single(){
                return ''
            },
            direct_first_two_duplex(){
                return randomTz(0,9,2,true)
            },
            direct_first_two_sum(){
                const sum = randomTz(0,18,1,false,'0')
                const count = calcTwoSumCount(sum)
                return { count: count, numbers: sum }
            },
            group_first_two_duplex(){
                return randomTz(0,9,2,false,'','')
            },
            group_first_two_single(){
                return ''
            },
        },
        last_two: {
            direct_last_two_single(){
                return ''
            },
            direct_last_two_duplex(){
                return randomTz(0,9,2,true)
            },
            direct_last_two_sum(){
                const sum = randomTz(0,18,1,false,'0')
                const count = calcTwoSumCount(sum)
                return { count: count, numbers: sum }
            },
            group_last_two_duplex(){
                return randomTz(0,9,2,false,'','')
            },
            group_last_two_single(){
                return ''
            },
        },
        any_two: {
            direct_any_two_single(){
                return ''
            },
            direct_any_two_duplex(){
               return fillVal(2, 0, 9,true)
            },
            direct_any_two_sum(){
                const sum = randomTz(0,18,1,false,'0')
                const tzbs = randomBallPosition(2)
                const count = calcTwoSumCount(sum)
                return { count: count, numbers: sum, tzbs : tzbs }
            },
            group_any_two_duplex(){
                const tzbs = randomBallPosition(2)
                const num = randomTz(0,9,2,false,'','')
                return { numbers: num, tzbs : tzbs }
            },
            group_any_two_single(){
                return ''
            },
        },
        location_gall: {
            location_gall_type(){
                return fillVal(1, 0, 9,false)
            },
        },
        not_location: {
            not_location_last_three_one_code(){
                return randomTz(0,9,1)
            },
            not_location_first_three_one_code(){
                return randomTz(0,9,1)
            },
            not_location_last_three_two_code(){
                return randomTz(0,9,2,false,'','')
            },
            not_location_first_three_two_code(){
                return randomTz(0,9,2,false,'','')
            },
        },
        big_little_odd_even: {
            big_little_odd_even_first_two(){
                const data = [9,1,3,2]
                const v1 = randomTz(0,3,1)
                const v2 = randomTz(0,3,1)
                return data[v1] + ',' + data[v2]
            },
            big_little_odd_even_last_two(){
                const data = [9,1,3,2]
                const v1 = randomTz(0,3,1)
                const v2 = randomTz(0,3,1)
                return data[v1] + ',' + data[v2]
            },
        },
        interesting: {
            interesting_one(){
                return randomTz(0,9,1)
            },
            interesting_two(){
                return randomTz(0,9,1)
            },
            interesting_three(){
                return randomTz(0,9,1)
            },
            interesting_four(){
                return randomTz(0,9,1)
            },
        }
    }
var cai8 = {
    select_eleven_five_any_one : {
        select_eleven_five_any_one_duplex(){
            return randomTz(1,11,1,false,'0')
        },
        select_eleven_five_any_one_single(){
            return ''
        },
    },
    select_eleven_five_any_two : {
        select_eleven_five_any_two_duplex(){
            return randomTz(1,11,2,false,'0').split(',').sort().join(',')
        },
        select_eleven_five_any_two_single(){
            return ''
        },
    },
    select_eleven_five_any_three : {
        select_eleven_five_any_three_duplex(){
            return randomTz(1,11,3,false,'0').split(',').sort().join(',')
        },
        select_eleven_five_any_three_single(){
            return ''
        },
    },
    select_eleven_five_any_four : {
        select_eleven_five_any_four_duplex(){
            return randomTz(1,11,4,false,'0').split(',').sort().join(',')
        },
        select_eleven_five_any_four_single(){
            return ''
        },
    },
    select_eleven_five_any_five : {
        select_eleven_five_any_five_duplex(){
            return randomTz(1,11,5,false,'0').split(',').sort().join(',')
        },
        select_eleven_five_any_five_single(){
            return ''
        },
    },
    select_eleven_five_any_six : {
        select_eleven_five_any_six_duplex(){
            return randomTz(1,11,6,false,'0').split(',').sort().join(',')
        },
        select_eleven_five_any_six_single(){
            return ''
        },
    },
    select_eleven_five_any_seven : {
        select_eleven_five_any_seven_duplex(){
            return randomTz(1,11,7,false,'0').split(',').sort().join(',')
        },
        select_eleven_five_any_seven_single(){
            return ''
        },
    },
    select_eleven_five_any_eight : {
        select_eleven_five_any_eight_duplex(){
            return randomTz(1,11,8,false,'0').split(',').sort().join(',')
        },
        select_eleven_five_any_eight_single(){
            return ''
        },
    },
    select_eleven_five_first_three : {
        select_eleven_five_first_three_group_single(){
            return ''
        },
        select_eleven_five_first_three_group_duplex(){
            return randomTz(1,11,3,false,'0').split(',').sort().join(',')
        },
        select_eleven_five_first_three_direct_single(){
            return ''
        },
        select_eleven_five_first_three_direct_duplex(){
            return randomTz(1,11,3,false,'0')
        },
    },
    select_eleven_five_first_two : {
        select_eleven_five_first_two_group_single(){
            return ''
        },
        select_eleven_five_first_two_group_duplex(){
            return randomTz(1,11,2,false,'0').split(',').sort().join(',')
        },
        select_eleven_five_first_two_direct_single(){
            return ''
        },
        select_eleven_five_first_two_direct_duplex(){
            return randomTz(1,11,2,false,'0')
        },
    },
    select_eleven_five_location : {
        select_eleven_five_location_direct_duplex(){
            return fillVal(1,1,11,false,'0',3)
        },
    }
}

var cai4 = {
    select_three_direct: {
        select_three_direct_duplex(){
            return randomTz(0,9,3,true,'')
        },
        select_three_direct_single(){
            return ''
        },
    },
    select_three_group: {
        select_three_group_suplex(){
            const num = randomTz(0,9,2,false,'','').split('').sort().join('')
            return { count: 2, numbers: num }
        },
        select_three_group_single(){
            return ''
        },
        select_three_group_six_duplex(){
            return randomTz(0,9,3,false,'','').split('').sort().join('')
        },
        select_three_group_six_single(){
            return ''
        },
    },
    select_three_not_location: {
        select_three_not_location_three(){
            return randomTz(0,9,1)
        },
    },
    select_three_direct_sum: {
        select_three_direct_sum_three(){
            const sum = randomTz(0,27,1,false,'0')
            const count = calcThreeSumCount(sum)
            return { count: count, numbers: sum }
        },
    },
    select_three_direct_two: {
        select_three_direct_two_last_direct_duplex(){
            return randomTz(0,9,2)
        },
        select_three_direct_two_last_direct_single(){
            return ''
        },
        select_three_direct_two_first_direct_duplex(){
            return randomTz(0,9,2)
        },
        select_three_direct_two_first_direct_single(){
            return ''
        },
    },
    select_three_direct_one: {
        select_three_direct_one_last_direct(){
            return randomTz(0,9,1)
        },
        select_three_direct_one_first_direct(){
            return randomTz(0,9,1)
        },
    },
}

var pk10 = {
    pk10_guess_one: {
        pk10_guess_one_duplex(){
            return randomTz(1,10,1,false,'0')
        },
    },
    pk10_guess_one_two: {
        pk10_guess_one_two_duplex(){
            return randomTz(1,10,2,false,'0')
        },
        pk10_guess_one_two_single(){
            return ''
        },
    },
    pk10_guess_first_three: {
        pk10_guess_first_three_duplex(){
            return randomTz(1,10,3,false,'0')
        },
        pk10_guess_first_three_single(){
            return ''
        },
    },
    pk10_guess_location: {
        pk10_guess_location_one_five(){
            return fillVal(1,1,10,false,'0',5)
        },
        pk10_guess_location_six_ten(){
            return fillVal(1,1,10,false,'0',5)
        },
    },
    pk10_guess_daxiao: {
        pk10_guess_daxiao_one(){
            const data = [9,1]
            const v1 = randomTz(0,1,1)
            return data[v1]
        },
        pk10_guess_daxiao_two(){
            const data = [9,1]
            const v1 = randomTz(0,1,1)
            return data[v1]
        },
        pk10_guess_daxiao_three(){
            const data = [9,1]
            const v1 = randomTz(0,1,1)
            return data[v1]
        },
    },
    pk10_guess_danshuang: {
        pk10_guess_danshuang_one(){
            const data = [3,2]
            const v1 = randomTz(0,1,1)
            return data[v1]
        },
        pk10_guess_danshuang_two(){
            const data = [3,2]
            const v1 = randomTz(0,1,1)
            return data[v1]
        },
        pk10_guess_danshuang_three(){
            const data = [3,2]
            const v1 = randomTz(0,1,1)
            return data[v1]
        },
    },
}

var lhc = {
    lhc_tm: {
        lhc_tm_type(){
            return randomTz(1,49,1,false,'0')
        },
    },
    lhc_zm: {
        lhc_zm_type(){
            return randomTz(1,49,1,false,'0')
        },
    },
    lhc_zmt: {
        lhc_zmt_one(){
            return randomTz(1,49,1,false,'0')
        },
        lhc_zmt_two(){
            return randomTz(1,49,1,false,'0')
        },
        lhc_zmt_three(){
            return randomTz(1,49,1,false,'0')
        },
        lhc_zmt_four(){
            return randomTz(1,49,1,false,'0')
        },
        lhc_zmt_five(){
            return randomTz(1,49,1,false,'0')
        },
        lhc_zmt_six(){
            return randomTz(1,49,1,false,'0')
        },
    },
    lhc_tmsx: {
        lhc_tmsx_type(){
            const sx = ["shu","hu","long","ma","hou","gou","niu","tu","she","yang","ji","zhu"]
            const r = randomTz(0,11,1)
            return sx[r]
        },
    },
    lhc_tmdxds: {
        lhc_tmdxds_type(){
            const data = [9,1,3,2]
            const r = randomTz(0,3,1)
            return data[r]
        },
    },
    lhc_tmsb: {
        lhc_tmsb_type(){
            var sb = ['hongbo','lanbo','lvbo']
            const r = randomTz(0,2,1)
            return sb[r]
        },
    },
}

export default {
    cai1 : cai1,
    cai2 : cai1,
    cai3 : cai1,
    cai4 : cai4,
    cai5 : cai4,
    cai6 : cai1,
    cai7 : cai1,
    cai8 : cai8,
    cai9 : cai8,
    cai10 : cai8,
    cai11 : cai1,
    cai12 : cai1,
    cai13 : pk10,
    cai14 : lhc,
    cai15 : cai1,
}
