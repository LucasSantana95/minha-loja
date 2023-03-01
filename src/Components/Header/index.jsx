import { IoCartSharp } from "react-icons/io5";
import logo from '../../imgs/logo.png'
import logoHome from '../../imgs/logoHome.png'
import * as S from './styles'

export const Header = ({ navigate, getProductsByCategory }) => {
    const refresh = () => {
        navigate('/')
        getProductsByCategory('')
    }
    return (
        <S.Container>
            <S.Icon src={logoHome} onClick={refresh}></S.Icon>
            <S.Logo src={logo}></S.Logo>
            <IoCartSharp size={40} style={{cursor : "pointer"}} onClick={() => { navigate('/cart') }} />
        </S.Container>
    )
}