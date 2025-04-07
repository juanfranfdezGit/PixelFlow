export default function ImagesList({ setActive }) {

    function handleImageClick() {
        setActive(true);
    }

    return (
        <>
            <main className="images">
                <section className="images__container">
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/headerBack.jfif" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/photo2.webp" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/headerBack.jfif" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/headerBack.jfif" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/headerBack.jfif" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/photo2.webp" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/photo2.webp" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/headerBack.jfif" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/headerBack.jfif" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/headerBack.jfif" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/photo2.webp" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/photo2.webp" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/headerBack.jfif" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/headerBack.jfif" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/headerBack.jfif" alt="testx"/>
                    <img onClick={handleImageClick} className="images__container__imgs" src="/assets/images/photo2.webp" alt="testx"/>
                </section>
            </main>
        </>
    )
}