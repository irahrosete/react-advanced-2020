import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ name, price, image }) => {
  const img = image && image.url
  return (
    <article className='product'>
      <img src={img || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>{price}</p>
    </article>
  )
}

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

Product.defaultProps = {
  name: 'sofa',
  price: 3.99,
}

export default Product
