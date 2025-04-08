import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function Header({ keyword, setKeyword }) {
    
    const Navigate = useNavigate();
    const [input, setInput] = useState("");

    const tags = ["Animales", "Motor", "Portrait", "Naturaleza", "Landscape"]

    function handleSubmit(e) {
        e.preventDefault();
        setKeyword(input);
    }

    function handleTagClick(tag) {
        setKeyword(tag);
    }

    return (
        <>
            <nav className="navMenu">
                <h1 className="navMenu__logo">PixelFlow</h1>
                <button className="navMenu__button" onClick={() => Navigate('/myPhotos')}>Mis Fotos</button>
            </nav>

            <section className="search">
                <h2 className="search__title">Imágenes Asombrosas. Descargas Ilimitadas!</h2>
                <form className="search__bar" onSubmit={handleSubmit}>
                    <img className="search__bar__ico" src="/assets/icos/search.svg" alt="Search" />
                    <input className="search__bar__input" placeholder=" " type="text" id="search" onChange={(e) => setInput(e.target.value)} />
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