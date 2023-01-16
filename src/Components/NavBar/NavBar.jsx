import './style.css'

export const NavBar = ({getProductsByCategory}) => {
    const navOptions = [
        {
            name : 'Geral',
            category : ''
        },
        {
            name: 'Baterias',
            category: 'Batteries'
        },
        {
            name: 'Cabos',
            category: 'Cables'
        },
        {
            name: 'Conectores',
            category: 'Connectors'
        },
        {
            name: 'Estação de Recarga',
            category: 'Charging-stations'
        },
        {
            name: 'Fixações',
            category: 'Fixings'
        },
        {
            name: 'Inversores',
            category: 'Inverters'
        },
        {
            name: 'Módulos',
            category: 'Modules'
        },
        {
            name: 'Proteções Elétricas',
            category: 'Electrical-Protectors'
        },
    ]
    return (
        <>
            <nav className="navBar">
                {
                    navOptions.map((e) => (
                        <button key={e.category} onClick={()=>getProductsByCategory(e.category)}>{e.name}</button>
                    ))
                }
            </nav>
        </>
    )
}