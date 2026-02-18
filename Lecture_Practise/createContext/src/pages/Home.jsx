import { Link , useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate()

  return (
    <>
    <div className='heading'>Home Page</div>
    <Link to="/about">AboutUs</Link>
    <button className="btn" onClick={() => navigate('/about')}>click</button>
    </>
  )
}

export default Home