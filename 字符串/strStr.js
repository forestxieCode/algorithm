// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的
// 第一个位置 (从0开始)。如果不存在，则返回 -1。

// 1 给定 haystack = 'hello world', needle = 'll' 

// 2 返回2
function strStr(haystack, needle) {
    let hayLen = haystack.length
    let nedLen = needle.length
    if(!nedLen) {
        return 0
    } else if(nedLen > hayLen) {
        return -1
    } else if(nedLen === hayLen) {
        return haystack === needle
    } else {
      for(let i=0; i<=hayLen-nedLen; i++) {
        if (haystack[i] !== needle[0]) continue
        if (haystack.substring(i, i + nedLen) === needle){
            return i
        }
      }   
    }
    return -1   
}

console.log(strStr('hello world', 'll'))