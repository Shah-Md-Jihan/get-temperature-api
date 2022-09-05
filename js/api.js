// api keys 
const key = `1400ee16c9c9d09bfba07e3dcd8a6a77`;

const loadTemperature = city => {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    fetch(api_url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = data => {
    setInnerText('temperature', data.main.temp);
    setInnerText('condition', data.weather[0].main);
    setInnerText('country', data.sys.country);
    setInnerText('city', data.name);
    console.log(data);
}
const setInnerText = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}
document.getElementById('search_button').addEventListener('click', function () {
    const searchField = document.getElementById('search_field');
    const city = searchField.value;
    searchField.value = '';
    // document.getElementById('city').innerText = city;
    loadTemperature(city);
});
loadTemperature('dhaka');