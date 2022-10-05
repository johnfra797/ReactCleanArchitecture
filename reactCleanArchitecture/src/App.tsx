
import { useSelector } from 'react-redux';
import './App.css'
import { Home } from './pages'
import store, { AppStore } from './redux/store'

function App() {
  const user= useSelector((store:AppStore)=> store.user);
  return (
    <div className="App">
      {user.id} {user.name}
     <Home/>
    </div>
  )
}

export default App
