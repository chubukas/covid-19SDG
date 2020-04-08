import { data } from './data.js';
import impacts from './impact.js';
import severeImpacts from './severeImpact.js';

const covid19ImpactEstimator = data => {
  const { reportedCases, totalHospitalBeds } = data;

  let impact,
    severeImpact = {};

  // IMPACT
  impact = impacts(reportedCases, totalHospitalBeds);

  // SEVEREIMPACT
  severeImpact = severeImpacts(reportedCases, totalHospitalBeds);

  return { impact, severeImpact, data };
};

console.log(covid19ImpactEstimator(data));

export default covid19ImpactEstimator;
