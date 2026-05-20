# weather-app（React）

## 概要
Reactを使用して開発した天気予報アプリです。  
検索した市町村区の現在の天気予報を表示できます。
---

## URL
https://chat-app-two-snowy-89.vercel.app/  
 
---------

## Source Code
https://github.com/testsite-frontend/weather-app

---

## 使用技術
React  
TypeScript  
Zustand（状態管理）  
framer-motion（アニメーションライブラリ）

---

## 使用API
- Open-Meteo Weather API（天気情報）
- Open-Meteo Geocoding API（地名→緯度経度変換）
- React Leaflet（地図表示）

---

## 主な機能
- 市町村名から現在の天気を検索・表示
- 緯度・経度を取得して地図（React Leaflet）に反映
- 現在の天気と5日間の予報を表示
- 天気に応じて背景アニメーションを動的に変更
- ローディング・エラーハンドリング機能

---

## 工夫した点
- Zustandを用いてAPI・UI状態を分離し、管理しやすいように
- geocoding API → weather API の非同期フローをstoreに集約し、ロジックの責務を明確化
- weather codeをマッピングしてアイコン・背景演出を動的に切り替え
- React Leafletを用いて検索結果と地図表示を同期
- Framer MotionでUIの遷移・ローディングを演出

---

## 苦労した点
- geocoding APIとweather APIを連携させる非同期処理の設計
- Zustandでの状態管理
- React Leafletの地図更新（flyToやmarker表示の同期）
- 天気コードとUI表現のマッピング設計

---

## ディレクトリ構成（抜粋）

```
src
├─ components
│   ├─ SearchBar.tsx
│   ├─ WeatherCard.tsx
│   ├─ Forecast.tsx
│   ├─ WeatherBackground.tsx
│   └─ WeatherMap.tsx
│
├─ store
│   └─ weatherStore.ts
│  
├─ api
│   ├─weatherApi.ts
│   └─ geocodingApi.ts
│
├─ utils
│   └─weatherCodes.ts
│
├─ types
│   └─weather.ts 
│
├─ App.tsx
└─ main.tsx

```