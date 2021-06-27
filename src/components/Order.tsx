import React, { FC } from 'react'
import Pizza from '../types'
import { motion } from 'framer-motion'

interface OderProp {
  pizza: Pizza
}

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      when: 'beforeChildren',
    },
  },
}

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const Order: FC<OderProp> = ({ pizza }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping: any) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Order
