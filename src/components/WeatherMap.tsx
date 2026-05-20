import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"
import { useEffect } from "react"
import { useWeatherStore } from "../store/weatherStore"
import L from "leaflet"
import type { LatLngExpression } from "leaflet"

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

// marker画像バグ対策
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

// 地図を指定の座標にアニメーション移動
function ChangeMapView({ lat, lon }: { lat: number; lon: number }) {
  const map = useMap()

  useEffect(() => {
    map.flyTo([lat, lon] as LatLngExpression, 10, { duration: 1.5 })
  }, [lat, lon, map])

  return null
}

export function WeatherMap() {
  const { location, weather } = useWeatherStore()
  if (!location || !weather) return null

  const position: LatLngExpression = [location.lat, location.lon]

  return (
    <div className="map-wrapper">
      <MapContainer
        center={position}
        zoom={10}
        scrollWheelZoom={true}
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {/* 地図タイル */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          {...({ attribution: '&copy; OpenStreetMap contributors' } as any)}
        />
        {/* 検索時に地図移動 */}
        <ChangeMapView lat={location.lat} lon={location.lon} />

        {/* ピン */}
        <Marker position={position} />
      </MapContainer>
    </div>
  )
}

export default WeatherMap