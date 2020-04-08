import { data } from './data.js';
const covid19ImpactEstimator = data => {
  const { reportedCases, totalHospitalBeds } = data;

  let impact = {},
    severeImpact = {};

  // let days = days / 3;
  // days = 2 ** days;

  // IMPACT
  impact.currentlyInfected = Math.round(reportedCases * 10);
  impact.infectionsByRequestedTime = Math.round(
    impact.currentlyInfected * 1024
  );
  impact.severeCasesByRequestedTime = Math.round(
    impact.infectionsByRequestedTime / 0.15
  );
  impact.hospitalBedsByRequestedTime = Math.round(totalHospitalBeds * 0.35);
  impact.casesForICUByRequestedTime = Math.round(
    impact.infectionsByRequestedTime / 0.05
  );

  // SEVEREIMPACT
  severeImpact.currentlyInfected = Math.round(reportedCases * 50);
  severeImpact.infectionsByRequestedTime = Math.round(
    severeImpact.currentlyInfected * 1024
  );
  severeImpact.severeCasesByRequestedTime = Math.round(
    severeImpact.infectionsByRequestedTime * 0.15
  );
  severeImpact.hospitalBedsByRequestedTime = Math.round(
    totalHospitalBeds / 0.35
  );
  severeImpact.casesForICUByRequestedTime = Math.round(
    severeImpact.infectionsByRequestedTime * 0.05
  );

  return { impact, severeImpact, data };
};

console.log(covid19ImpactEstimator(data));

export default covid19ImpactEstimator;
