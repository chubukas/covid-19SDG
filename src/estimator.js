const covid19ImpactEstimator = data => {
  const { reportedCases, totalHospitalBeds } = data;

  let impact = {},
    severeImpact = {};

  // let days = days / 3;
  // days = 2 ** days;

  // IMPACT
  impact.currentlyInfected = reportedCases * 10;
  impact.infectionsByRequestedTime = impact.currentlyInfected * 1024;
  impact.severeCasesByRequestedTime = impact.infectionsByRequestedTime * 0.15;

  // SEVEREIMPACT
  severeImpact.currentlyInfected = reportedCases * 50;
  severeImpact.infectionsByRequestedTime =
    severeImpact.currentlyInfected * 1024;
  severeImpact.severeCasesByRequestedTime =
    severeImpact.infectionsByRequestedTime * 0.15;

  return { impact, severeImpact, data };
};

console.log(covid19ImpactEstimator(data));

export default covid19ImpactEstimator;
