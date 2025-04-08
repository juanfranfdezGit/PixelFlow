import { useState, useEffect } from "react";

export default function ImagesList({ setActive, keyword }) {

    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const [ data, setData ] = useState([]);

    useEffect(() => {
        const url = keyword.trim()
        ? `https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=20&client_id=${API_KEY}`
        : `${BASE_URL}/photos?client_id=${API_KEY}&per_page=20`;


        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            const results = json.results || json; 
            setData(results);
          })
        .catch((error) => console.error("Error al obtener datos:", error));
    }, [keyword, BASE_URL, API_KEY])

    function handleImageClick() {
        setActive(true);
    }

    return (
        <>
            <main className="images">
                <section className="images__container">
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <img
                        key={index}
                        onClick={handleImageClick}
                        className="images__container__imgs"
                        src={item.urls.full}
                        alt={item.user.name}
                        />
                    ))
                    ) : (
                    <p>Cargando imágenes...</p>
                    )}
                </section>
            </main>
        </>
    )
}