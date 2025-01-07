import { useNavigate } from 'react-router-dom'
import './home.css'





function Home(){
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/game")
  }
  return(
    <div className="container">
      <h1 className='title'>Wel<span>come</span></h1>
      <div className="text">
        <h1>tic</h1>
        <h1>tac</h1>
        <h1>toe</h1>
      </div>
      <button className='btn' onClick={handleNavigate}>Start</button>
    </div>
)}

export default Home