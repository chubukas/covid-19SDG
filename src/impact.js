const impact = (reportedCases, totalHospitalBeds, periodType, timeToElapse) => {
  let factor;

  if ((periodType = 'days')) {
    factor = Math.trunc(timeToElapse / 3);
    factor = 2 ** factor;
  }

  if ((periodType = 'weeks')) {
    factor = Math.trunc((timeToElapse * 7) / 3);
    factor = 2 ** factor;
  }

  if ((periodType = 'months')) {
    factor = Math.trunc((timeToElapse * 30) / 3);
    factor = 2 ** factor;
  }
  const currentlyInfected = Math.round(reportedCases * 10);
  const infectionsByRequestedTime = Math.round(currentlyInfected * factor);
  const severeCasesByRequestedTime = Math.round(
    infectionsByRequestedTime / 0.15
  );
  const hospitalBedsByRequestedTime = Math.round(totalHospitalBeds * 0.35);
  const casesForICUByRequestedTime = Math.round(
    infectionsByRequestedTime / 0.05
  );
  const casesForVentilatorsByRequestedTime = Math.round(
    infectionsByRequestedTime / 0.02
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

export default impact;
