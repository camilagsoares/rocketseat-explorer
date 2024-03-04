import Post from "./Post"
import { Header } from './components/Header'
import './global.css'

export function App() {

  return (
    <>
    <Header />
      <Post author="Diego" content="lorem" />
      <Post author="Camila" content="lorem ipsum" />

    </>
  )
}


