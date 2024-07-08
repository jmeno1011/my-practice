import { Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div>
      <h1>Basic Example</h1>
      <h2>Hello! This page is home</h2>
      <Link to="about">About us</Link>
    </div>
  )
}

export default Home;
