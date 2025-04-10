import { useNavigate } from "react-router-dom"

export default function HeaderDash() {
    
    const Navigate = useNavigate();

    return (
        <>
            <nav className="navMenu dashboard">
                <h1 className="navMenu__logo dashboard" onClick={() => Navigate('/')}>PixelFlow</h1>
                <button className="navMenu__button" onClick={() => Navigate('/')}>Volver</button>

                <form className="search__bar dashboard" action="">
                    <img className="search__bar__ico" src="/assets/icos/search.svg" alt="Search" />
                    <input className="search__bar__input" placeholder=" " type="text" id="search "/>
                    <label className="search__bar__label" htmlFor="search">Buscar Imágenes</label>
                </form>
            </nav>
        </>
    )
}