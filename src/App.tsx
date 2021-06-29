import React, { useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from './components/Header'
import Home from './components/Home'
import Base from './components/Base'
import Toppings from './components/Toppings'
import Order from './components/Order'
import Pizza from './types'

function App() {
  const [pizza, setPizza] = useState<Pizza>({ base: '', toppings: [] })
  const [showModal, setShowModal] = useState(false)

  const location = useLocation()

  const addBase = (base: string) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping: string) => {
    let newToppings
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping]
    } else {
      newToppings = pizza.toppings.filter((item: string) => item !== topping)
    }
    setPizza({ ...pizza, toppings: newToppings })
  }

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  )
}

export default App
