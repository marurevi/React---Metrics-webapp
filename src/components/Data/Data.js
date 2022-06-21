/* CONTINENTS */
const URL = 'https://disease.sh/v3/covid-19/continents';

const getAllContinents = async () => {
  const continents = [];
  await fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      result.map((continent) => (
        continents.push({
          id: continent.continent,
          continent: continent.continent,
          cases: continent.cases,
          todayCases: continent.todayCases,
          deaths: continent.deaths,
          todayDeaths: continent.todayDeaths,
          recovered: continent.recovered,
          todayRecovered: continent.todayRecovered,
          active: continent.active,
          critical: continent.critical,
          tests: continent.tests,
          population: continent.population,
          continentInfo: {
            lat: continent.continentInfo.lat,
            long: continent.continentInfo.long,
          },
          countries: continent.countries,
        })));
    });
  return continents;
};

export default getAllContinents;
