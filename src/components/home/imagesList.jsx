import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchImages } from "../../redux/searchSlice";

export default function ImagesList({ setActive, setSelected }) {

    const dispatch = useDispatch();

    const { keyword, results, loading, error } = useSelector(state => state.search);

    useEffect(() => {
        dispatch(fetchImages(keyword));
    }, [keyword, dispatch]);

    function handleImageClick(item) {
        setSelected(item);
        setActive(true);
    }

    return (
        <>
            <main className="images">
                <section className="images__container">
                    {loading && <p>Cargando imágenes...</p>}
                    {error && <p>Error al cargar imágenes: {error}</p>}
                    {!loading && results.length > 0 ? (
                        results.map((item, index) => (
                            <img
                                key={index}
                                onClick={() => handleImageClick(item)}
                                className="images__container__imgs"
                                src={item.urls.full}
                                alt={item.user.name}
                            />
                        ))
                    ) : (
                        !loading && <p>No se encontraron imágenes.</p>
                    )}
                </section>
            </main>
        </>
    )
}