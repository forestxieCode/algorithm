// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 说明：本题中，我们将空字符串定义为有效的回文串。
// 1 输入: "A man, a plan, a canal: Panama" 
// 2 输出: true

// 1 输入: "race a car" 
// 2 输出: false

function isPalindrome (s) {
    let i=0;
    s = s.toLocaleLowerCase().replace(/[^a-z0-9A-Z]/g, '')
    for(;i<s.length;i++){
        if(s[i] !== s[s.length - i - 1]){
            return false
        }
        if(i> (s.length-1)/2) return true
    }
}

function isPalindrome2 (s) {
    let i=0;
    s = s.toLocaleLowerCase().replace(/[^a-z0-9A-Z]/g, '')
    let newStr = s.toLocaleLowerCase().replace(/[^a-z0-9A-Z]/g, '').split('').reverse().join('')
    return s === newStr
}

console.log(isPalindrome2("A man, a plan, a canal: Panama"))