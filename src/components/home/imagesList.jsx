import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchImages, setPage } from "../../redux/searchSlice";

export default function ImagesList({ setActive, setSelected }) {
    const dispatch = useDispatch();
    const { keyword, results, loading, error, page } = useSelector(state => state.search);

    const bottomRef = useRef();
    const prevScrollY = useRef(0);

    useEffect(() => {
        prevScrollY.current = window.scrollY; 
    }, [page]);

    useEffect(() => {
        dispatch(fetchImages({ keyword, page }));
    }, [keyword, dispatch, page]);

    useEffect(() => {
        dispatch(setPage(1));
    }, [keyword, dispatch]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && !loading) {
                    dispatch(setPage(page + 1));
                }
            },
            { threshold: 1.0 }
        );

        if (bottomRef.current) {
            observer.observe(bottomRef.current);
        }

        return () => {
            if (bottomRef.current) {
                observer.unobserve(bottomRef.current);
            }
        };
    }, [dispatch, loading, page]);

    useEffect(() => {
        if (!loading) {
            window.scrollTo({
                top: prevScrollY.current,
                behavior: "auto" 
            });
        }
    }, [loading]);

    function handleImageClick(item) {
        setSelected(item);
        setActive(true);
    }

    return (
        <main className="images">
            <section className="images__container">
                {loading && <p>Cargando imágenes...</p>}
                {error && <p>Error al cargar imágenes: {error}</p>}
                {!loading && results.length > 0 ? (
                    <>
                        {results.map((item, index) => (
                            <img
                                key={index}
                                onClick={() => handleImageClick(item)}
                                className="images__container__imgs"
                                src={item.urls.full}
                                alt={item.user.name}
                            />
                        ))}
                        <div ref={bottomRef} style={{ height: "1px" }}></div>
                    </>
                ) : (
                    !loading && <p>No se encontraron imágenes.</p>
                )}
            </section>
        </main>
    );
}