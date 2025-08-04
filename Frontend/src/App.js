//import './assets/fontawesome-free/css/all.css'
import './assets/styles.css'
import './assets/MyStyle.css'
import { UserProvider } from './context/userContext'
import AllComponent from './Components/AllComponent/AllComponent'

function App() {
  return (
    <UserProvider>
      <AllComponent />
    </UserProvider>
  );
}

export default App;
