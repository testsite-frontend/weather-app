import { create } from "zustand"
import { fetchWeather } from "../api/weatherApi"
import { geocodeCity } from "../api/geocodingApi"
import type { weatherStore } from "../types/weather"


export const useWeatherStore = create<weatherStore>((set,get) => ({

  city : "", //検索テキスト
  cityError : [], //検索バリデーション
  location : null, //経度緯度
  weather : null, //天気情報を格納
  loading : false,
  setCity : (text) => {
    set({city : text})
  },

  
  searchCity : async () => {
    const {city} = get() //Zustandのget関数で現在の状態を取得
    const error = []

    if(city.trim().length === 0) error.push("※テキストの入力がありません！")
    if(error.length > 0){
      set({cityError : error})
      return
    }

    set({loading : true})

    try{ //API取得処理
      
        const geo = await geocodeCity(city) //経度緯度取得
        const getweather = await fetchWeather(geo.lat,geo.lon) //geoを元に天気情報取得

        set({
          cityError : [],
          weather :getweather,
          location : geo,
        })
        
    }catch(error:any){
      set({
        cityError : [error.message],

      })

    }finally{
      set({loading : false})
    }

  
    
    
    
  }
      
}))
