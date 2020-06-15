// 翻转整数、有效的字母异位词和翻转整数

// 示例 1: 23 输入: 123 4 输出: 321 5 示例 2: 67 输入: -123 8 输出: -321 9 示例 3: 1011 输入: 120 12 输出: 21

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31, 2^31 − 1]。请根据这个
// 假设，如果反转后整数溢出那么就返回 0。

// 方式一
function reverse(x) {
    if (!typeof x === 'number') {
       return 
    }
    const MAX = 2147483647
    const MIN = -2147483648
    
    const rest =  x > 0 ? 
                  new String(x)
                  .split('')
                  .reverse()
                  .join('') :
                  new String(x)
                  .slice(1)
                  .split('')
                  .reverse()
                  .join('')
    const result = x > 0 ? parseInt(rest, 10) : parseInt(0 - rest, 10)

    if (result>=MIN && result <= MAX) {
        return result
    }
    return 0
}
// 方式二
function reverse2(x) {
    if (!typeof x === 'number') {
        return
    }
    let num = Math.abs(x)
    const MAX = 2147483647
    const MIN = -2147483648
    let sum = 0 

    while (num != 0) {
        sum = (num % 10) + (sum * 10)
        num = Math.floor(num / 10)
    }

    if (sum < MIN || sum > MAX) {
        return 0
    }

    if(x < 0) return sum * -1
    return sum
}


console.log(reverse2(-3333121))
