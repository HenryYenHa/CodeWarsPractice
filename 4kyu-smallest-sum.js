function solution(numbers) {
  let factorList = [];
  let fListIndex = 0;
  for (let i = 1; i < numbers[0]; i++) {
    if (numbers[0] % i == 0) {
      factorList[fListIndex] = i;
      fListIndex++;
    }
  }
  for (num of numbers) {
    for (factor of factorList) {
      if (factorList.length == 1) {
        console.log("primedOutnow");
        return numbers.length;
      }
      if (num % factor != 0) {
        console.log("removed: ", +factor, factorList);
        factorList.splice(factorList.indexOf(factor), 1);
      }
    }
  }
  return factorList.pop() * numbers.length;
}

console.log("THEEND:", solution([999, 6, 9, 21]));
