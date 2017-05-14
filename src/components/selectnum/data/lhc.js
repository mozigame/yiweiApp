//香港六合彩
import * as bettings from './betting-constants'


const lhc_tm_data = [
{
    type : "tm",
    values : {
        titles : "选号",
        vulues: bettings.numbers_1_49,
    }
}
]

const lhc_zm_data = lhc_tm_data
const lhc_zmt_one = lhc_tm_data
const lhc_zmt_two = lhc_tm_data
const lhc_zmt_three = lhc_tm_data
const lhc_zmt_four = lhc_tm_data
const lhc_zmt_five = lhc_tm_data
const lhc_zmt_six = lhc_tm_data

const lhc_tmsx_type = [
{
    type : "shu",
    values : {
        titles : "鼠",
        vulues: ['暂无数据'],
    }
},
{
    type : "hu",
    values : {
        titles : "虎",
        vulues: ['暂无数据'],
    }
},
{
    type : "long",
    values : {
        titles : "龙",
        vulues: ['暂无数据'],
    }
},
{
    type : "ma",
    values : {
        titles : "马",
        vulues: ['暂无数据'],
    }
},
{
    type : "hou",
    values : {
        titles : "猴",
        vulues: ['暂无数据'],
    }
},
{
    type : "gou",
    values : {
        titles : "狗",
        vulues: ['暂无数据'],
    }
},
{
    type : "niu",
    values : {
        titles : "牛",
        vulues: ['暂无数据'],
    }
},
{
    type : "tu",
    values : {
        titles : "兔",
        vulues: ['暂无数据'],
    }
},
{
    type : "she",
    values : {
        titles : "蛇",
        vulues: ['暂无数据'],
    }
},
{
    type : "yang",
    values : {
        titles : "羊",
        vulues: ['暂无数据'],
    }
},
{
    type : "ji",
    values : {
        titles : "鸡",
        vulues: ['暂无数据'],
    }
},
{
    type : "zhu",
    values : {
        titles : "猪",
        vulues: ['暂无数据'],
    }
}
]

const lhc_tmsb_type = [
{
    type : "hongbo",
    values : {
        titles : "红波",
        vulues: ['暂无数据'],
    }
},
{
    type : "lanbo",
    values : {
        titles : "蓝波",
        vulues: ['暂无数据'],
    }
},
{
    type : "lvbo",
    values : {
        titles : "绿波",
        vulues: ['暂无数据'],
    }
}
]

const lhc_tmdxds_type = [
{
    type : "da_xiao",
    values : {
        titles : "选号",
        vulues: bettings.numbers_da_xiao_dan_shuang,
    }
},
]

export default {
    playMethod : [
    bettings.lhc_tm,
    bettings.lhc_zm,
    bettings.lhc_zmt,
    bettings.lhc_tmsx,
    bettings.lhc_tmdxds,
    bettings.lhc_tmsb,
    ],
    methodType : {
        lhc_tm : [
        {
            name : 'lhc_tm',
            desc : '特码',
            items : [bettings.lhc_tm_type],
            selectPlate : {
                'lhc_tm_type' : lhc_tm_data,
            }
        },
        ],
        lhc_zm : [
        {
            name : 'lhc_zm',
            desc : '正码',
            items : [bettings.lhc_zm_type],
            selectPlate : {
                'lhc_zm_type' : lhc_zm_data,
            }
        },
        ],
        lhc_zmt : [
        {
            name : 'lhc_zmt',
            desc : '正码特',
            items : [bettings.lhc_zmt_one,bettings.lhc_zmt_two,bettings.lhc_zmt_three,
            bettings.lhc_zmt_four,bettings.lhc_zmt_five,bettings.lhc_zmt_six],
            selectPlate : {
                'lhc_zmt_one' : lhc_zmt_one,
                'lhc_zmt_two' : lhc_zmt_two,
                'lhc_zmt_three' : lhc_zmt_three,
                'lhc_zmt_four' : lhc_zmt_four,
                'lhc_zmt_five' : lhc_zmt_five,
                'lhc_zmt_six' : lhc_zmt_six,
            }
        },
        ],
        lhc_tmsx : [
        {
            name : 'lhc_tmsx',
            desc : '特码生肖',
            items : [bettings.lhc_tmsx_type],
            selectPlate : {
                'lhc_tmsx_type' : lhc_tmsx_type,
            }
        },
        ],
        lhc_tmdxds : [
        {
            name : 'lhc_tmdxds',
            desc : '特码大小单双',
            items : [bettings.lhc_tmdxds_type],
            selectPlate : {
                'lhc_tmdxds_type' : lhc_tmdxds_type,
            }
        },
        ],
        lhc_tmsb : [
        {
            name : 'lhc_tmsb',
            desc : '特码色波',
            items : [bettings.lhc_tmsb_type],
            selectPlate : {
                'lhc_tmsb_type' : lhc_tmsb_type,
            }
        },
        ],
    }
}