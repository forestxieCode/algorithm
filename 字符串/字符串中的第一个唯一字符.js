// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
// 1 s = "leetcode" 
// 2 返回 0
// 4 s = "loveleetcode", 
// 5 返回 2.

function firstUniqChar (s) {
    for (let i=0;i<s.length; i+=1) {
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i
        }
    }
    return -1
}
function firstUniqChar1 (s) {
    let hash = {}
    for (let i=0; i< s.length; i++) {
        hash[s[i]] ? hash[s[i]] += 1 : hash[s[i]] = 1 
    }
    for (let i=0;i<s.length;i++) {
        if(hash[i]===1)
        return i
    }
    return -1
}

console.log(firstUniqChar("loveleetcode"))
