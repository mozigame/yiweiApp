//北京赛车PK10
import * as bettings from './betting-constants'

const pk10_guess_one_duplex =
[
    {
        type : "guess_one",
        values : {
            titles : "冠军",
            vulues: bettings.numbers_01_10,
        }
    },
]

const pk10_guess_one_two_duplex =
[
    ...pk10_guess_one_duplex,
    {
        type : "guess_two",
        values : {
            titles : "亚军",
            vulues: bettings.numbers_01_10,
        }
    },
]

const pk10_guess_first_three_duplex = 
[
    ...pk10_guess_one_two_duplex,
    {
        type : "guess_three",
        values : {
            titles : "季军",
            vulues: bettings.numbers_01_10,
        }
    },

]

const pk10_guess_location_one_five =
[
    {
        type : "guess_1",
        values : {
            titles : "第一名",
            vulues: bettings.numbers_01_10,
        }
    },
    {
        type : "guess_2",
        values : {
            titles : "第二名",
            vulues: bettings.numbers_01_10,
        }
    },
    {
        type : "guess_3",
        values : {
            titles : "第三名",
            vulues: bettings.numbers_01_10,
        }
    },
    {
        type : "guess_4",
        values : {
            titles : "第四名",
            vulues: bettings.numbers_01_10,
        }
    },
    {
        type : "guess_5",
        values : {
            titles : "第五名",
            vulues: bettings.numbers_01_10,
        }
    },
]

const pk10_guess_location_six_ten =
[
    {
        type : "guess_6",
        values : {
            titles : "第六名",
            vulues: bettings.numbers_01_10,
        }
    },
    {
        type : "guess_7",
        values : {
            titles : "第七名",
            vulues: bettings.numbers_01_10,
        }
    },
    {
        type : "guess_8",
        values : {
            titles : "第八名",
            vulues: bettings.numbers_01_10,
        }
    },
    {
        type : "guess_9",
        values : {
            titles : "第九名",
            vulues: bettings.numbers_01_10,
        }
    },
    {
        type : "guess_10",
        values : {
            titles : "第十名",
            vulues: bettings.numbers_01_10,
        }
    },
]

const pk10_guess_daxiao_one = 
[
    {
        type : "guess_1_c",
        values : {
            titles : "第一名",
            vulues: bettings.numbers_da_xiao,
        }
    },
]

const pk10_guess_daxiao_two =
[
    {
        type : "guess_2_c",
        values : {
            titles : "第二名",
            vulues: bettings.numbers_da_xiao,
        }
    },
]

const pk10_guess_daxiao_three =
[
    {
        type : "guess_3_c",
        values : {
            titles : "第三名",
            vulues: bettings.numbers_da_xiao,
        }
    },
]

const pk10_guess_danshuang_one =
[
    {
        type : "guess_1_c",
        values : {
            titles : "第一名",
            vulues: bettings.numbers_dan_shuang,
        }
    },
]

const pk10_guess_danshuang_two =
[
    {
        type : "guess_2_c",
        values : {
            titles : "第二名",
            vulues: bettings.numbers_dan_shuang,
        }
    },
]

const pk10_guess_danshuang_three =
[
    {
        type : "guess_3_c",
        values : {
            titles : "第三名",
            vulues: bettings.numbers_dan_shuang,
        }
    },
]


export default {
    playMethod : [
        bettings.pk10_guess_one,
        bettings.pk10_guess_one_two,
        bettings.pk10_guess_first_three,
        bettings.pk10_guess_location,
        bettings.pk10_guess_daxiao,
        bettings.pk10_guess_danshuang,
    ],
    methodType : {
        pk10_guess_one : [
            {
                name : 'pk10_guess_one',
                desc : '猜冠军',
                items : [bettings.pk10_guess_one_duplex],
                selectPlate : {
                    'pk10_guess_one_duplex' : pk10_guess_one_duplex,
                }
            },
        ],
        pk10_guess_one_two : [
            {
                name : 'pk10_guess_one_two',
                desc : '猜冠亚军',
                items : [bettings.pk10_guess_one_two_duplex],
                selectPlate : {
                    'pk10_guess_one_two_duplex' : pk10_guess_one_two_duplex,
                }
            },
        ],
        pk10_guess_first_three : [
            {
                name : 'pk10_guess_first_three',
                desc : '猜前三名',
                items : [bettings.pk10_guess_first_three_duplex],
                selectPlate : {
                    'pk10_guess_first_three_duplex' : pk10_guess_first_three_duplex,
                }
            },
        ],
        pk10_guess_location : [
            {
                name : 'pk10_guess_location',
                desc : '定位胆',
                items : [bettings.pk10_guess_location_one_five, bettings.pk10_guess_location_six_ten],
                selectPlate : {
                    'pk10_guess_location_one_five' : pk10_guess_location_one_five,
                    'pk10_guess_location_six_ten' : pk10_guess_location_six_ten,
                }
            },
        ],
        pk10_guess_daxiao : [
            {
                name : 'pk10_guess_daxiao',
                desc : '大小',
                items : [bettings.pk10_guess_daxiao_one, bettings.pk10_guess_daxiao_two, bettings.pk10_guess_daxiao_three],
                selectPlate : {
                    'pk10_guess_daxiao_one' : pk10_guess_daxiao_one,
                    'pk10_guess_daxiao_two' : pk10_guess_daxiao_two,
                    'pk10_guess_daxiao_three' : pk10_guess_daxiao_three,
                }
            },
        ],
        pk10_guess_danshuang : [
            {
                name : 'pk10_guess_danshuang',
                desc : '单双',
                items : [bettings.pk10_guess_danshuang_one, bettings.pk10_guess_danshuang_two, bettings.pk10_guess_danshuang_three],
                selectPlate : {
                    'pk10_guess_danshuang_one' : pk10_guess_danshuang_one,
                    'pk10_guess_danshuang_two' : pk10_guess_danshuang_two,
                    'pk10_guess_danshuang_three' : pk10_guess_danshuang_three,
                }
            },
        ],
    }
}