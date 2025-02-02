// DO NOT DELETE

import React, { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
  )
  return (
    <div>
      <header>Dogアプリ</header>
      <p>犬の画像を表示するアプリです</p>
      <img src={dogUrl} alt="犬の画像" />
      <button
        onClick={() =>
          fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) => setDogUrl(data.message))
        }
      >
        更新
      </button>
    </div>
  )
}
