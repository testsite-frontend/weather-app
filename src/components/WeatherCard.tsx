import { motion, AnimatePresence } from "framer-motion"
import { useWeatherStore } from "../store/weatherStore"
import { weatherCodeMap } from "../utils/weatherCodes"

export function WeatherCard() {

  const { weather, location } = useWeatherStore()

  return (
    <AnimatePresence>
      {weather && location && (
        <motion.div
          className="info_wrapper"

          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}

          transition={{ duration: 0.5 }}
        >

          {/* TODAY */}
          <motion.div
            className="today"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4 }}
          >
            <p className="main">
              {new Date(weather.current.time).toLocaleDateString("ja-JP", {
                month: "numeric",
                day: "numeric",
                weekday: "short",
              })}
            </p>

            <p className="icon">
              <i className={`wi ${weatherCodeMap[weather.current.weather_code]}`}></i>
            </p>

            <div className="temperature">
              <span>{weather.daily.temperature_2m_max[0]}℃</span>&nbsp;/&nbsp;<span>{weather.daily.temperature_2m_min[0]}℃</span>
            </div>
          </motion.div>

          {/* TABLE */}
          <motion.div
            className="everyday"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <table>

              <thead>
                <tr>
                  <th>現在<br className="sp" />時刻</th>
                  <th>降水<br className="sp" />確率</th>
                  <th>風速</th>
                  <th>湿度</th>
                  <th>体感<br className="sp" />温度</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    {new Date(weather.current.time).toLocaleTimeString("ja-JP", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="rain">{weather.daily.precipitation_probability_max[0]}%</td>
                  <td>{weather.current.wind_speed_10m}<br className="sp" /> m/s</td>
                  <td>{weather.current.relative_humidity_2m}%</td>
                  <td>{weather.current.apparent_temperature}℃</td>
                </tr>
              </tbody>

            </table>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WeatherCard