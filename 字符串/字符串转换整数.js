// 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。
// 当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起
// 来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起
// 来，形成整数。
// 该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数
// 不应该造成影响。
// 注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空
// 白字符时，则你的函数不需要进行转换。
// 在任何情况下，若函数不能进行有效的转换时，请返回 0。

// 输入: "4193 with words"  输出: 4193
// 输入: "-42" 2 输出: -42

function myAtoi (str) {
  const result = str.trim().match(/^(-|\+)?\d+/g)
  return result
    ? Math.max(Math.min(result[0],Math.pow(2,31)-1), -Math.pow(2,31))
    : 0
}

function returnNum(num) {
  if(num >= - Math.pow(2,31)&& num <= Math.pow(2,31) -1 ) {
    return num
  } else {
    return x > 0 ? Math.pow(2, 31) - 1 : - Math.pow(2, 31)
  }
}

function myAtoi2 (str) {
  const news = str.trim()
  if (parseInt(news)) {
    return returnNum(parseInt(news))
  } else {
    return 0
  }
}



console.log(myAtoi('-193 with words'))