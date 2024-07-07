import './Home.css'
import Navbar from '../Navbar/Navbar'
import {useNavigate} from 'react-router-dom'


const Home=(props)=>{
    const navigate=useNavigate()

    const onClickPortfolio=()=>{
        navigate("/resume")
    }

    return(
        <>
        <Navbar/>
        <div className="bg-container">
            <h1>Hello! My name is </h1>
            <h1 className='name'>Prasanth Paul</h1>
            <h1>I'm a <span className='job'>Full Stack Developer</span></h1>
            <div className='button-container'>
                <a download="Resume">
                <button className='button' onClick={onClickPortfolio}>Download Resume</button>
                </a>
            </div>
        </div>
        </>
    )
}


export default Home
