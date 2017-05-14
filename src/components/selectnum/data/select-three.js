//福彩3D 排列3
import * as bettings from './betting-constants'

const select_three_direct_duplex = 
[
    bettings.bai_wei_obj,
    bettings.shi_wei_obj,
    bettings.ge_wei_obj,
]

const select_three_group_suplex = 
[
    {
        type : "groupThree",
        values : {
            titles : "组三",
            vulues: bettings.numbers_0_9,
        }
    },
]

const select_three_group_six_duplex =
[
    {
        type : "groupSix",
        values : {
            titles : "组六",
            vulues: bettings.numbers_0_9,
        }
    },
]

const select_three_not_location_three = 
[
    {
        type : "not_location",
        values : {
            titles : "不定位",
            vulues: bettings.numbers_0_9,
        }
    },
]

const select_three_direct_sum_three =
[
    {
        type : "sum",
        values : {
            titles : "和值",
            vulues: bettings.numbers_0_27,
        }
    },
]

const select_three_direct_two_last_direct_duplex = 
[
    bettings.shi_wei_obj,
    bettings.ge_wei_obj,
]

const select_three_direct_two_first_direct_duplex = 
[
   
    bettings.bai_wei_obj,
    bettings.shi_wei_obj,
]

const select_three_direct_one_last_direct = 
[
    bettings.ge_wei_obj,
]

const select_three_direct_one_first_direct = 
[
    bettings.bai_wei_obj,
]

export default {
    playMethod : [
        bettings.select_three_direct,
        bettings.select_three_group,
        bettings.select_three_not_location,
        bettings.select_three_direct_sum,
        bettings.select_three_direct_two,
        bettings.select_three_direct_one,
    ],
    methodType : {
        select_three_direct:[
            {
                name : '',
                desc : '',
                items : [bettings.select_three_direct_duplex],
                selectPlate : {
                    'select_three_direct_duplex' : select_three_direct_duplex,
                }
            },
        ],
        select_three_group:[
            {
                name : '',
                desc : '',
                items : [bettings.select_three_group_suplex, bettings.select_three_group_six_duplex],
                selectPlate : {
                    'select_three_group_suplex' : select_three_group_suplex,
                    'select_three_group_six_duplex' : select_three_group_six_duplex,
                }
            },
        ],
        select_three_not_location:[
            {
                name : '',
                desc : '',
                items : [bettings.select_three_not_location_three ],
                selectPlate : {
                    'select_three_not_location_three' : select_three_not_location_three,
                }
            },
        ],
        select_three_direct_sum:[
            {
                name : '',
                desc : '',
                items : [bettings.select_three_direct_sum_three],
                selectPlate : {
                    'select_three_direct_sum_three' : select_three_direct_sum_three,
                }
            },
        ],
        select_three_direct_two:[
            {
                name : '',
                desc : '',
                items : [bettings.select_three_direct_two_first_direct_duplex, bettings.select_three_direct_two_last_direct_duplex],
                selectPlate : {
                    'select_three_direct_two_last_direct_duplex' : select_three_direct_two_last_direct_duplex,
                    'select_three_direct_two_first_direct_duplex' : select_three_direct_two_first_direct_duplex,
                }
            },
        ],
        select_three_direct_one:[
            {
                name : '',
                desc : '',
                items : [bettings.select_three_direct_one_first_direct, bettings.select_three_direct_one_last_direct],
                selectPlate : {
                    'select_three_direct_one_last_direct' : select_three_direct_one_last_direct,
                    'select_three_direct_one_first_direct' : select_three_direct_one_first_direct,
                }
            },
        ],
    }
}