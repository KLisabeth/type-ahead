function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities); //will display what it matches
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi'); // will find what ever it match and will highlight it
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); 
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span> 
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  const suggestions = document.querySelector('.suggestions');
  suggestions.innerHTML = html;
}