const sampleProjectInfo = [[timeslot1], [timeslot2], [timeslot3], [timeslot4]];
const sampleTimeslot = [[workPackage1], [workPackage2], [workPackage3]];
const sampleWorkpackage = [[bid1], [bid2], [bid3]];
const sampleBid = {
  id: 1239847,
  value: 30000,
  isEstimate: false,
  estimateAccuracy: 0.2,
  payday: 1 / 1 / 2021,
};
// Main function to go through the project
function mvpSuperAlgorithm(projectInfo, initialAmount, currentInterestRate) {
  let selectedJobsList = [];
  //For every project...
  projectInfo.forEach((timeSlot) => {
    //...for each timeslot...
    timeSlot.forEach((workPackage) => {
      let minimum = Infinity;
      let minID = "";
      workPackage.forEach((bid) => {
        if (trueValue(bid) < minimum) {
          minimum = trueValue(bid);
          minID = bid.id;
        }
      });
      //... push selectedJobList's cheapest job.
      selectedJobsList.push({ minimum });
    });
  });
}

//Sub-function that determines a bid's true cost
function trueValue(bid) {
  if (bid.isEstimate === true) {
    return bid.value * (1 + estimateAccuracy);
  } else {
    return bid.value;
  }
}
