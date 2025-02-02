// @ts-check
import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param {{ url: string }} props
 */
export const DogImage = props => {
  return <img src={props.url} alt="犬の画像" />
}

DogImage.propTypes = {
  url: PropTypes.string.isRequired,
}

// テストが期待する URL を defaultProps として設定
DogImage.defaultProps = {
  url: 'https://avatars.githubusercontent.com/u/298748',
}

export default DogImage
