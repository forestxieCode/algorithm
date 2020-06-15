// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 1 输入: s = "anagram", t = "nagaram" 2 输出: true

function isAnagram(x, y) {
   let Arrx = x.split('')
   let Arry = y.split('')
   const sortArr = (a, b) => a.charCodeAt() - b.charCodeAt()
   Arrx.sort(sortArr)
   Arry.sort(sortArr)
   return Arrx.join('') === Arry.join('')
}

let x = "anagram"
let y = "nagaram"

// 统计每个字母出现的个数
function isAnagram2 (x, y) {
    if (x.length !== y.length) {
        return false
    }
    
}

console.log(isAnagram(x, y))