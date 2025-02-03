// @ts-check
import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param {{ breeds: string[], selectedBreed: string, onChange: (breed: string) => void }} props
 * @returns {JSX.Element}
 */
export const BreedsSelect = ({ breeds, selectedBreed, onChange }) => {
  return (
    <select value={selectedBreed} onChange={e => onChange(e.target.value)}>
      <option value="">犬種を選択してください</option>
      {breeds.map(breed => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}

BreedsSelect.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedBreed: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default BreedsSelect
