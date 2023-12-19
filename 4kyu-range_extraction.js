function solution(list) {
  let storedInt = Infinity;
  let rangeFlag = false;
  let outputString = "";
  for (let i = 0; i < list.length; i++) {
    //If scanning range depth
    if (rangeFlag) {
      //If range is broken/the end is seen, print it.
      if (!(list[i] + 1 == list[i + 1])) {
        outputString =
          outputString + storedInt.toString() + "-" + list[i].toString() + ",";
        rangeFlag = false;
      }
      //If a range is detected, store the start and check the range
    } else if (list[i] + 1 == list[i + 1] && list[i + 1] + 1 == list[i + 2]) {
      storedInt = list[i];
      rangeFlag = true;
      //If it's a normal read, just print it out
    } else {
      outputString = outputString + list[i].toString() + ",";
    }
  }
  //Remove final comma before outputting value
  return outputString.substring(0, outputString.length - 1);
}
