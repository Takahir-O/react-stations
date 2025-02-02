// @ts-check
import React, { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
  )

  return (
    <div>
      <p>犬の画像を表示するアプリです</p>
      <DogImage url={dogUrl} />
      <button
        onClick={() =>
          fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => setDogUrl(data.message))
        }
      >
        更新
      </button>
    </div>
  )
}

export default Description
