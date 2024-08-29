import { Card } from 'react-bootstrap'

import React from 'react'

const Product = ({product}) => {
  return (
    <Card>
        <a href={`/product/${product._id}`}>
            <Card.Img src='{product.image' variant='top'></Card.Img>
        </a>
    </Card>
  )
}

export default Product