const impact = (
  reportedCases,
  totalHospitalBeds,
  periodType,
  timeToElapse,
  avgDailyIncomeInUSD,
  avgDailyIncomePopulation
) => {
  let factor;

  if (periodType === 'days') {
    factor = Math.trunc(timeToElapse / 3);
    factor = 2 ** factor;
  } else if (periodType === 'weeks') {
    factor = Math.trunc((timeToElapse * 7) / 3);
    factor = 2 ** factor;
  } else if (periodType === 'months') {
    factor = Math.trunc((timeToElapse * 30) / 3);
    factor = 2 ** factor;
  }
  const currentlyInfected = Math.round(reportedCases * 10);
  const infectionsByRequestedTime = Math.round(currentlyInfected * factor);
  const severeCasesByRequestedTime = Math.trunc(
    infectionsByRequestedTime * 0.15
  );
  const hospitalBedsByRequestedTime = Math.trunc(
    totalHospitalBeds * 0.35 - severeCasesByRequestedTime
  );
  const casesForICUByRequestedTime = Math.trunc(
    infectionsByRequestedTime * 0.05
  );
  const casesForVentilatorsByRequestedTime = Math.trunc(
    infectionsByRequestedTime * 0.02
  );
  const dollarsInFlight = infectionsByRequestedTime
    * avgDailyIncomePopulation * avgDailyIncomeInUSD * factor;

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
