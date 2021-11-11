import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body'

function App() {
  return (
    <div>
      <div className="header">
        <Header/>
      </div>
      <div className="body">
        <Body/>
      </div>
      
    </div>
      
  )
}

export default App;
