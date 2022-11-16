function creatPhoneNumber (numbers) {
    //第一种
    // console.log("(" + numbers[0] + numbers[1] + numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9]);
    
    //第二种
    // console.log( `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`);

    //第三种
    const nums = numbers.join('');   //   nums = 1234567890
    // console.log(nums);
    console.log(`(${nums.substring(0,3)})${nums.substring(3,6)}-${nums.substring(6,10)}`);
}
// 需要输出(123) 456-789

creatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])


// let name = '刘文祥'
// let word = `hello, ${name}。`   //字符串模板
// console.log(word);