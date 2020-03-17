import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import HomeCards1 from './components/HomeCards1'
import HomeCards2 from './components/HomeCards2'
import XboxSection from './components/XboxSection'
import Carbon from './components/Carbon'
import Follow from './components/Follow'
import Footer from './components/Footer'

class App extends React.Component {
  state = {
    show: 'menu-btn'
  }

  toggleClass = () => {
    this.setState({
      show: 'menu-btn show'
    })
  }
  render() {
    const { show } = this.state
    return (
      <div>
        <div className="container">
          <Navigation value={show} onClick={this.toggleClass} />
          <Header />
          <HomeCards1 />
          <XboxSection />
          <HomeCards2 />
          <Carbon />
          <Follow />
        </div>
        <Footer />
      </div>
    )
  }
}
export default App
