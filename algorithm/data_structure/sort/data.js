let messData = [
    // 234,546,8678,6,8,2,342,32,565,2,4,789,4234,234,563,342,678,34534,534,5,23123,9983,89,23,234,43,567,546,2,34,4567,876,345,234,
    // 534,9999999,234,5,6,123,6578,2341,123,45,678,890,1231,890,234123,12314543,5676978,234123,34435,234213,13456,809908
]
let i = 0;
let num = 100000; // 数据个数
let pow =6;    // 数据范围 10的 pow次方
while (i < num) {
    messData.push(Math.floor(Math.random().toFixed(pow) * 10**pow))
    i++
}
let param = {
    num,pow
}

module.exports = {
    messData,
    param
}