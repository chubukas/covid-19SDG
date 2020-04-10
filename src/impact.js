const impact = (
  reportedCases,
  totalHospitalBeds,
  periodType,
  timeToElapse,
  avgDailyIncomeInUSD,
  avgDailyIncomePopulation
) => {
  let factor, days;

  if (periodType === 'days') {
    factor = Math.trunc(timeToElapse / 3);
    factor = 2 ** factor;
    days = timeToElapse;
  } else if (periodType === 'weeks') {
    factor = Math.trunc((timeToElapse * 7) / 3);
    factor = 2 ** factor;
    days = Math.trunc(timeToElapse * 7)
  } else if (periodType === 'months') {
    factor = Math.trunc((timeToElapse * 30) / 3);
    factor = 2 ** factor;
    days = Math.trunc(timeToElapse * 30);
  }
  const currentlyInfected = Math.trunc(reportedCases * 10);
  const infectionsByRequestedTime = Math.trunc(currentlyInfected * factor);
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
  const dollarsInFlight = Math.trunc(
    (infectionsByRequestedTime
      * avgDailyIncomePopulation
      * avgDailyIncomeInUSD)
    / days
  );

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

module.exports = impact;
