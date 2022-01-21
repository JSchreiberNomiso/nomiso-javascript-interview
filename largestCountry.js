// Find the country with the highest population programmatically
// Use foreign key ids to determine the country with the highest population
// console.log the name of the country with the highest total population

// Example Data:
// const countries = [
//   { id: 4, name: 'New Zealand' },
//   { id: 1, name: 'USA' },
//   { id: 2, name: 'England' },
// ];

// const cities = [
//   { id: 3, country_id: 1, name: 'Los Angeles' },
//   { id: 8, country_id: 3, name: 'Moscow' },
//   { id: 2, country_id: 1, name: 'Seattle' },
//   { id: 5, country_id: 1, name: 'San Diego' },
//   { id: 7, country_id: 2, name: 'Manchester' },
// ];

// const populations = [
//   { id: 3, city_id: 3, amount: 3967000 },
//   { id: 8, city_id: 8, amount: 11920000 },
//   { id: 7, city_id: 7, amount: 553230 },
//   { id: 2, city_id: 2, amount: 724305 },
//   { id: 5, city_id: 5, amount: 1410000 },
// ];

const largestCountry = (countries, cities, populations) => {
  return { name: 'ToBeDecided', population: 0 };
};

module.exports = largestCountry;
