const solution = (start, finish, difference = finish - start) => Math.floor(difference / 3) + difference % 3;

console.log(solution(1,8))