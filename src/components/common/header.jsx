import { useNavigate } from "react-router-dom"

export default function Header() {
    
    const Navigate = useNavigate();

    return (
        <>
            <nav className="navMenu">
                <h1 className="navMenu__logo">PixelFlow</h1>
                <button className="navMenu__button" onClick={() => Navigate('/myPhotos')}>Mis Fotos</button>
            </nav>

            <section className="search">
                <h2 className="search__title">Imágenes Asombrosas. Descargas Ilimitadas!</h2>
                <form className="search__bar" action="">
                    <img className="search__bar__ico" src="/assets/icos/search.svg" alt="Search" />
                    <input className="search__bar__input" placeholder=" " type="text" id="search "/>
                    <label className="search__bar__label" htmlFor="search">Buscar Imágenes</label>
                </form>
                <div className="search__tags">
                    <ul className="search__tags__list">
                        <li className="search__tags__list__item">Portrait</li>
                        <li className="search__tags__list__item">Animales</li>
                        <li className="search__tags__list__item">Naturaleza</li>
                        <li className="search__tags__list__item">Motor</li>
                        <li className="search__tags__list__item">Landscape</li>
                    </ul>
                </div>
            </section>
        </>
    )
}