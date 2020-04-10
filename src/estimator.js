
const impacts = require('./impact');
const severeImpacts = require('./severeImpact');

const covid19ImpactEstimator = (data) => {
  const {
    reportedCases,
    totalHospitalBeds,
    timeToElapse, periodType
  } = data;

  const {
    avgDailyIncomeInUSD,
    avgDailyIncomePopulation 
  } = data.region;
  // IMPACT
  const impact = impacts(
    reportedCases,
    totalHospitalBeds,
    periodType,
    timeToElapse,
    avgDailyIncomeInUSD,
    avgDailyIncomePopulation
  );

  // SEVEREIMPACT
  const severeImpact = severeImpacts(
    reportedCases,
    totalHospitalBeds,
    periodType,
    timeToElapse,
    avgDailyIncomeInUSD,
    avgDailyIncomePopulation
  );

  return {  data, impact, severeImpact };
};

module.exports = covid19ImpactEstimator;
