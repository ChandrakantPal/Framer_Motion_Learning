import React, { FC } from 'react'
import Pizza from '../types'

interface OderProp {
  pizza: Pizza
}

const Order: FC<OderProp> = ({ pizza }) => {
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping: any) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  )
}

export default Order
