import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from "../../redux/photosSlice";

export default function Modal({ active, setActive, item }) {

    if (!item) {
        return null; 
    }

    const [ allow, setAllow ] = useState(false);
    const [ saved, setSaved ] = useState(false);
    const dispatch = useDispatch();

    function handleAddPhoto(item) {
        dispatch(addPhoto(item));
        setSaved(true);
        setTimeout(() => setSaved(false), 4000);
    }

    function handleDescription() {
        setAllow(!allow);
    }

    function closeModal() {
        setActive(false);
        setAllow(false);
    }

    return (
        <>
            <div>
                <div className={`modal__back ${active ? "active" : ""}`} onClick={closeModal}></div>
                <div className={`modal ${active ? "active" : ""}`}>
                    <img className="modal__backImg" src={item.urls.full} alt={item.user.name} />
                    <div className="modal__top">
                        <p className="modal__top__tag">{item.title}</p>
                        <p onClick={closeModal} className="modal__top__close">X</p>
                    </div>
                    <div className={`modal__bottom ${allow ? "allow" : ""}`}>
                        <img onClick={handleDescription} className={`modal__bottom__arrow ${allow ? "allow" : ""}`} src="/assets/icos/arrow.svg" alt="arrow" />
                        <p className={`modal__bottom__description ${allow ? "allow" : ""}`}>{item.description ? item.description : "descripción no disponible"}</p>
                        <div className="modal__bottom__actions">
                            <img src="/assets/icos/star.svg" onClick={() => handleAddPhoto(item)} alt="star" />
                            <img src="/assets/icos/download.svg" alt="download" />
                        </div>
                        {saved && <p className="modal__bottom__actions__saved">Foto guardada!</p>}
                    </div>
                </div>
            </div>
        </>
    )
}