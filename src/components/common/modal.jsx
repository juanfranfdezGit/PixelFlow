import { useState } from "react";

export default function Modal({ active, setActive }) {

    const [ allow, setAllow ] = useState(false);

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
                    <div className="modal__top">
                        <p className="modal__top__tag">Portrait</p>
                        <p onClick={closeModal} className="modal__top__close">X</p>
                    </div>
                    <div className={`modal__bottom ${allow ? "allow" : ""}`}>
                        <img onClick={handleDescription} className={`modal__bottom__arrow ${allow ? "allow" : ""}`} src="/assets/icos/arrow.svg" alt="arrow" />
                        <p className="modal__bottom__description">faslmasfl aslñaslñlñ afjsf ajl fjasl asflñasf jasfñasfj asfjl asfjlñfj </p>
                        <div className="modal__bottom__actions">
                            <img src="/assets/icos/heart.svg" alt="heart" />
                            <img src="/assets/icos/star.svg" alt="star" />
                            <img src="/assets/icos/download.svg" alt="download" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}