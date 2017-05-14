// common tool functions

export const ua = () => {
    var userAgentInfo = navigator.userAgent
    var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod']
    var flag = 'PC'
    for (var vv = 0; vv < Agents.length; vv++) {
        if (userAgentInfo.indexOf(Agents[vv]) > 0) {
            flag = Agents[vv]
            break
        }
    }
    return flag
}

export const  winHeight = () => {
    let winHeight = ""
    if (window.innerHeight)
        winHeight = window.innerHeight
    else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight
    if (document.documentElement && document.documentElement.clientHeight) {
        winHeight = document.documentElement.clientHeight
    }
    return winHeight
}

export const  winWidth = () => {
    let winWidth = ""
    if (window.innerWidth)
        winWidth = window.innerWidth
    else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth
    if (document.documentElement && document.documentElement.clientWidth) {
        winWidth = document.documentElement.clientWidth
    }
    return winWidth
}

export const addClass = (elem, className) => {
    if(elem && className){
        if(!hasClass(elem, className)){
            elem.className = elem.className + " " + className
        }
    }
}

export const hasClass = (elem, className) => {
    if(elem && className){
        var clsArray = elem.className.split(/\s+/)
        if(clsArray && clsArray.length > 0){
            var clsIndex = clsArray.indexOf(className)
            if(clsIndex > -1){
                return true
            }
        }
    }
    return false
}

export const toggleClass = (elem, className) => {
    if(elem && className){
        if(hasClass(elem, className)){
           removeClass(elem, className)
        } else {
            addClass(elem, className)
        }
    }
}

export const removeClass = (elem, className) => {
    if(elem && className){
        var clsArray = elem.className.split(/\s+/)
        if(clsArray && clsArray.length > 0){
            var clsIndex = clsArray.indexOf(className)
            if(clsIndex > -1){
                clsArray.splice(clsIndex, 1)
                elem.className = clsArray.join(' ')
            }
        }
    }
}

//计算阶乘 factorial

export const factorial = function(n) {
    if (n == 0 || n == 1) {
        return 1
    }
    if(n > 1){
        return n*factorial(n-1)
    }
}

//计算组合公式C n m = n!/(m! * (n-m)!)
export const combin = function(n, m){
   if(n < 1 || m <1 || n < m){
        return 0
   } else if(n == m){
        return 1
   }
   return factorial(n)/(factorial(m)*factorial(n-m))
}

export const filterElem = function(arr, elem){
   if(!arr || arr.length < 1 || !elem){
        return arr
   }
   return arr.filter(function(element) {
       return element != elem
   })
}

export const calcSum = function(a, b, c){
    var count = 0
    a.forEach( function(element, index) {
        count += combin(filterElem(b, element).length, c)
    })
    return count
}

export const calcNumberCommon = function(...item){
    var rst = ''
    var len = item.length
    item.forEach( function(element, index) {
        if(index == len -1){
            rst += element.join('')
        } else{
            rst += element.join('') + ','
        }
    })
    return rst
}

export const calcNumber = function(...item){
    var rst = calcNumberCommon(...item)
    return rst.replace(/s_/gi,'')
}

export const calcNumberSum = function(...item){
    var rst = calcNumberCommon(...item)
    return rst.replace(/s_/gi, ',').slice(1)
}

export const calcThreeSumCount = function(sum){
    var a = [0,1,2,3,4,5,6,7,8,9]
    var b = [0,1,2,3,4,5,6,7,8,9]
    var c = [0,1,2,3,4,5,6,7,8,9]
    var count = 0
    a.forEach( function(elema, index) {
        b.forEach( function(elemb, index) {
            c.forEach( function(elemc, index) {
                if(elema + elemb + elemc == sum){
                    count ++
                }
            })
        })
    })
    return count
}

export const calcTwoSumCount = function(sum){
    var a = [0,1,2,3,4,5,6,7,8,9]
    var b = [0,1,2,3,4,5,6,7,8,9]
    var count = 0
    a.forEach( function(elema, index) {
        b.forEach( function(elemb, index) {
            if(elema + elemb == sum){
                count ++
            }
        })
    })
    return count
}

export const arrySameNum = function(value, num){
    if(!value){
        return false
    }
    var va = value.split('')
    var b = false
    va.forEach( function(elem1, index) {
        var count = 0
        va.forEach( function(elem2, index) {
            if(elem1 == elem2){
                count ++
            }
        })
        if(count == num){
            b = true
        }
    })
    return b
}

export const lpad = function(val, len, pstr) {
    var valStr = val + ''
    if(valStr){
        var plen = valStr.length
        while (plen < len) {
            valStr = pstr + valStr
            plen = valStr.length
        }
    }
    return valStr
}

var num_01_11 = ['01','02','03','04','05','06','07','08','09','10','11']
var num_01_10 = ['01','02','03','04','05','06','07','08','09','10']

export const validNum = (str, all) => {
    var rst = true
    var strLen = str.length
    if(strLen % 2 !== 0){
        return false
    }
    var idx = 0
    var darray = []
    while (idx < strLen) {
        var subStr = str.substring(idx, idx + 2)
        darray.push(subStr)
        if(all.indexOf(subStr) == -1){
            return false
        }
        idx = idx + 2
    }
    //计算是否有重复值
    var dcount = false
    darray.forEach( function(elem1, index) {
        var dc= 0
        darray.forEach( function(elem2, index) {
            if(elem1 == elem2){
                dc ++
            }
        })
        if(dc > 1){
            dcount = true
        }
    })

    if(dcount){
        return false
    }

    return rst
}

export const calcSelecSevenFiveFingle = (data, len) => {
    var rst = { count: 0, numbers: '' }
    if(data){
        var re = /[\s,$]/g
        var dataArray = data.split(re)
        var valid = dataArray.some(elem => isNaN(elem) || elem.length !== len || !validNum(elem, num_01_11))
        if(!valid){
            rst.count = dataArray.length
            rst.numbers = dataArray.join('$')
        } else {
            rst.msg = '输入的注单号码格式不正确,请重新输入'
        }
    }
    return rst
}

export const calcPK10Single = (data, len) => {
    var rst = { count: 0, numbers: '' }
    if(data){
        var re = /[\s,$]/g
        var dataArray = data.split(re)
        var valid = dataArray.some(elem => isNaN(elem) || elem.length !== len || !validNum(elem, num_01_10))
        if(!valid){
            rst.count = dataArray.length
            rst.numbers = dataArray.join('$')
        } else {
            rst.msg = '输入的注单号码格式不正确,请重新输入'
        }
    }
    return rst
}

export const calcSelecSevenFiveDuplex = (data, len) => {
    var rst = { count: 0, numbers: '' }
    var duplex = data['select_eleven_five_duplex']
    if(duplex && duplex.length >= len){
        rst.count = combin(duplex.length, len)
        rst.numbers = calcNumberSum(duplex)
    }
    return rst
}

export const isPassive = () => {
    var supportsPassiveOption = false;
    try {
        addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassiveOption = true;
            }
        }));
    } catch(e) {}
    return supportsPassiveOption;
}

export const getRaf = () => {
    return  window.requestAnimationFrame  ||
            window.webkitRequestAnimationFrame  ||
            window.mozRequestAnimationFrame     ||
            window.oRequestAnimationFrame       ||
            window.msRequestAnimationFrame      ||
            function (callback) { window.setTimeout(callback, 1000 / 60); }
}

 
export const randomNo = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// min: 最小， max:最大 numc: 随机号码数量  isdup:是否可重复 lpads: 左侧号码补位
export const randomTz = (min,max,numc,isdup=true,lpads='',separtor=",",exclude=[]) => {
    const arr = []
    for(var i=0; i < numc;){
        var rNo = randomNo(min,max)+''
        if(lpads.length > 0){
            rNo = lpad(rNo, 2 ,lpads)
        }
        if(!isdup && arr.indexOf(rNo) > -1){
            continue
        } else if(exclude.length > 0 && exclude.indexOf(rNo) > -1){
            continue
        } else {
            ++i
            arr.push(rNo)
        }
    }
    return arr.join(separtor)
}

//c : 选择的球位数， pc:球位数的总数 从总数pc中选择c个的球位
export const fillVal = (c, min, max,isdup,lpads='',pc=5) => {
    const arr = []
    for(var i=0;i < pc;++i){
        arr.push('')
    }
    const indArr = randomTz(1,pc,c,false).split(',').sort()
    const valArr = randomTz(min,max,c,isdup,lpads).split(',')
    indArr.forEach(function(elem,ind){
        arr[elem - 1] = valArr[ind]
    })
    return {tzbs : indArr.join(''), numbers: arr.join(',')}
}

export const randomBallPosition = (c) => {
    return randomTz(1,5,c,false,'','').split('').sort().join('')
}

//大小单双转汉字
export const exchange = (value) => {
    var orderValue = '';
    for (var i = 0; i < value.length; i++) {
        switch(value[i]){
            case '9':
            orderValue += '大';
            break;
            case '1':
            orderValue += '小';
            break;
            case '3':
            orderValue += '单';
            break;
            case '2':
            orderValue += '双';
            break;
            case ',':
            orderValue += ',';
            break;
            case '0':
            orderValue += '';
            break;
            default :
            break;
        }
    }
    return orderValue
}

//生肖，色波转汉字
export const exchange_shengxiao = (value) => {
    var orderValue = '';
    switch(value){
        case 'shu':
        orderValue += '鼠';
        break;
        case 'hu':
        orderValue += '虎';
        break;
        case 'long':
        orderValue += '龙';
        break;
        case 'ma':
        orderValue += '马';
        break;
        case 'hou':
        orderValue += '猴';
        break;
        case 'gou':
        orderValue += '狗';
        break;
        case 'niu':
        orderValue += '牛';
        break;
        case 'tu':
        orderValue += '兔';
        break;
        case 'she':
        orderValue += '蛇';
        break;
        case 'yang':
        orderValue += '羊';
        break;
        case 'ji':
        orderValue += '鸡';
        break;
        case 'zhu':
        orderValue += '猪';
        break;
        case 'hongbo':
        orderValue += '红波';
        break;
        case 'lanbo':
        orderValue += '蓝波';
        break;
        case 'lvbo':
        orderValue += '绿波';
        break;
        default :
        break;
    }
    return orderValue
}

//luhn算法，校验银行卡号是否符合luhn算法,防止错误输入
export const luhn = (card) => {
    if(!card){
        return false
    }
    var re = /^\d+$/
    if(!re.test(card)){
        return false
    }
    const len = card.length
    var arr = card.split('')
    arr = arr.map(function(elem, index) {
        return parseInt(elem)
    })
    for(var i = len - 2;i >= 0; i -= 2){
        var temp = arr[i] * 2
        arr[i] = temp > 9 ? temp - 9 : temp
    }
    var sum = 0
    arr.forEach(function(elem){
        sum += elem
    })
    if(sum%10 == 0){
        return true
    } else {
        return false
    }
}

//类似jquery的closest, 往上查找满足selector选择器的element
export const closest = (elem, selector) => {
    var curEl = elem
    var target = null
    while(!target && curEl){
        if(curEl.parentElement){
            target = curEl.parentElement.querySelector(selector)
        }
        if(target){
            break
        }
        curEl = curEl.parentElement
    }
    if(target && curEl == target){
        return target
    }
    return null
}

