import './style.css'
import { IoCartSharp} from "react-icons/io5";
import logo from '../../imgs/logo.png'
import logoHome from '../../imgs/logoHome.png'

export const Header = ({navigate, getProductsByCategory}) => {
    const refresh = () =>{
        navigate('/')
        getProductsByCategory('')
    }
    return (
        <>
            <header className="header">
                <div className='header-div'>
                    <img src={logoHome} className='header-logo-home' onClick={refresh}></img>
                    <img src={logo} className='header-logo'></img>
                    <IoCartSharp size={40} onClick={()=>{navigate('/cart')}} className='cartIcon'/>
                </div>
            </header>
        </>
    )
}