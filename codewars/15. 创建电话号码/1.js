//  Create Phone Number

const createPhoneNumber = (numbers) => {
    numbers = numbers.join("");
  return `(${numbers.substr(0,3)}) ${numbers.substr(3,3)}-${numbers.substr(6)}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))