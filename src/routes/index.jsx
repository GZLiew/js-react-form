import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { HomeView } from '../modules/home/HomeView'

const FC = () => {

  return (
    <Switch>
      <Route exact={true} path="/" component={HomeView} />
    </Switch>
  )

}

export { FC as Routes }
