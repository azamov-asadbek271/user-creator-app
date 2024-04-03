import './App.css'
import { useState } from 'react'
import Navbar from "./components/navbar/Navbar"

import Footer from "./components/footer/Footer"
import UseList from './components/useList/UseList'
import NewUserForm from './components/newuser/NewUserForm'

function App() {
  // boshi`
  const [modaluse, setModal] = useState (false)
  const [users,setUser] = useState ([])
  const deleteUser = (id) => {
    setUser((prev) => {
      return prev.filter((user) => {
       return user.id !== id
      })
    })
  }
  const closeModal = (e) => {
    if(e.target.className == "overlay")setModal(false)
    if(e.key == "Escape") setModal(false)
    
  }
   const addUser = (user) => {
     setUser((prev) => {
      return [...prev,user]
     })
     setModal(false)
   }
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='App'>
    <Navbar usersLength={users.length}/>
    <main>
     <div className="no-users">
          {users.length === 0 && <h2>No user</h2>}
     </div>
     <UseList users={users} deleteUser={deleteUser}/>
    </main>
    {modaluse && <NewUserForm addUser={addUser}/>}
    <button onClick={() => setModal(true)} className='create-user'>Create User</button>
    <Footer/>
    </div>
  )
}

export default App

