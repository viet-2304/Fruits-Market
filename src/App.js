import './App.css'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'

function App() {
  
  return (

    <div>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Body />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App;
