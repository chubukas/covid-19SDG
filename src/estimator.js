import impacts from './impact';
import severeImpacts from './severeImpact';

const covid19ImpactEstimator = (data) => {
  const {
    reportedCases,
    totalHospitalBeds,
    timeToElapse,
    periodType
  } = data;

  // IMPACT
  const impact = impacts(
    reportedCases,
    totalHospitalBeds,
    periodType,
    timeToElapse
  );

  // SEVEREIMPACT
  const severeImpact = severeImpacts(
    reportedCases,
    totalHospitalBeds,
    periodType,
    timeToElapse
  );

  return { impact, severeImpact, data };
};

export default covid19ImpactEstimator;
