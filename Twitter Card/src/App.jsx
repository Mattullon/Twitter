
import './App.css'
import { TwitterCard } from './TwitterCard'

function App() {

  return (
    <div className='App'>
   <TwitterCard initialIsFollowing={false} userName='mattullon'name='Matias Ullon'  />
   <TwitterCard initialIsFollowing userName='Marc05alm'name='Marcos Almedia'  />
   <TwitterCard initialIsFollowing={false} userName='noealca98'name='Noelia Alvarez'  />
   <TwitterCard initialIsFollowing userName='orlandocde'name='Denis Portillo '  />




   
    </div>

  )
}

export default App
