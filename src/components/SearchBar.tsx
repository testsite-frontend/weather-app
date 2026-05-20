import { useWeatherStore } from "../store/weatherStore"
import { motion, AnimatePresence } from "framer-motion"

export function SearchBar(){

  const { city,cityError,setCity,searchCity } = useWeatherStore()

  return(
    <>
    <div className="search_flex">
      <input value={city} type="text" onChange={ (e) => setCity(e.target.value)} placeholder="市町村区を入力してください（例：堺市）"  />
      <button onClick={() => searchCity()}><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>

    <AnimatePresence>
      {cityError.length > 0 && (
        <motion.ul
          className="error"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        transition={{ type: "spring", stiffness: 800 }}
        >
          {cityError.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>

    </>
  )
}

export default SearchBar