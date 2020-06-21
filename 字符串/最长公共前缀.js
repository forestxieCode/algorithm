// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 1 输入: ["flower","flow","flight"] 
// 2 输出: "fl"

function longestCommonPrefix(arr) {
    function commonPrefix (strOne, strTwo) {
        if (!strOne)  return strTwo
        if (!strTwo)  return strOne
        let i=0;
        for(;i<strOne.length;i++){
            if(strOne[i] !== strTwo[i]) break
        }
        return i>0 ? strOne.substring(0,i) : ''
    }
    let j=0
    let str = ''
    while(j<arr.length) {
        str = commonPrefix(str, arr[j])
        j++
    }
    return str
}
console.log(longestCommonPrefix(["flower","flow","flight"]))
