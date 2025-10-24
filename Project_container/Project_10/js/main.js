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

    // pjesa per dillin
            if (desc.includes("rain") || desc.includes("storm")) {
          sun.style.background = 'radial-gradient(circle at center, #4A90E2, #2C3E50)';
          sun.style.boxShadow = '0 0 20px rgba(74, 144, 226, 0.5)';
        } else if (desc.includes("snow")) {
          sun.style.background = 'radial-gradient(circle at center, #E0F7FA, #B2EBF2)';
          sun.style.boxShadow = '0 0 20px rgba(224, 247, 250, 0.5)';
        } else if (desc.includes("cloud")) {
          sun.style.background = 'radial-gradient(circle at center, #D3D3D3, #A9A9A9)'
          sun.style.boxShadow = '0 0 20px rgba(169, 169, 169, 0.5)';
        } else {
          sun.style.background = 'radial-gradient(circle at center, #FFD700, #FFA500)';
          sun.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
        }

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

  

const sun = document.getElementById('sun');
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;

    document.addEventListener('mousemove', (e) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const speed = Math.min(0.3 + distance / 100, 1);

      lastX += dx * speed;
      lastY += dy * speed;

      sun.style.left = `${lastX}px`;
      sun.style.top = `${lastY}px`;
    });

