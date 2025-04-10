import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setKeyword, fetchImages } from "../../redux/searchSlice";

export default function Header() {

    const tags = ["Animales", "Motor", "Portrait", "Naturaleza", "Landscape"]

    const Navigate = useNavigate();
    const dispatch = useDispatch();

    function handleChange(e) {
        const value = e.target.value;
        dispatch(setKeyword(value));
        dispatch(fetchImages(value));
    }

    function handleTagClick(tag) {
        dispatch(setKeyword(tag)); 
        dispatch(fetchImages(tag));
    }

    return (
        <>
            <nav className="navMenu">
                <h1 className="navMenu__logo" onClick={() => Navigate('/')}>PixelFlow</h1>
                <button className="navMenu__button" onClick={() => Navigate('/myPhotos')}>Mis Fotos</button>
            </nav>

            <section className="search">
                <h2 className="search__title">Imágenes Asombrosas. Descargas Ilimitadas!</h2>
                <form className="search__bar">
                    <img className="search__bar__ico" src="/assets/icos/search.svg" alt="Search" />
                    <input className="search__bar__input" placeholder=" " type="text" id="search" onChange={handleChange} />
                    <label className="search__bar__label" htmlFor="search">Buscar Imágenes</label>
                </form>
                <div className="search__tags">
                    <ul className="search__tags__list">
                        {tags.map((tag) => (
                            <li key={tag}className="search__tags__list__item" onClick={() => handleTagClick(tag)}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}