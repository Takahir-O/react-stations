// @ts-check
import React, { useState, useEffect } from 'react'

/**
 * @returns {JSX.Element}
 */
export const DogListContainer = () => {
  // 犬種の一覧を保持するstate
  const [breeds, setBreeds] = useState(/** @type {string[]} */ ([]))

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        // オブジェクトのキーを配列として取得（一階層目のみ）
        const breedList = Object.keys(data.message)
        setBreeds(breedList)
      })
  }, [])

  return (
    <div>
      <h2>犬種一覧</h2>
      <ul>
        {breeds.map(breed => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
    </div>
  )
}

export default DogListContainer
