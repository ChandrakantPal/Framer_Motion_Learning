import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Pizza from '../types'

interface BaseProp {
  addBase: (base: any) => void
  pizza: Pizza
}

const Base: FC<BaseProp> = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust']

  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : ''
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}
    </div>
  )
}

export default Base
