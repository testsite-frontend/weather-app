import { useWeatherStore } from "../store/weatherStore"
import { motion,AnimatePresence  } from "framer-motion"

export function WeatherBackground(){

  const weather = useWeatherStore( state => state.weather) //天気情報
  if(!weather) return null

  const code = weather.current.weather_code

    return (
    <AnimatePresence mode="wait">

      {/* 晴れ */}
      {code === 0 && (
        <motion.div
          key="sunny"
          className="weatherback sunny-bg"

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}

          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="sun"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          />
        </motion.div>
      )}

      {/* 曇り */}
      {[1, 2, 3, 45, 48].includes(code) && (
        <motion.div
          key="cloudy"
          className="weatherback cloudy-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >

          {[
            { x: 10, y: 15, size: 220, delay: 0 },
            { x: 60, y: 35, size: 180, delay: 1 },
            { x: 30, y: 55, size: 260, delay: 2 },
            { x: 70, y: 20, size: 200, delay: 1.5 },
            { x: 20, y: 70, size: 240, delay: 0.5 },
            { x: 80, y: 60, size: 190, delay: 2.5 },
          ].map((cloud, i) => (
            <motion.div
              key={i}
              className="cloud"

              style={{
                position: "absolute",
                left: `${cloud.x}%`,
                top: `${cloud.y}%`,
                width: cloud.size,
                height: cloud.size * 0.35,
                opacity: 0.35,
              }}

              animate={{
                y: [0, -8, 0],
                x: [0, 5, 0],
              }}

              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: cloud.delay,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* 雨 */}
      {[51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code) && (
        <motion.div
          key="rain"
          className="weatherback rain-bg"

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}

          transition={{ duration: 0.8 }}
        >
          {Array.from({ length: 80 }).map((_, i) => (
            <motion.span
              key={i}
              className="rain-drop"

              initial={{
                y: -100,
                x: Math.random() * window.innerWidth,
              }}

              animate={{
                y: window.innerHeight + 100,
              }}

              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: Math.random(),
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      )}

      {/* 雪 */}
      {[71, 73, 75, 77, 85, 86].includes(code) && (
        <motion.div
          key="snow"
          className="weatherback snow-bg"

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}

          transition={{ duration: 0.8 }}
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.span
              key={i}
              className="snowflake"

              initial={{
                y: -50,
                x: Math.random() * window.innerWidth,
                opacity: 0.7,
              }}

              animate={{
                y: window.innerHeight + 50,
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth + 50,
                  Math.random() * window.innerWidth,
                ],
              }}

              transition={{
                repeat: Infinity,
                duration: 8 + Math.random() * 5,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      )}

      {/* 雷 */}
      {[95, 96, 99].includes(code) && (
        <motion.div
          key="thunder"
          className="weatherback thunder-bg"

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}

          transition={{ duration: 0.8 }}
        >
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.span
              key={i}
              className="rain-drop"

              initial={{
                y: -100,
                x: Math.random() * window.innerWidth,
              }}

              animate={{
                y: window.innerHeight + 100,
              }}

              transition={{
                repeat: Infinity,
                duration: 0.7,
                delay: Math.random(),
                ease: "linear",
              }}
            />
          ))}

          <motion.div
            className="lightning"

            animate={{
              opacity: [0, 0, 1, 0, 0],
            }}

            transition={{
              repeat: Infinity,
              duration: 5,
              times: [0, 0.7, 0.72, 0.74, 1],
            }}
          />
        </motion.div>
      )}

    </AnimatePresence>
    )

}

export default WeatherBackground