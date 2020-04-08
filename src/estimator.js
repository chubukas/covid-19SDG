import impacts from './impact';
import severeImpacts from './severeImpact';

const covid19ImpactEstimator = (data) => {
  const { reportedCases, totalHospitalBeds } = data;

  const impact;
  const severeImpact;

  // IMPACT
  impact = impacts(reportedCases, totalHospitalBeds);

  // SEVEREIMPACT
  severeImpact = severeImpacts(reportedCases, totalHospitalBeds);

  return { impact, severeImpact, data };
};

export default covid19ImpactEstimator;
