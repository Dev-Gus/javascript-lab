# 🌤️ Weather App

A modern, responsive weather application that fetches real-time weather data with professional error handling, retry logic, and a beautiful UI. Built with vanilla JavaScript, this project demonstrates async/await patterns, API integration, and user-centric error handling.

## ✨ Features

- 🌍 **Real-time Weather Data** — Search any city and get current temperature, wind speed, and local time
- 📱 **Fully Responsive** — Mobile-first design that works perfectly on phones, tablets, and desktops
- 🔄 **Smart Retry Logic** — When errors occur, retry with edited input or the original search
- ❌ **Professional Error Handling** — User-friendly error messages that guide users to solutions
- ⏱️ **Request Timeout Protection** — API calls that exceed 10 seconds fail gracefully
- 💾 **Persistent Storage** — App remembers your last searched city using localStorage
- 🎨 **Beautiful Spinner** — Modern SVG loading animation that feels polished and professional
- ⌨️ **Keyboard Support** — Press Enter to search, improving accessibility and user experience

## 🎯 Live Demo

**[Try it live on Netlify](https://weather-app-junior.netlify.app)** *(Coming soon — will deploy after final polish)*

### Screenshots

**Mobile View** — Responsive and touch-friendly  
**Desktop View** — Full-featured with spacious layout  
**Error Handling** — Clear messages with retry button  

## 🛠️ Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | HTML, CSS, JavaScript (Vanilla) | No frameworks = focus on core JavaScript skills |
| **API** | [Open-Meteo](https://open-meteo.com/) | Free, no API key required, reliable |
| **Architecture** | Modular ES6 Modules | Clean separation: API, UI, Controller logic |
| **Deployment** | Netlify | One-click deployment, CI/CD ready |

## 📚 What I Learned

This project taught me professional JavaScript development practices:

- **Async/Await & Promises** — Handling multiple API calls with proper error propagation
- **Error Handling Strategy** — Mapping technical errors to user-friendly messages
- **Timeout Logic** — Protecting users from hanging requests with Promise.race()
- **Responsive Design** — Mobile-first CSS with media queries for all screen sizes
- **State Management** — Storing and managing "last attempted city" for retry functionality
- **User Experience** — Keeping error messages visible until user takes action (not clearing on keystroke)
- **Code Organization** — Separating concerns: API calls, UI updates, business logic
- **DOM Manipulation** — Managing loading states, visibility classes, and animations with vanilla JS

## 🚀 Getting Started

### Prerequisites

- **Browser** with ES6 module support (Chrome, Firefox, Safari, Edge)
- **Optional:** Live Server extension for VS Code, or Python for local server

### Installation

```bash
# Clone the repository (when on GitHub)
git clone https://github.com/yourusername/weather-app.git
cd weather-app

# Or download and extract the ZIP file
```

### Running Locally

**Option 1: VS Code Live Server (Easiest)**
1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → "Open with Live Server"
3. Browser opens automatically at `http://localhost:5500`

**Option 2: Python (Built-in on Mac/Linux)**
```bash
# Navigate to the weather-app folder
cd weather-app

# Start a local server
python -m http.server 8000

# Open browser to http://localhost:8000
```

**Option 3: Node.js HTTP Server**
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Run in the weather-app directory
http-server

# Open http://localhost:8080
```

## 📖 How to Use

1. **Enter a city name** in the input field
2. **Click "Get Weather"** or press **Enter**
3. **Loading spinner appears** while fetching data
4. **Weather data displays** (temperature, wind speed, time)
5. **App saves your search** — next time you open the app, it loads that city's weather
6. **On error:** Click **Retry** to try again, or edit the city name and search

### Error Scenarios

| Error | Message | What to Do |
|-------|---------|-----------|
| Invalid city name | "🏙️ City not found. Please check the spelling and try again." | Fix the spelling |
| No internet | "📡 No internet connection. Please check your connection and try again." | Check WiFi/connection |
| API timeout | "Request timeout. Please check your connection and try again." | Retry or wait a moment |
| Empty input | "✏️ Please enter a valid city name." | Type a city name |

## 🏗️ Project Structure

```
weather-app/
├── index.html          # HTML structure
├── style.css           # Responsive styles (mobile-first)
├── js/
│   ├── app.js          # Entry point, initializes app
│   ├── controller.js   # Business logic & error handling
│   ├── api.js          # API calls (geolocation & weather)
│   ├── ui.js           # DOM manipulation & state management
│   └── utils.js        # Helper functions (time formatting)
└── README.md           # This file
```

### How Pieces Talk to Each Other

```
User Action (click button)
    ↓
controller.js (handleWeatherRequest)
    ↓
api.js (getCoordinates → getWeatherData)
    ↓
Open-Meteo API (returns JSON)
    ↓
controller.js (renderWeather)
    ↓
ui.js (updateWeatherUI)
    ↓
Browser displays weather
```

## 🔮 Future Improvements

These features would make the app even better (planned for next iterations):

- **5-Day Forecast** — Show upcoming weather predictions
- **Extended Metrics** — Display humidity, UV index, "feels like" temperature
- **Weather Icons** — Match weather conditions to icons (sunny ☀️, rainy 🌧️, etc.)
- **Dark Mode** — Toggle between light and dark themes
- **Favorite Cities** — Save multiple cities for quick access
- **Temperature Units** — Toggle between Celsius and Fahrenheit
- **Geolocation** — Auto-detect user's location on first load
- **Unit Tests** — Jest tests for API calls and error handling
- **PWA Features** — Offline support and installability

## 🧪 Testing

To test error scenarios:

**Test 1: Invalid City**
```
Input: "Londondess" (typo)
Expected: "🏙️ City not found" error with retry button
```

**Test 2: Responsive Design**
```
- Resize browser to 375px (mobile)
- Resize to 768px (tablet)
- Resize to 1440px (desktop)
Expected: Layout adapts perfectly at each breakpoint
```

**Test 3: Retry Logic**
```
1. Search "Londondess"
2. Get error
3. Edit input to "London"
4. Click Retry
Expected: Searches for "London", not "Londondess"
```

**Test 4: Persistent Storage**
```
1. Search "Paris"
2. Close browser tab
3. Reopen website
Expected: Weather for "Paris" loads automatically
```

## 📋 Browser Support

- ✅ Chrome 55+
- ✅ Firefox 52+
- ✅ Safari 10.1+
- ✅ Edge 15+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source under the **MIT License** — feel free to use it as a template or reference.

## 🙌 Acknowledgments

- **Open-Meteo** for the free, reliable weather API
- **MDN Web Docs** for JavaScript and CSS documentation
- Inspired by professional error handling and UX best practices

---

## 🚀 Deployment on Netlify

Ready to go live? Here's how:

1. **Push to GitHub** (create a GitHub account if you don't have one)
2. **Connect to Netlify** (drag & drop your folder or connect your GitHub repo)
3. **Get a live URL** in seconds
4. **Update this README** with your live demo link

**Detailed deployment guide:** See [DEPLOYMENT.md](./DEPLOYMENT.md) (coming soon)

---

**Built with ❤️ as a junior developer learning modern JavaScript**

Questions or feedback? Open an issue or reach out!
