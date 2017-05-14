//11 选 5 广东 江西 山东
import * as bettings from './betting-constants'


const select_eleven_five_any_one_duplex =
[
    {
        type : "select_eleven_five_duplex",
        values : {
            titles: "复式",
            vulues: bettings.numbers_01_11,
        }
    },
]

const select_eleven_five_any_two_duplex = select_eleven_five_any_one_duplex
const select_eleven_five_any_three_duplex = select_eleven_five_any_one_duplex
const select_eleven_five_any_four_duplex = select_eleven_five_any_one_duplex
const select_eleven_five_any_five_duplex = select_eleven_five_any_one_duplex
const select_eleven_five_any_six_duplex = select_eleven_five_any_one_duplex
const select_eleven_five_any_seven_duplex = select_eleven_five_any_one_duplex
const select_eleven_five_any_eight_duplex = select_eleven_five_any_one_duplex
const select_eleven_five_first_three_group_duplex = select_eleven_five_any_one_duplex
const select_eleven_five_first_two_group_duplex = select_eleven_five_any_one_duplex

const select_eleven_five_first_three_direct_duplex =
[
    {
        type : "wan_wei",
        values : {
            titles: "万位",
            vulues: bettings.numbers_01_11,
        }
    },
    {
        type : "qian_wei",
        values : {
            titles: "千位",
            vulues: bettings.numbers_01_11,
        }
    },
    {
        type : "bai_wei",
        values : {
            titles: "百位",
            vulues: bettings.numbers_01_11,
        }
    },
]

const select_eleven_five_first_two_direct_duplex =
[
    {
        type : "wan_wei",
        values : {
            titles: "万位",
            vulues: bettings.numbers_01_11,
        }
    },
    {
        type : "qian_wei",
        values : {
            titles: "千位",
            vulues: bettings.numbers_01_11,
        }
    },
]

const select_eleven_five_location_direct_duplex = select_eleven_five_first_three_direct_duplex

export default {
    playMethod : [
         bettings.select_eleven_five_any_one,
         bettings.select_eleven_five_any_two,
         bettings.select_eleven_five_any_three,
         bettings.select_eleven_five_any_four,
         bettings.select_eleven_five_any_five,
         bettings.select_eleven_five_any_six,
         bettings.select_eleven_five_any_seven,
         bettings.select_eleven_five_any_eight,
         bettings.select_eleven_five_first_three,
         bettings.select_eleven_five_first_two,
         bettings.select_eleven_five_location,
    ],
    methodType : {
        select_eleven_five_any_one :
        [
            {
                name : '',
                desc : '',
                items : [bettings.select_eleven_five_any_one_duplex],
                selectPlate : {
                    'select_eleven_five_any_one_duplex' : select_eleven_five_any_one_duplex,
                }
            },
        ],
        select_eleven_five_any_two :
        [
            {
                name : '',
                desc : '',
                items : [bettings.select_eleven_five_any_two_duplex],
                selectPlate : {
                    'select_eleven_five_any_two_duplex' : select_eleven_five_any_two_duplex,
                }
            },
        ],
        select_eleven_five_any_three :
        [
            {
                name : '',
                desc : '',
                items : [bettings.select_eleven_five_any_three_duplex],
                selectPlate : {
                    'select_eleven_five_any_three_duplex' : select_eleven_five_any_three_duplex,
                }
            },
        ],
        select_eleven_five_any_four :
        [
            {
                name : '',
                desc : '',
                items : [bettings.select_eleven_five_any_four_duplex],
                selectPlate : {
                    'select_eleven_five_any_four_duplex' : select_eleven_five_any_four_duplex,
                }
            },
        ],
        select_eleven_five_any_five :
        [
            {
                name : '',
                desc : '',
                items : [bettings.select_eleven_five_any_five_duplex],
                selectPlate : {
                    'select_eleven_five_any_five_duplex' : select_eleven_five_any_five_duplex,
                }
            },
        ],
        select_eleven_five_any_six :
        [
            {
                name : '',
                desc : '',
                items : [bettings.select_eleven_five_any_six_duplex],
                selectPlate : {
                    'select_eleven_five_any_six_duplex' : select_eleven_five_any_six_duplex,
                }
            },
        ],
        select_eleven_five_any_seven :
        [
            {
                name : '',
                desc : '',
                items : [bettings.select_eleven_five_any_seven_duplex],
                selectPlate : {
                    'select_eleven_five_any_seven_duplex' : select_eleven_five_any_seven_duplex,
                }
            },
        ],
        select_eleven_five_any_eight :
        [
            {
                name : '',
                desc : '',
                items : [bettings.select_eleven_five_any_eight_duplex],
                selectPlate : {
                    'select_eleven_five_any_eight_duplex' : select_eleven_five_any_eight_duplex,
                }
            },
        ],
        select_eleven_five_first_three :
        [
            {
                name : '',
                desc : '',
                items : [bettings.select_eleven_five_first_three_group_duplex,
                            bettings.select_eleven_five_first_three_direct_duplex],
                selectPlate : {
                    'select_eleven_five_first_three_group_duplex' : select_eleven_five_first_three_group_duplex,
                    'select_eleven_five_first_three_direct_duplex' : select_eleven_five_first_three_direct_duplex,
                }
            },
        ],
        select_eleven_five_first_two :
        [
            {
                name : '',
                desc : '',
                items : [bettings.select_eleven_five_first_two_group_duplex, bettings.select_eleven_five_first_two_direct_duplex],
                selectPlate : {
                    'select_eleven_five_first_two_group_duplex' : select_eleven_five_first_two_group_duplex,
                    'select_eleven_five_first_two_direct_duplex' : select_eleven_five_first_two_direct_duplex,
                }
            },
        ],
        select_eleven_five_location :
        [
            {
                name : '',
                desc : '',
                items : [bettings.select_eleven_five_location_direct_duplex ],
                selectPlate : {
                    'select_eleven_five_location_direct_duplex' : select_eleven_five_location_direct_duplex,
                }
            },
        ],
    }

}
