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
      searchBtn.click(); // njejt si klikimin e butonit
    }
  });
  

function updateBackground(desc) {
  // pjesa per background me animacion
  // Remove existing weather classes
  document.body.classList.remove('weather-rain', 'weather-snow', 'weather-cloud', 'weather-sunny');

  if (desc.includes("rain") || desc.includes("storm")) {
    document.body.classList.add('weather-rain');
  } else if (desc.includes("snow")) {
    document.body.classList.add('weather-snow');
  } else if (desc.includes("cloud")) {
    document.body.classList.add('weather-cloud');
  } else {
    document.body.classList.add('weather-sunny');
  }
  
}

async function getWeather(city) {
  const url = `https://wttr.in/${city}?format=j1`;
 weatherDiv.innerHTML = '<p>Loading...</p>'; // mesazh ngarkimi
  // perdor fetch per te marre te dhenat nga API

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Could not fetch weather data');
    }

        const data = await response.json();

        const area = data.nearest_area[0].areaName[0].value;
        const country = data.nearest_area[0].country[0].value;
        const tempC = data.current_condition[0].temp_C;
        const desc = data.current_condition[0].weatherDesc[0].value.toLowerCase();
        let icon = "🌥️";

        if (desc.includes("sun")) icon = "☀️";
        else if (desc.includes("cloud")) icon = "☁️";
        else if (desc.includes("rain")) icon = "🌧️";
        else if (desc.includes("snow")) icon = "❄️";
        else if (desc.includes("storm")) icon = "⛈️";
        else if (desc.includes("fog")) icon = "🌫️";

    weatherDiv.innerHTML = `
                              <h2>Weather in ${area}, ${country}</h2>
                              <p><strong>Description:</strong> ${icon} ${desc}</p>
                              <p><strong>Temperature:</strong> ${tempC}°C</p>
                            `;

    updateBackground(desc);

    saveRecentCity(city);

  } catch (error) {
    weatherDiv.innerHTML = '<p>Failed to load weather data. Try again later.</p>';
    console.error(error);
  }
}

function saveRecentCity(city) {
    let recentCities = JSON.parse(localStorage.getItem('recentCities')) || [];
  
    // Nese qyteti ekziston, hiqe dhe shtoje në fillim
    recentCities = recentCities.filter(c => c.toLowerCase() !== city.toLowerCase());
    recentCities.unshift(city); // Shto në fillim
  
    // Maj veq 5 qytetet e fundit
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

  

const sun = document.getElementById('sun');
let currentX = window.innerWidth / 2;
let currentY = window.innerHeight / 2;
let targetX = currentX;
let targetY = currentY;

function animate() {
  const lerpFactor = 0.10; // Adjust for smoothness/speed
  currentX += (targetX - currentX) * lerpFactor;
  currentY += (targetY - currentY) * lerpFactor;

  sun.style.left = `${currentX}px`;
  sun.style.top = `${currentY}px`;

  requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

animate();

