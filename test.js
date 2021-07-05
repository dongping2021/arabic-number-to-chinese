var data = [
    [0, '零'],
    [1, '一'],
    [2, '二'],
    [3, '三'],
    [4, '四'],
    [5, '五'],
    [6, '六'],
    [7, '七'],
    [8, '八'],
    [9, '九'],
    [10, '十'],
    [11, '十一'],
    [12, '十二'],
    [20, '二十'],
    [21, '二十一'],
    [29, '二十九'],
    [50, '五十'],
    [99, '九十九'],
    [100, '一百'],
    [101, '一百零一'],
    [102, '一百零二'],
    [110, '一百一十'],
    [111, '一百一十一'],
    [123, '一百二十三'],
    [999, '九百九十九'],
    [1000, '一千'],
    [1001, '一千零一'],
    [1010, '一千零一十'],
    [1011, '一千零一十一'],
    [1111, '一千一百一十一']


];

for(var i = 0,len = data.length; i<len; i++) {
    var item = data[i];

    var n = item[0], expectResult = item[1];

    var realResult;
    if((realResult = window.araToCh(n)) !== expectResult) {
        throw new Error('number: ' + n + ', expect result is: ' + expectResult + ', but got: ' + realResult );
    }
}

console.log('successfully!');