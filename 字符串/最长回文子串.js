// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
// 1 输入: "babad" 2 输出: "bab" 3 注意: "aba" 也是一个有效答案。

function longestPalindrome (s) {
  let db = []
  let max = 0 
  let j=0
  let str = ''
  for(let i=0;i<s.length;i++) {
    db[i] = []
  }
  for(let l=0;l<s.length;l++){
    for(let i = 0; i+j<s.length; i++){
      j = i+l
      if(l == 0){
        db[i][j] = true
      } else if(l<=2) {
        if(s[i] == s[j]) {
          db[i][j] = true
        } else {
          db[i][j] = false
        }
      } else {
        if(s[i] == s[j] && db[i+1][j-1]){
          db[i][j] = true
        } else {
          db[i][j] = false
        }
      }
      if(db[i][j] && l>max) {
        max = l
        str = s.substring(i,j+1)
      }
    }
   }
   return str
}

function longestPalindrome2 (s) {
  let start =0;
  let end = 0;
  const exportFromCenter = (left, right, s) => {
    while(left >= 0 && right < s.length && s[left] === s[right]){
      left = left - 1
      right = right  + 1
    }
    return right - left - 1
  }
  for(let i=0; i<s.length; i++) {
     let len1 = exportFromCenter(i,i,s)
     let len2 = exportFromCenter(i,i+1,s)
     
     let len = Math.max(len1, len2)

     if(len >= end - start) {
       start = i - Math.floor((len-1) / 2)
       end = i + Math.floor(len / 2)
     }
  }
  return s.substring(start, end+1)
}
console.log(longestPalindrome2("babad"))