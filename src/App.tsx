import { SearchBar } from "./components/SearchBar"
import { WeatherCard } from "./components/WeatherCard"
import { Forecast } from "./components/Forecast"
import { WeatherMap } from "./components/WeatherMap"
import { WeatherBackground } from "./components/WeatherBackground"
import { useWeatherStore } from "./store/weatherStore"
import { motion, AnimatePresence } from "framer-motion"

function App() {
  const { loading,weather } = useWeatherStore()
  
  return (
    <>
      <div className="wrapper">
        <WeatherBackground />
        <div className={ weather ? "content active" : "content" }>
          <h1>Weather-App</h1>
          <SearchBar />
          {loading ? (
                <div className="loading">
                  <motion.span
                      animate={{ y: [0, -10, 0, -10, 0], x: [0, 5, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      ☁️
                    </motion.span>
                    <motion.span
                      animate={{ y: [0, -8, 0, -8, 0], x: [0, -3, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                    >
                      ☁️
                    </motion.span>
                    <motion.span
                      className="text"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      Loading...
                  </motion.span>
                </div>
          ) : (
                <>
                <WeatherCard />
                <Forecast />
                <WeatherMap />
                </>
          )}
        </div>
      </div>
    </>
  )
}
export default App
