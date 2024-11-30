import './App.css'
import PrivateLayout from './layouts/privateLayout'
import PublicLayout from './layouts/publicLayout'
import useAuthStore from './store/authStore'

function App() {
  const { user, token } = useAuthStore()
  console.log(user, token)
  if (user)
    return <PrivateLayout />
  else
    return <PublicLayout />
}

export default App
