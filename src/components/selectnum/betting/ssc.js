import { factorial, combin, filterElem, calcSum, calcNumber, calcThreeSumCount, calcTwoSumCount, calcNumberSum, arrySameNum } from '../../../tools/command'
export default {
    five_star: {
        direct_duplex(data) {
            var rst = { count: 0, numbers: '' }
            var wan = data['wan']
            var qian = data['qian']
            var bai = data['bai']
            var shi = data['shi']
            var ge = data['ge']
            if (wan && wan.length > 0 && qian && qian.length > 0 && bai && bai.length > 0 && shi && shi.length > 0 && ge && ge.length > 0) {
                rst.count = wan.length * qian.length * bai.length * shi.length * ge.length
                rst.numbers = calcNumber(wan, qian, bai, shi, ge)
            }
            return rst
        },
        direct_single(data) {
        	var rst = { count: 0, numbers: '' }
        	if(data){
        		var re = /[\s,$]/g
        		var dataArray = data.split(re)
        		var valid = dataArray.some(elem => isNaN(elem) || elem.length !== 5)
        		if(!valid){
        			rst.count = dataArray.length
        			rst.numbers = dataArray.join('$')
        		} else {
        			rst.msg = '输入的注单号码格式不正确,请重新输入'
        		}
        	}
        	return rst
        },
        group_120(data) {
            var rst = { count: 0, numbers: '' }
            var sel = data['g120']
            if (sel && sel.length >= 5) {
                var len = sel.length
                rst.count = combin(len, 5)
                rst.numbers = sel.join('').replace(/s_/gi, '')
            }
            return rst
        },
        group_60(data) {
            var rst = { count: 0, numbers: '' }
            var two_dup = data['two_dup']
            var single_no = data['single_no']
            if (two_dup && two_dup.length > 0 && single_no && single_no.length >= 3) {
                rst.count = calcSum(two_dup, single_no, 3)
                rst.numbers = calcNumber(two_dup, single_no)
            }
            return rst
        },
        group_30(data) {
            var rst = { count: 0, numbers: '' }
            var two_dup = data['two_dup']
            var single_no = data['single_no']
            if (two_dup && two_dup.length >= 2 && single_no && single_no.length >= 1) {
                rst.count = calcSum(single_no, two_dup, 2)
                rst.numbers = calcNumber(two_dup, single_no)
            }
            return rst
        },
        group_20(data) {
            var rst = { count: 0, numbers: '' }
            var three_dup = data['three_dup']
            var single_no = data['single_no']
            if (three_dup && three_dup.length >= 1 && single_no && single_no.length >= 2) {
                rst.count = calcSum(three_dup, single_no, 2)
                rst.numbers = calcNumber(three_dup, single_no)
            }
            return rst
        },
        group_10(data) {
            var rst = { count: 0, numbers: '' }
            var three_dup = data['three_dup']
            var two_dup = data['two_dup']
            if (three_dup && three_dup.length >= 1 && two_dup && two_dup.length >= 1) {
                rst.count = calcSum(three_dup, two_dup, 1)
                rst.numbers = calcNumber(three_dup, two_dup)
            }
            return rst
        },
        group_5(data) {
            var rst = { count: 0, numbers: '' }
            var four_dup = data['four_dup']
            var single_no = data['single_no']
            if (four_dup && four_dup.length >= 1 && single_no && single_no.length >= 1) {
                rst.count = calcSum(four_dup, single_no, 1)
                rst.numbers = calcNumber(four_dup, single_no)
            }
            return rst
        },

    },
    four_star: {
        direct_first_four_duplex(data) {
            var rst = { count: 0, numbers: '' }
            var wan = data['wan']
            var qian = data['qian']
            var bai = data['bai']
            var shi = data['shi']
            if (wan && wan.length > 0 && qian && qian.length > 0 && bai && bai.length > 0 && shi && shi.length > 0) {
                rst.count = wan.length * qian.length * bai.length * shi.length
                rst.numbers = calcNumber(wan, qian, bai, shi)
            }
            return rst
        },
        direct_first_four_single(data) {
        	var rst = { count: 0, numbers: '' }
        	if(data){
        		var re = /[\s,$]/g
        		var dataArray = data.split(re)
        		var valid = dataArray.some(elem => isNaN(elem) || elem.length !== 4)
        		if(!valid){
        			rst.count = dataArray.length
        			rst.numbers = dataArray.join('$')
        		} else {
        			rst.msg = '输入的注单号码格式不正确,请重新输入'
        		}
        	}
        	return rst

        },
        direct_last_four_duplex(data) {
            var rst = { count: 0, numbers: '' }
            var qian = data['qian']
            var bai = data['bai']
            var shi = data['shi']
            var ge = data['ge']
            if (qian && qian.length > 0 && bai && bai.length > 0 && shi && shi.length > 0 && ge && ge.length > 0) {
                rst.count = qian.length * bai.length * shi.length * ge.length
                rst.numbers = calcNumber(qian, bai, shi, ge)
            }
            return rst
        },
        direct_last_four_single(data) {
        	return this.direct_first_four_single(data)
        },
        group_24(data) {
            var rst = { count: 0, numbers: '' }
            var sel = data['g24']
            if (sel && sel.length >= 4) {
                var len = sel.length
                rst.count = combin(len, 4)
                rst.numbers = sel.join('').replace(/s_/gi, '')
            }
            return rst
        },
        group_12(data) {
            var rst = { count: 0, numbers: '' }
            var two_dup = data['two_dup']
            var single_no = data['single_no']
            if (two_dup && two_dup.length > 0 && single_no && single_no.length >= 2) {
                rst.count = calcSum(two_dup, single_no, 2)
                rst.numbers = calcNumber(two_dup, single_no)
            }
            return rst
        },
        group_6(data) {
            var rst = { count: 0, numbers: '' }
            var two_dup = data['two_dup']
            if (two_dup && two_dup.length >= 2) {
                rst.count = combin(two_dup.length, 2)
                rst.numbers = calcNumber(two_dup)
            }
            return rst
        },
        group_4(data) {
            var rst = { count: 0, numbers: '' }
            var three_dup = data['three_dup']
            var single_no = data['single_no']
            if (three_dup && three_dup.length >= 1 && single_no && single_no.length >= 1) {
                rst.count = calcSum(three_dup, single_no, 1)
                rst.numbers = calcNumber(three_dup, single_no)
            }
            return rst
        }
    },
    first_three: {
        direct_first_three_duplex(data) {
            var rst = { count: 0, numbers: '' }
            var wan = data['wan']
            var qian = data['qian']
            var bai = data['bai']
            if (wan && wan.length > 0 && qian && qian.length > 0 && bai && bai.length > 0) {
                rst.count = wan.length * qian.length * bai.length
                rst.numbers = calcNumber(wan, qian, bai)
            }
            return rst
        },
        direct_first_three_single(data) {
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
        direct_first_three_sum(data) {
            var rst = { count: 0, numbers: '' }
            var sum_value = data['sum']
            if (sum_value && sum_value.length > 0) {
                rst.numbers = calcNumberSum(sum_value)
                var count = 0
                sum_value.forEach(function(element) {
                    count += calcThreeSumCount(element.replace(/s_/gi, ''))
                })
                rst.count = count
            }
            return rst
        },
        group_first_three_three_duplex(data) {
            var rst = { count: 0, numbers: '' }
            var group_three = data['groupThree']
            if (group_three && group_three.length >= 2) {
                rst.numbers = calcNumber(group_three)
                rst.count = combin(group_three.length, 2) * 2
            }
            return rst
        },
        group_first_three_three_single(data) {
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
        group_first_three_six_duplex(data) {
            var rst = { count: 0, numbers: '' }
            var group_six = data['groupSix']
            if (group_six && group_six.length >= 3) {
                rst.numbers = calcNumber(group_six)
                rst.count = combin(group_six.length, 3)
            }
            return rst
        },
        group_first_three_six_single(data) {
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
        group_first_three_mix_single(data) {
        	var rst = { count: 0, numbers: '' }
        	if(data){
        		var re = /[\s,$]/g
        		var dataArray = data.split(re)
        		var valid = dataArray.some(elem => isNaN(elem) || elem.length !== 3 || arrySameNum(elem, 3))
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
    middle_three: {
        direct_middle_three_single(data) {
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
        direct_middle_three_duplex(data) {
            var rst = { count: 0, numbers: '' }
            var qian = data['qian']
            var bai = data['bai']
            var shi = data['shi']
            if (qian && qian.length > 0 && bai && bai.length > 0 && shi && shi.length > 0) {
                rst.count = qian.length * bai.length * shi.length
                rst.numbers = calcNumber(qian, bai, shi)
            }
            return rst
        },
        direct_middle_three_sum(data) {
            var rst = { count: 0, numbers: '' }
            var sum_value = data['sum']
            if (sum_value && sum_value.length > 0) {
                rst.numbers = calcNumberSum(sum_value)
                var count = 0
                sum_value.forEach(function(element) {
                    count += calcThreeSumCount(element.replace(/s_/gi, ''))
                })
                rst.count = count
            }
            return rst
        },
        group_middle_three_three_duplex(data) {
            var rst = { count: 0, numbers: '' }
            var group_three = data['groupThree']
            if (group_three && group_three.length >= 2) {
                rst.numbers = calcNumber(group_three)
                rst.count = combin(group_three.length, 2) * 2
            }
            return rst
        },
        group_middle_three_three_single(data) {
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
        group_middle_three_six_duplex(data) {
            var rst = { count: 0, numbers: '' }
            var group_six = data['groupSix']
            if (group_six && group_six.length >= 3) {
                rst.numbers = calcNumber(group_six)
                rst.count = combin(group_six.length, 3)
            }
            return rst
        },
        group_middle_three_six_single(data) {
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
        group_middle_three_mix_single(data) {
        	var rst = { count: 0, numbers: '' }
        	if(data){
        		var re = /[\s,$]/g
        		var dataArray = data.split(re)
        		var valid = dataArray.some(elem => isNaN(elem) || elem.length !== 3 || arrySameNum(elem, 3))
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
    last_three: {
        direct_last_three_single(data) {
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
        direct_last_three_duplex(data) {
            var rst = { count: 0, numbers: '' }
            var bai = data['bai']
            var shi = data['shi']
            var ge = data['ge']
            if (bai && bai.length > 0 && shi && shi.length > 0 && ge && ge.length > 0) {
                rst.count = bai.length * shi.length * ge.length
                rst.numbers = calcNumber(bai, shi, ge)
            }
            return rst
        },
        direct_last_three_sum(data) {
            var rst = { count: 0, numbers: '' }
            var sum_value = data['sum']
            if (sum_value && sum_value.length > 0) {
                rst.numbers = calcNumberSum(sum_value)
                var count = 0
                sum_value.forEach(function(element) {
                    count += calcThreeSumCount(element.replace(/s_/gi, ''))
                })
                rst.count = count
            }
            return rst
        },
        group_last_three_three_duplex(data) {
            var rst = { count: 0, numbers: '' }
            var group_three = data['groupThree']
            if (group_three && group_three.length >= 2) {
                rst.numbers = calcNumber(group_three)
                rst.count = combin(group_three.length, 2) * 2
            }
            return rst
        },
        group_last_three_three_single(data) {
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
        group_last_three_six_duplex(data) {
            var rst = { count: 0, numbers: '' }
            var group_six = data['groupSix']
            if (group_six && group_six.length >= 3) {
                rst.numbers = calcNumber(group_six)
                rst.count = combin(group_six.length, 3)
            }
            return rst
        },
        group_last_three_six_single(data) {
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
        group_last_three_mix_single(data) {
        	var rst = { count: 0, numbers: '' }
        	if(data){
        		var re = /[\s,$]/g
        		var dataArray = data.split(re)
        		var valid = dataArray.some(elem => isNaN(elem) || elem.length !== 3 || arrySameNum(elem, 3))
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
    any_three: {
        direct_any_three_duplex(data) {
            var rst = { count: 0, numbers: '' }
            var any = []
            var wan = data['wan']
            var qian = data['qian']
            var bai = data['bai']
            var shi = data['shi']
            var ge = data['ge']
            var tzbs = ''
            if (wan && wan.length > 0) {
                any.push(wan)
                tzbs += '1'
            } else {
                any.push([''])
            }
            if (qian && qian.length > 0) {
                any.push(qian)
                tzbs += '2'
            } else {
                any.push([''])
            }
            if (bai && bai.length > 0) {
                any.push(bai)
                tzbs += '3'
            } else {
                any.push([''])
            }
            if (shi && shi.length > 0) {
                any.push(shi)
                tzbs += '4'
            } else {
                any.push([''])
            }
            if (ge && ge.length > 0) {
                any.push(ge)
                tzbs += '5'
            } else {
                any.push([''])
            }

            if (tzbs.length < 3) {
                return rst
            }
            if (tzbs.length > 3) {
                rst.msg = "任三玩法是任意选择三个球位，请重新选择"
                return rst
            }
            var count = 1
            any.forEach(function(element) {
                count *= element.length
            });
            rst.count = count
            rst.numbers = calcNumber(...any)
            rst.tzbs = tzbs
            return rst
        },
        direct_any_three_single(data, selBarSingle) {
        	var rst = { count: 0, numbers: '' }
			var ballposi = selBarSingle.selected
        	if (!ballposi || ballposi.length !== 3) {
                rst.msg = "任3玩法必须投注3位数的球位，请重新选择"
                return rst
            }

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
        direct_any_three_sum(data) {
            var rst = { count: 0, numbers: '' }
            var sum_value = data['sum']
            var ballposi = data['ballposi']

            if(!sum_value || sum_value.length === 0){
            	return rst
            }

            if (!ballposi || ballposi.length !== 3) {
                rst.msg = "任三玩法是任意选择三个球位，请重新选择"
                return rst
            }

            if (sum_value && sum_value.length > 0) {
                rst.numbers = calcNumberSum(sum_value)
                var count = 0
                sum_value.forEach(function(element) {
                    count += calcThreeSumCount(element.replace(/s_/gi, ''))
                })
                rst.count = count
            }
            return rst
        },
        group_any_three_three_duplex(data) {
            var rst = { count: 0, numbers: '' }
            var ballposi = data['ballposi']
            var group_three = data['groupThree']

            if(!group_three || group_three.length === 0){
            	return rst
            }
            if (!ballposi || ballposi.length !== 3) {
                rst.msg = "任3玩法必须投注3位数的球位，请重新选择"
                return rst
            }
            if (group_three && group_three.length >= 2) {
                rst.numbers = calcNumber(group_three)
                rst.count = combin(group_three.length, 2) * 2
            }
            return rst
        },
        group_any_three_three_single(data, selBarSingle) {
        	var rst = { count: 0, numbers: '' }

        	var ballposi = selBarSingle.selected
        	if (!ballposi || ballposi.length !== 3) {
        	    rst.msg = "任三玩法是任意选择三个球位，请重新选择"
        	    return rst
        	}

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
        group_any_three_six_duplex(data) {
        	var rst = { count: 0, numbers: '' }
        	var group_six = data['groupSix']
        	var ballposi = data['ballposi']

        	if(!group_six || group_six.length === 0){
        		return rst
        	}

        	if (!ballposi || ballposi.length !== 3) {
        	    rst.msg = "任三玩法是任意选择三个球位，请重新选择"
        	    return rst
        	}
        	if (group_six && group_six.length >= 3) {
        	    rst.numbers = calcNumber(group_six)
        	    rst.count = combin(group_six.length, 3)
        	}
        	return rst
        },
        group_any_three_six_single(data, selBarSingle) {
        	var rst = { count: 0, numbers: '' }

        	var ballposi = selBarSingle.selected
        	if (!ballposi || ballposi.length !== 3) {
        	    rst.msg = "任3玩法必须投注3位数的球位，请重新选择"
        	    return rst
        	}

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
        group_any_three_mix_single(data, selBarSingle) {
        	var rst = { count: 0, numbers: '' }

        	var ballposi = selBarSingle.selected
        	if (!ballposi || ballposi.length !== 3) {
        	    rst.msg = "任3玩法必须投注3位数的球位，请重新选择"
        	    return rst
        	}

        	if(data){
        		var re = /[\s,$]/g
        		var dataArray = data.split(re)
        		var valid = dataArray.some(elem => isNaN(elem) || elem.length !== 3 || arrySameNum(elem, 3))
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
    first_two: {
    	direct_first_two_duplex(data){
    		var rst = { count: 0, numbers: '' }
    		var wan = data['wan']
    		var qian = data['qian']
    		if (wan && wan.length > 0 && qian && qian.length > 0 ) {
    		    rst.count = wan.length * qian.length
    		    rst.numbers = calcNumber(wan, qian)
    		}
    		return rst
    	},
    	direct_first_two_single(data){
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
    	direct_first_two_sum(data){
    		var rst = { count: 0, numbers: '' }
    		var sum_value = data['sum']
    		if (sum_value && sum_value.length > 0) {
    		    rst.numbers = calcNumberSum(sum_value)
    		    var count = 0
    		    sum_value.forEach(function(element) {
    		        count += calcTwoSumCount(element.replace(/s_/gi, ''))
    		    })
    		    rst.count = count
    		}
    		return rst
    	},
    	group_first_two_duplex(data){
    		var rst = { count: 0, numbers: '' }
    		var group_two = data['group_two']
    		if (group_two && group_two.length >= 2) {
    		    rst.numbers = calcNumber(group_two)
    		    rst.count = combin(group_two.length, 2)
    		}
    		return rst
    	},
    	group_first_two_single(data){
    		var rst = { count: 0, numbers: '' }
    		if(data){
    			var re = /[\s,$]/g
    			var dataArray = data.split(re)
    			var valid = dataArray.some(elem => isNaN(elem) || elem.length !== 2 || arrySameNum(elem, 2))
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
    last_two: {
    	direct_last_two_duplex(data){
    		var rst = { count: 0, numbers: '' }
    		var shi = data['shi']
    		var ge = data['ge']
    		if (shi && shi.length > 0 && ge && ge.length > 0) {
    		    rst.count = shi.length * ge.length
    		    rst.numbers = calcNumber(shi, ge)
    		}
    		return rst
    	},
    	direct_last_two_single(data){
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
    	direct_last_two_sum(data){
    		var rst = { count: 0, numbers: '' }
    		var sum_value = data['sum']
    		if (sum_value && sum_value.length > 0) {
    		    rst.numbers = calcNumberSum(sum_value)
    		    var count = 0
    		    sum_value.forEach(function(element) {
    		        count += calcTwoSumCount(element.replace(/s_/gi, ''))
    		    })
    		    rst.count = count
    		}
    		return rst
    	},
    	group_last_two_duplex(data){
    		var rst = { count: 0, numbers: '' }
    		var group_two = data['group_two']
    		if (group_two && group_two.length >= 2) {
    		    rst.numbers = calcNumber(group_two)
    		    rst.count = combin(group_two.length, 2)
    		}
    		return rst
    	},
    	group_last_two_single(data){
    		var rst = { count: 0, numbers: '' }
    		if(data){
    			var re = /[\s,$]/g
    			var dataArray = data.split(re)
    			var valid = dataArray.some(elem => isNaN(elem) || elem.length !== 2 || arrySameNum(elem, 2))
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
    any_two: {
    	direct_any_two_duplex(data){
    		var rst = { count: 0, numbers: '' }
    		var any = []
    		var wan = data['wan']
    		var qian = data['qian']
    		var bai = data['bai']
    		var shi = data['shi']
    		var ge = data['ge']
            var tzbs = ''
    		if (wan && wan.length > 0) {
    		    any.push(wan)
                tzbs += '1'
    		} else {
                any.push([''])
            }
    		if (qian && qian.length > 0) {
    		    any.push(qian)
                tzbs += '2'
    		} else {
                any.push([''])
            }
    		if (bai && bai.length > 0) {
    		    any.push(bai)
                tzbs += '3'
    		} else {
                any.push([''])
            }
    		if (shi && shi.length > 0) {
    		    any.push(shi)
                tzbs += '4'
    		} else {
                any.push([''])
            }
    		if (ge && ge.length > 0) {
    		    any.push(ge)
                tzbs += '5'
    		} else {
                any.push([''])
            }

    		if (tzbs.length < 2) {
    		    return rst
    		}
    		if (tzbs.length > 2) {
    		    rst.msg = "任二玩法是任意选择二个球位，请重新选择"
    		    return rst
    		}
    		var count = 1
    		any.forEach(function(element) {
    		    count *= element.length
    		});
    		rst.count = count
    		rst.numbers = calcNumber(...any)
            rst.tzbs = tzbs
    		return rst
    	},
    	direct_any_two_single(data, selBarSingle) {
    		var rst = { count: 0, numbers: '' }

    		var ballposi = selBarSingle.selected
        	if (!ballposi || ballposi.length !== 2) {
        	    rst.msg = "任2玩法必须投注2位数的球位，请重新选择"
        	    return rst
        	}

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
    	direct_any_two_sum(data){
    		var rst = { count: 0, numbers: '' }
    		var sum_value = data['sum']
    		var ballposi = data['ballposi']

    		if(!sum_value || sum_value.length === 0){
    			return rst
    		}

    		if (!ballposi || ballposi.length !== 2) {
    		    rst.msg = "任2玩法必须投注2位数的球位，请重新选择"
    		    return rst
    		}

    		if (sum_value && sum_value.length > 0) {
    		    rst.numbers = calcNumberSum(sum_value)
    		    var count = 0
    		    sum_value.forEach(function(element) {
    		        count += calcTwoSumCount(element.replace(/s_/gi, ''))
    		    })
    		    rst.count = count
    		}
    		return rst
    	},
    	group_any_two_duplex(data){
    		var rst = { count: 0, numbers: '' }
    		var group_two = data['group_two']
    		var ballposi = data['ballposi']

    		if(!group_two || group_two.length === 0){
    			return rst
    		}

    		if (!ballposi || ballposi.length !== 2) {
    		    rst.msg = "任2玩法必须投注2位数的球位，请重新选择"
    		    return rst
    		}

    		if (group_two && group_two.length >= 2) {
    		    rst.numbers = calcNumber(group_two)
    		    rst.count = combin(group_two.length, 2)
    		}
    		return rst
    	},
    	group_any_two_single(data, selBarSingle){
    		var rst = { count: 0, numbers: '' }

    		var ballposi = selBarSingle.selected
        	if (!ballposi || ballposi.length !== 2) {
        	    rst.msg = "任2玩法必须投注2位数的球位，请重新选择"
        	    return rst
        	}

    		if(data){
    			var re = /[\s,$]/g
    			var dataArray = data.split(re)
    			var valid = dataArray.some(elem => isNaN(elem) || elem.length !== 2 || arrySameNum(elem, 2))
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
    location_gall: {
    	location_gall_type(data){
    		var rst = { count: 0, numbers: '' }
            var wan = data['wan']
            var qian = data['qian']
            var bai = data['bai']
            var shi = data['shi']
            var ge = data['ge']
            wan = wan || []
            qian = qian || []
            bai = bai || []
            shi = shi || []
            ge = ge || []

            rst.count = wan.length + qian.length + bai.length + shi.length + ge.length
            rst.numbers = calcNumber(wan, qian, bai, shi, ge)
            return rst
    	}
    },
    not_location: {
    	not_location_last_three_one_code(data){
    		var rst = { count: 0, numbers: '' }
            var not_location_title = data['not_location']
            not_location_title = not_location_title || []
            rst.count = not_location_title.length
            rst.numbers = calcNumber(not_location_title)
    		return rst
    	},
    	not_location_first_three_one_code(data){
    		return this.not_location_last_three_one_code(data)
    	},
    	not_location_last_three_two_code(data){
			var rst = { count: 0, numbers: '' }
	        var not_location_title = data['not_location']
	        not_location_title = not_location_title || []
	        rst.count = combin(not_location_title.length, 2)
	        rst.numbers = calcNumber(not_location_title,)
			return rst
    	},
    	not_location_first_three_two_code(data){
			return this.not_location_last_three_two_code(data)
    	}
    },
    big_little_odd_even: {
    	big_little_odd_even_first_two(data){
    		var rst = { count: 0, numbers: '' }
    		var wan = data['wan']
    		var qian = data['qian']
    		if (wan && wan.length > 0 && qian && qian.length > 0) {
    		    rst.count = wan.length * qian.length
    		    rst.numbers = calcNumber(wan, qian)
    		}
    		return rst
    	},
    	big_little_odd_even_last_two(data){
    		var rst = { count: 0, numbers: '' }
    		var shi = data['shi']
    		var ge = data['ge']
    		if (shi && shi.length > 0 && ge && ge.length > 0) {
    		    rst.count = shi.length * ge.length
    		    rst.numbers = calcNumber(shi, ge)
    		}
    		return rst
    	}
    },
    interesting: {
    	interesting_one(data){
    		var rst = { count: 0, numbers: '' }
            var interesting_title = data['interesting']
            interesting_title = interesting_title || []
            rst.count = interesting_title.length
            rst.numbers = calcNumber(interesting_title)
    		return rst
    	},
    	interesting_two(data){
    		return this.interesting_one(data)
    	},
    	interesting_three(data){
    		return this.interesting_one(data)
    	},
    	interesting_four(data){
    		return this.interesting_one(data)
    	}
    }
}
