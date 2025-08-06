//import './assets/fontawesome-free/css/all.css'
import './assets/styles.css'
import './assets/MyStyle.css'
import { UserProvider } from './context/userContext'
import AllComponent from './Components/AllComponent/AllComponent'
import { UrlBackendProvider } from './context/urlBackendContext'

function App() {
  return (
    <UrlBackendProvider>
      <UserProvider>
        <AllComponent />
      </UserProvider>
    </UrlBackendProvider>
  );
}

export default App;
