
export type WeatherData = {
  current: {
    time: string
    temperature_2m: number
    weather_code: number
    wind_speed_10m: number
    relative_humidity_2m: number
    apparent_temperature: number
  }
  daily: {
    time: string[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    weather_code :number[]
    precipitation_probability_max:number[]
  }
}

export type weatherStore = {
  city : string,
  cityError : string[],
  loading : boolean,
  weather : WeatherData | null,
  location : {
    name : string,
    lat : number,
    lon : number,
  } | null,
  setCity : (city:string) => void,
  searchCity : () => Promise<void>,
}

