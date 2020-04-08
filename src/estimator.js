import impacts from './impact';
import severeImpacts from './severeImpact';

const covid19ImpactEstimator = (data) => {
  const { reportedCases, totalHospitalBeds } = data;

  // IMPACT
  const impact = impacts(reportedCases, totalHospitalBeds);

  // SEVEREIMPACT
  const severeImpact = severeImpacts(reportedCases, totalHospitalBeds);

  return { impact, severeImpact, data };
};

export default covid19ImpactEstimator;
