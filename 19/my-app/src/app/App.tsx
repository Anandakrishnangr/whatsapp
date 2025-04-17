import './App.css'
import PrivateLayout from '../layouts/privateLayout'
import PublicLayout from '../layouts/publicLayout'
import useAuthStore from '../store/authStore'
import { ChatList } from '@/features/chat/components/chatList'
import { Route, Routes } from 'react-router-dom'

function App() {
  const { user, token } = useAuthStore()
  console.log(user, token)
  if (user)
    return <Routes >
      <Route path="/" element={<PrivateLayout />} >
        <Route path='/' element={<ChatList />}></Route>
      </Route>
    </Routes>

  else
    return <PublicLayout />
}

export default App
