// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一
// 问题。
// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

// 1 输入：["h","e","l","l","o"] 
// 2 输出：["o","l","l","e","h"]

function reverseString (arr) {
    for (let i=0; i< arr.length/2; i++) {
        [arr[arr.length-i-1],arr[i]] = [arr[i], arr[arr.length-i-1]]
    }
    return arr
}
function reverseString2 (arr) {
    for (let i=0; i< arr.length/2; i++) {
        let tem = arr[arr.length-i-1]
        arr[arr.length-i-1] = arr[i]
        arr[i] = tem
    }
    return arr
}

console.log(reverseString2(["h","e","l","l","o"]))
