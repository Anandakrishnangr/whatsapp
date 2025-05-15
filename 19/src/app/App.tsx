import './App.css'
import PrivateLayout from '../layouts/privateLayout'
import PublicLayout from '../layouts/publicLayout'
import useAuthStore from '../store/authStore'
import { Route, Routes } from 'react-router-dom'
import { Chat } from '@/features/chat/page'
import { Settings } from '@/features/settings/page'

function App() {
  const { user, token } = useAuthStore()
  console.log(user, token)
  if (user)
    return <Routes >
      <Route path="/" element={<PrivateLayout />} >
        <Route path='/chat/*' element={<Chat />}></Route>
        <Route path='/Settings/*' element={<Settings />}></Route>
      </Route>
    </Routes>

  else
    return <PublicLayout />
}

export default App
