const darthVader = new XMLHttpRequest();
darthVader.open('GET', "https://swapi.co/api/people/4/");
darthVader.send();


darthVader.addEventListener('load', function () {
  const parseDarthVader = JSON.parse(this.responseText);
  document.getElementById('person4Name').innerHTML = parseDarthVader.name;

});

const darthVaderHome = new XMLHttpRequest();
darthVaderHome.open('GET', "https://swapi.co/api/planets/1/");
darthVaderHome.send();

darthVaderHome.addEventListener('load', function () {
  const parseDarthVaderHome = JSON.parse(this.responseText);
  document.getElementById('person4HomeWorld').innerHTML = 'from ' + parseDarthVaderHome.name;
})

const hanSolo = new XMLHttpRequest();
hanSolo.open('GET', "https://swapi.co/api/people/14");
hanSolo.send();

hanSolo.addEventListener('load', function () {
  const parseHanSolo = JSON.parse(this.responseText);
  document.getElementById('person14Name').innerHTML = parseHanSolo.name;
})

const hanSoloSpecies = new XMLHttpRequest();
hanSoloSpecies.open('GET', "https://swapi.co/api/species/1");
hanSoloSpecies.send();

hanSoloSpecies.addEventListener('load', function () {
  const parseHanSoloSpecies = JSON.parse(this.responseText);
  document.getElementById('person14Species').innerHTML = 'is a ' + parseHanSoloSpecies.name;
})

const getFilmList = new XMLHttpRequest();
getFilmList.open('GET', "https://swapi.co/api/films/");
getFilmList.send();


getFilmList.addEventListener('load', function () {
  const parseFilmList = JSON.parse(this.responseText);
  const filmList = document.getElementById('filmList');
  
  for (let i = 0; i < parseFilmList.results.length; i++) {
    
    const newFilm = document.createElement('li');
    newFilm.className = 'film';
    filmList.appendChild(newFilm);
    
    const filmHeader = document.createElement('h2');
    newFilm.appendChild(filmHeader);
    filmHeader.innerHTML = parseFilmList.results[i].title;

    const planetHeader = document.createElement('h3');
    planetHeader.innerHTML = 'Planets';
    newFilm.appendChild(planetHeader);
    
    const planetList = document.createElement('ul');
    planetList.className = 'filmPlanets';
    
    for (let j = 0; j < parseFilmList.results[i].planets.length; j++){
      const getPlanetList = new XMLHttpRequest();
      getPlanetList.open('GET', parseFilmList.results[i].planets[j]);
      getPlanetList.send();

      getPlanetList.addEventListener('load', function () {
        const parsePlanetList = JSON.parse(this.responseText);
        const newPlanet = document.createElement('li');
        newPlanet.className = 'planet';
        newFilm.appendChild(newPlanet);
        newPlanet.innerHTML = parsePlanetList.name;
      })
    }
  }
})




