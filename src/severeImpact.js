const severeImpact = (reportedCases, totalHospitalBeds) => {
  let currentlyInfected = Math.round(reportedCases * 50);
  let infectionsByRequestedTime = Math.round(currentlyInfected * 1024);
  let severeCasesByRequestedTime = Math.round(infectionsByRequestedTime * 0.15);
  let hospitalBedsByRequestedTime = Math.round(totalHospitalBeds / 0.35);
  let casesForICUByRequestedTime = Math.round(infectionsByRequestedTime * 0.05);
  let casesForVentilatorsByRequestedTime = Math.round(
    infectionsByRequestedTime * 0.02
  );
  let dollarsInFlight = Math.round(infectionsByRequestedTime * 0.71 * 5 * 30);

  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
};

export default severeImpact;
