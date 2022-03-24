import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Buy from './views/buy'
import Buyend from './views/buyend'
import Sellend from './views/sellend'
import AgentContactBuy from './views/agent-contact-buy'
import ListingPage from './views/listing-page'
import Sell from './views/sell'
import Browse from './views/browse'
import Home from './views/home'
import HowItWorks from './views/how-it-works'
import AgentContactSell from './views/agent-contact-sell'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Buy} path="/buy" />
        <Route exact component={Buyend} path="/buyend" />
        <Route exact component={Sellend} path="/sellend" />
        <Route exact component={AgentContactBuy} path="/agent-contact-buy" />
        <Route exact component={ListingPage} path="/listing-page" />
        <Route exact component={Sell} path="/sell" />
        <Route exact component={Browse} path="/browse" />
        <Route exact component={Home} path="/" />
        <Route exact component={HowItWorks} path="/how-it-works" />
        <Route exact component={AgentContactSell} path="/agent-contact-sell" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
