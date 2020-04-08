const severeImpact = (reportedCases, totalHospitalBeds) => {
  const currentlyInfected = Math.round(reportedCases * 50);
  const infectionsByRequestedTime = Math.round(currentlyInfected * 1024);
  const severeCasesByRequestedTime = Math.round(
    infectionsByRequestedTime * 0.15
  );
  const hospitalBedsByRequestedTime = Math.round(totalHospitalBeds / 0.35);
  const casesForICUByRequestedTime = Math.round(
    infectionsByRequestedTime * 0.05
  );
  const casesForVentilatorsByRequestedTime = Math.round(
    infectionsByRequestedTime * 0.02
  );
  const dollarsInFlight = Math.round(infectionsByRequestedTime * 0.71 * 5 * 30);

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
