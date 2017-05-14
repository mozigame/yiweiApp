
//六合彩生肖，转换生肖编码到中文生肖
export const lhcsx = (value) => {
    var data = ["鼠", "虎", "龙", "马", "猴", "狗", "牛", "兔", "蛇", "羊", "鸡", "猪"]
    var cdata = ["shu","hu","long","ma","hou","gou","niu","tu","she","yang","ji","zhu"]
    var ind = cdata.indexOf(value+"")
    return data[ind]
}

//大小单双
export const dxds = (value) => {
    var data = ["大", "小", "单", "双"]
    var cdata = ["9","1","3","2"]
    var ind = cdata.indexOf(value+"")
    return data[ind]
}

export const sscleak = (value, type, leaks) => {
    if(!value || !type || !leaks || leaks.length < 1){
        return ''
    }
    var result = ''
    switch (type) {
        case "wan":
            result = leaks[0][value]
            break;
        case "qian":
            result = leaks[1][value]
            break;
        case "bai":
            result = leaks[2][value]
            break;
        case "shi":
            result = leaks[3][value]
            break;
        case "ge":
            result = leaks[4][value]
            break;    
        default:
            break;
    }
    return result
}