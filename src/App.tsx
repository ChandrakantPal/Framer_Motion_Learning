import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Base from './components/Base'
import Toppings from './components/Toppings'
import Order from './components/Order'
import Pizza from './types'

function App() {
  const [pizza, setPizza] = useState<Pizza>({ base: '', toppings: [] })

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
      <Switch>
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
    </>
  )
}

export default App
