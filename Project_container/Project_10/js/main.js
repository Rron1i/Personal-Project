const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherDiv = document.getElementById('weather');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city === '') {
    weatherDiv.innerHTML = '<p>Please enter a city name.</p>';
    return;
  }

  getWeather(city);
});

cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      searchBtn.click(); // Simulojmë klikimin e butonit
    }
  });
  

async function getWeather(city) {
  const url = `https://wttr.in/${city}?format=j1`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Could not fetch weather data');
    }

    const data = await response.json();

    // Të dhënat kryesore
    const area = data.nearest_area[0].areaName[0].value;
    const country = data.nearest_area[0].country[0].value;
    const tempC = data.current_condition[0].temp_C;
    const desc = data.current_condition[0].weatherDesc[0].value;

    weatherDiv.innerHTML = `
      <h2>Weather in ${area}, ${country}</h2>
      <p><strong>Temperature:</strong> ${tempC}°C</p>
      <p><strong>Description:</strong> ${desc}</p>
    `;

    saveRecentCity(city);

  } catch (error) {
    weatherDiv.innerHTML = '<p>Failed to load weather data. Try again later.</p>';
    console.error(error);
  }
}

function saveRecentCity(city) {
    let recentCities = JSON.parse(localStorage.getItem('recentCities')) || [];
  
    // Nëse qyteti ekziston, hiqe dhe shtoje në fillim
    recentCities = recentCities.filter(c => c.toLowerCase() !== city.toLowerCase());
    recentCities.unshift(city); // Shto në fillim
  
    // Mbaj vetëm 5 qytetet e fundit
    if (recentCities.length > 5) {
      recentCities = recentCities.slice(0, 5);
    }
  
    localStorage.setItem('recentCities', JSON.stringify(recentCities));
    showRecentCities();
  }
  
  function showRecentCities() {
    const recentDiv = document.getElementById('recent');
    const recentCities = JSON.parse(localStorage.getItem('recentCities')) || [];
  
    recentDiv.innerHTML = '';
  
    recentCities.forEach(city => {
      const btn = document.createElement('button');
      btn.textContent = city;
      btn.style.margin = '5px';
      btn.addEventListener('click', () => getWeather(city));
      recentDiv.appendChild(btn);
    });
  }




showRecentCities();

  
