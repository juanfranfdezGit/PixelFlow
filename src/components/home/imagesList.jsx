import { useState, useEffect } from "react";

export default function ImagesList({ setActive }) {

    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/photos?client_id=${API_KEY}`)
        .then((response) => response.json())
        .then((json) => {
            setData(json);
            console.log("datos recubidos:", json)
        })
        .catch((error) => console.error("Error al obtener datos:", error));
    }, [BASE_URL, API_KEY])

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