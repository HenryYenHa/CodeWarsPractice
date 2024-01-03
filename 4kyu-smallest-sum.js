function solution(numbers) {
  console.log("START:", numbers);
  let factorList = [1];
  let fListIndex = 1;
  for (let i = 2; i < numbers[0] + 1; i++) {
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
      if (factor > num) {
        console.log("removed: ", +factor, factorList);
        factorList.splice(factorList.indexOf(factor), 1);
      }
      if (num % factor != 0) {
        console.log("removed: ", +factor, factorList);
        factorList.splice(factorList.indexOf(factor), 1);
      }
    }
  }
  console.log("final: ", factorList, numbers.length);
  return factorList.pop() * numbers.length;
}

console.log("THEEND:", solution([999, 6, 9, 21]));
