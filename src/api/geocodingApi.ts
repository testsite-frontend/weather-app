
export async function geocodeCity(city:string){ //地名を元に経度緯度を取得する
  const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=ja`)
  
  if(!res.ok){
    throw new Error("※経度緯度が取得できませんでした")
  }

  const data = await res.json()

  if(!data.results?.length){
    throw new Error("※入力した地名は見つかりませんでした")
  }

  return {
    name : data.results[0].name,
    lat : data.results[0].latitude,
    lon : data.results[0].longitude,
  }
  
}

export default geocodeCity