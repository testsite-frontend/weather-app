import { motion, AnimatePresence } from "framer-motion"
import { useWeatherStore } from "../store/weatherStore"
import { weatherCodeMap } from "../utils/weatherCodes" //天気code

export function Forecast() {

  const weather = useWeatherStore(state => state.weather)

  if (!weather) return null

  const { daily } = weather
  const start = 1
  const end = 6
return (
    <motion.div
      className="forecast_wrapper"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >

      <table className="forecast-card">

        <thead>
          <tr>
            <th>日付</th>
            <th>天気</th>
            <th>気温</th>
            <th>降水<br className="sp" />確率</th>
          </tr>
        </thead>

        <tbody>
          {daily.time.slice(start, end).map((date, i) => {
            
            const index = i + start

            const max = daily.temperature_2m_max[index]
            const min = daily.temperature_2m_min[index]

            return (
              <motion.tr
                key={date}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.08
                }}
              >

                <td>
                  {new Date(date).toLocaleDateString("ja-JP", {
                    month: "numeric",
                    day: "numeric",
                    weekday: "short",
                  })}
                </td>

                <td>
                  <i className={`wethericon wi ${weatherCodeMap[daily.weather_code[i]]}`}></i>
                </td>

                <td>
                  <span className="max">{max}°</span>&nbsp;/<br className="sp" />
                  &nbsp;<span className="min">{min}°</span>
                </td>

                <td className="rain">
                  {weather.daily.precipitation_probability_max[i]}%
                </td>

              </motion.tr>
            )
          })}
        </tbody>

      </table>

    </motion.div>
  )
}

export default Forecast