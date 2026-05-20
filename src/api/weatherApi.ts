
export async function fetchWeather(lat:number,lon:number){
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,apparent_temperature` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max` +
    `&timezone=Asia%2FTokyo`
  )

  if(!res.ok){
    throw new Error("※検索した地名の情報が見つかりません")
  }
  
  return await res.json()

}

export default fetchWeather