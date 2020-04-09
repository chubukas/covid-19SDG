import impacts from './impact';
import severeImpacts from './severeImpact';

const covid19ImpactEstimator = (data) => {
  const
    { reportedCases,
      totalHospitalBeds,
      timeToElapse,
      periodType
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

  return { impact, severeImpact, data };
};

export default covid19ImpactEstimator;
