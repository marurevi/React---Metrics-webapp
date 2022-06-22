/* CONTINENTS */
const URL = 'https://disease.sh/v3/covid-19/continents';
const URLcountry = 'https://disease.sh/v3/covid-19/countries/';

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

const getApiDataCountry = async (country) => {
  const URLCountry = URLcountry.concat(`${country}`, '?strict=true');
  let dataCountry;
  await fetch(URLCountry)
    .then((response) => response.json())
    .then((data) => {
      dataCountry = {
        id: data.countryInfo.iso3,
        // flag: data.countyInfo.flag,
        cases: data.cases,
        deaths: data.deaths,
        recovered: data.recovered,
        active: data.active,
        critical: data.critical,
        casesPerOneMillion: data.casesPerOneMillion,
        deathsPerOneMillion: data.deathsPerOneMillion,
        tests: data.tests,
        testsPerOneMillion: data.testsPerOneMillion,
        population: data.population,
        continent: data.continent,
        oneCasePerPeople: data.oneCasePerPeople,
        oneDeathPerPeople: data.oneDeathPerPeople,
        oneTestPerPeople: data.oneTestPerPeople,
        activePerOneMillion: data.activePerOneMillion,
        recoveredPerOneMillion: data.recoveredPerOneMillion,
        criticalPerOneMillion: data.criticalPerOneMillion,
      };
    });
  return dataCountry;
};
// console.log(getApiDataCountry('Brazil'));
export { getAllContinents, getApiDataCountry };
