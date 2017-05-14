// 时时彩

import * as bettings from './betting-constants'

const five_star_direct_duplex = [
bettings.wan_wei_obj,
bettings.qian_wei_obj,
bettings.bai_wei_obj,
bettings.shi_wei_obj,
bettings.ge_wei_obj,
]

const five_star_g120 = [
{
	type : "g120",
	values : {
		titles : "选号",
		vulues: bettings.numbers_0_9,
	}
},
]

const five_star_g60 = [{
	type : "two_dup",
	values : {
		titles : "二重号",
		vulues: bettings.numbers_0_9,
	}
},
{
	type : "single_no",
	values : {
		titles : "单号",
		vulues: bettings.numbers_0_9,
	}
},

]

const five_star_g30 = [
{
	type : "two_dup",
	values : {
		titles : "二重号",
		vulues: bettings.numbers_0_9,
	}
},
{
	type : "single_no",
	values : {
		titles : "单号",
		vulues: bettings.numbers_0_9,
	}
},

]

const five_star_g20 = [
{
	type : "three_dup",
	values : {
		titles : "三重号",
		vulues: bettings.numbers_0_9,
	}
},
{
	type : "single_no",
	values : {
		titles : "单号",
		vulues: bettings.numbers_0_9,
	}
},

]

const five_star_g10 = [
{
	type : "three_dup",
	values : {
		titles : "三重号",
		vulues: bettings.numbers_0_9,
	}
},
{
	type : "two_dup",
	values : {
		titles : "二重号",
		vulues: bettings.numbers_0_9,
	}
},

]

const five_star_g5 = [
{
	type : "four_dup",
	values : {
		titles : "四重号",
		vulues: bettings.numbers_0_9,
	}
},
{
	type : "single_no",
	values : {
		titles : "单号",
		vulues: bettings.numbers_0_9,
	}
},
]

	//四星
	const four_star_first_four = [
	bettings.wan_wei_obj,
	bettings.qian_wei_obj,
	bettings.bai_wei_obj,
	bettings.shi_wei_obj,
	]

	const four_star_last_four = [
	bettings.qian_wei_obj,
	bettings.bai_wei_obj,
	bettings.shi_wei_obj,
	bettings.ge_wei_obj,
	]

	const four_star_g24 = [
	{
		type : "g24",
		values : {
			titles : "选号",
			vulues: bettings.numbers_0_9,
		}
	},
	]

	const four_star_g6 = [
	{
		type : "two_dup",
		values : {
			titles : "二重号",
			vulues: bettings.numbers_0_9,
		}
	},
	]

	//前三
	const first_three_duplex = [
	bettings.wan_wei_obj,
	bettings.qian_wei_obj,
	bettings.bai_wei_obj,
	]


	const first_three_sum = [
	{
		type : "sum",
		values : {
			titles : "和值",
			vulues: bettings.numbers_0_27,
		}
	},
	]
	const first_three_three_duplex = [
	{
		type : "groupThree",
		values : {
			titles : "组三",
			vulues: bettings.numbers_0_9,
		}
	},
	]

	const first_three_six_duplex = [
	{
		type : "groupSix",
		values : {
			titles : "组六",
			vulues: bettings.numbers_0_9,
		}
	},
	]

	//中三
	const middle_three_duplex = [
	bettings.qian_wei_obj,
	bettings.bai_wei_obj,
	bettings.shi_wei_obj,
	]
	var middle_three_sum = first_three_sum
	var middle_three_three_duplex = first_three_three_duplex
	var middle_three_six_duplex = first_three_six_duplex

	//后三
	const last_three_duplex = [
	bettings.bai_wei_obj,
	bettings.shi_wei_obj,
	bettings.ge_wei_obj,
	]

	var last_three_sum = first_three_sum
	var last_three_three_duplex = first_three_three_duplex
	var last_three_six_duplex = first_three_six_duplex

	//任三
	var any_three_duplex = five_star_direct_duplex
	var any_three_sum = first_three_sum
	var any_three_three_duplex = first_three_three_duplex
	var any_three_six_duplex = first_three_six_duplex

	//前二
	const first_two_duplex = [
	bettings.wan_wei_obj,
	bettings.qian_wei_obj,
	]
	const first_two_sum = [
	{
		type : "sum",
		values : {
			titles : "和值",
			vulues: bettings.numbers_0_18,
		}
	},
	]
	const first_two_group_duplex = [
	{
		type : "group_two",
		values : {
			titles : "组选二",
			vulues: bettings.numbers_0_9,
		}
	},
	]

	//后二
	const last_two_duplex = [
	bettings.shi_wei_obj,
	bettings.ge_wei_obj,
	]
	const last_two_sum = first_two_sum
	const last_two_group_duplex = first_two_group_duplex

	//任二
	const any_two_duplex = five_star_direct_duplex
	const any_two_sum = first_two_sum
	const any_two_group_duplex = first_two_group_duplex

	//定位胆
	const location_gall_duplex = five_star_direct_duplex

	//不定位
	const not_location_gall_duplex = [
		{
			type : "not_location",
			values : {
				titles : "不定位",
				vulues: bettings.numbers_0_9,
			}
		},
	]

	//大小单双
	const big_little_odd_even_first_two_duplex = [
		{
			type : "wan",
			values : {
				titles : "万位",
				vulues: bettings.numbers_da_xiao_dan_shuang,
			}
		},
		{
			type : "qian",
			values : {
				titles : "千位",
				vulues: bettings.numbers_da_xiao_dan_shuang,
			}
		}
	]

	const big_little_odd_even_last_two_duplex = [
		{
			type : "shi",
			values : {
				titles : "十位",
				vulues: bettings.numbers_da_xiao_dan_shuang,
			}
		},
		{
			type : "ge",
			values : {
				titles : "个位",
				vulues: bettings.numbers_da_xiao_dan_shuang,
			}
		},
	]

	//趣味
	const interesting_one_duplex = [
			{
				type : "interesting",
				values : {
					titles : "趣味",
					vulues: bettings.numbers_0_9,
				}
			},
	]
	const interesting_two_duplex = interesting_one_duplex
	const interesting_three_duplex = interesting_one_duplex
	const interesting_four_duplex = interesting_one_duplex

	export default {
		playMethod : [
		bettings.five_star,
		bettings.four_star,
		bettings.first_three,
		bettings.middle_three,
		bettings.last_three,
		bettings.any_three,
		bettings.first_two,
		bettings.last_two,
		bettings.any_two,
		bettings.location_gall,
		bettings.not_location,
		bettings.big_little_odd_even,
		bettings.interesting,
		],

		methodType : {
			five_star : [
			{
				name : 'direct',
				desc : '五星直选',
				items : [ bettings.direct_duplex, bettings.group_120, bettings.group_60, bettings.group_30, bettings.group_20, bettings.group_10, bettings.group_5],
				selectPlate : {
					'direct_duplex' : five_star_direct_duplex,
					'group_120' : five_star_g120,
					'group_60' : five_star_g60,
					'group_30' : five_star_g30,
					'group_20' : five_star_g20,
					'group_10' : five_star_g10,
					'group_5' : five_star_g5,
				}
			},
			],
			four_star : [
			{
				name : 'direct',
				desc : '四星直选',
				items : [bettings.first_four_duplex, bettings.last_four_duplex, bettings.group_24, bettings.group_12, bettings.group_6, bettings.group_4],
				selectPlate : {
					'direct_first_four_duplex' : four_star_first_four,
					'direct_last_four_duplex' : four_star_last_four,
					'group_24' : four_star_g24,
					'group_12' : five_star_g30,
					'group_6' : four_star_g6,
					'group_4' : five_star_g20,
				}
			}
			],
			first_three : [
			{
				name : 'direct',
				desc : '前三直选',
				items : [bettings.direct_first_three_duplex, bettings.direct_first_three_sum, bettings.group_first_three_three_duplex,bettings.group_first_three_six_duplex,
				],
				selectPlate : {
					'direct_first_three_duplex' : first_three_duplex,
					'direct_first_three_sum' : first_three_sum,
					'group_first_three_three_duplex' : first_three_three_duplex,
					'group_first_three_six_duplex' : first_three_six_duplex,
				}
			}
			],
			middle_three : [
			{
				name : 'direct',
				desc : '中三直选',
				items : [bettings.direct_middle_three_duplex, bettings.direct_middle_three_sum, bettings.group_middle_three_three_duplex,
				bettings.group_middle_three_six_duplex],
				selectPlate : {
					'direct_middle_three_duplex' : middle_three_duplex,
					'direct_middle_three_sum' : middle_three_sum,
					'group_middle_three_three_duplex' : middle_three_three_duplex,
					'group_middle_three_six_duplex' : middle_three_six_duplex,
				}
			},
			],
			last_three : [
			{
				name : 'direct',
				desc : '后三直选',
				items : [bettings.direct_last_three_duplex, bettings.direct_last_three_sum,
				bettings.group_last_three_three_duplex, bettings.group_last_three_six_duplex],
				selectPlate : {
					'direct_last_three_duplex' : last_three_duplex,
					'direct_last_three_sum' : last_three_sum,
					'group_last_three_three_duplex' : last_three_three_duplex,
					'group_last_three_six_duplex' : last_three_six_duplex,
				}
			},
			],
			any_three : [
			{
				name : 'direct',
				desc : '后三直选',
				items : [bettings.direct_any_three_duplex, bettings.direct_any_three_sum, bettings.group_any_three_three_duplex,
				bettings.group_any_three_six_duplex ],
				selectPlate : {
					'direct_any_three_duplex' : any_three_duplex,
					'direct_any_three_sum' : any_three_sum,
					'group_any_three_three_duplex' : any_three_three_duplex,
					'group_any_three_six_duplex' : any_three_six_duplex,
				}
			},
			],
			first_two : [
			{
				name : 'direct',
				desc : '前二直选',
				items : [bettings.direct_first_two_duplex, bettings.direct_first_two_sum, bettings.group_first_two_duplex,  ],
				selectPlate : {
					'direct_first_two_duplex' : first_two_duplex,
					'direct_first_two_sum' : first_two_sum,
					'group_first_two_duplex' : first_two_group_duplex,
				}
			},
			],
			last_two : [
			{
				name : 'direct',
				desc : '后二直选',
				items : [bettings.direct_last_two_duplex, bettings.direct_last_two_sum,bettings.group_last_two_duplex ],
				selectPlate : {
					'direct_last_two_duplex' : last_two_duplex,
					'direct_last_two_sum' : last_two_sum,
					'group_last_two_duplex' : last_two_group_duplex,
				}
			}
			],
			any_two : [
			{
				name : 'direct',
				desc : '任二直选',
				items : [bettings.direct_any_two_duplex, bettings.direct_any_two_sum, bettings.group_any_two_duplex ],
				selectPlate : {
					'direct_any_two_duplex' : any_two_duplex,
					'direct_any_two_sum' : any_two_sum,
					'group_any_two_duplex' : any_two_group_duplex,
				}
			}
			],
			location_gall : [
			{
				name : 'location',
				desc : '定位胆',
				items : [bettings.location_gall_type ],
				selectPlate : {
					'location_gall_type' : location_gall_duplex,
				}
			},
			],
			not_location : [
			{
				name : 'not_location',
				desc : '定位胆',
				items : [bettings.not_location_last_three_one_code, bettings.not_location_first_three_one_code,
				bettings.not_location_last_three_two_code, bettings.not_location_first_three_two_code ],
				selectPlate : {
					'not_location_last_three_one_code' : not_location_gall_duplex,
					'not_location_first_three_one_code' : not_location_gall_duplex,
					'not_location_last_three_two_code' : not_location_gall_duplex,
					'not_location_first_three_two_code' : not_location_gall_duplex,
				}
			}
			],
			big_little_odd_even : [
			{
				name : 'big_little_odd_even',
				desc : '大小单双',
				items : [bettings.big_little_odd_even_first_two, bettings.big_little_odd_even_last_two],
				selectPlate : {
					'big_little_odd_even_first_two' : big_little_odd_even_first_two_duplex,
					'big_little_odd_even_last_two' : big_little_odd_even_last_two_duplex,
				}
			},
			],
			interesting : [
		  	{
		  		name : 'interesting',
		  		desc : '大小单双',
		  		items : [bettings.interesting_one, bettings.interesting_two, bettings.interesting_three, bettings.interesting_four ],
		  		selectPlate : {
		  			'interesting_one' : interesting_one_duplex,
		  			'interesting_two' : interesting_two_duplex,
		  			'interesting_three' : interesting_three_duplex,
		  			'interesting_four' : interesting_four_duplex,
		  		}
		  	},
	  	],
		}
	}