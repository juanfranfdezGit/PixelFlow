export default function ImagesList() {

    return (
        <>
            <main className="dashboardList">
                <div className="dashboardList__actions">
                    <button>Ordenar</button>
                    <button>Borrar Todo</button>
                </div>

                <div className="dashboardList__item">
                    <div className="dashboardList__item__image">
                        <img className="dashboardList__item__image__img" src="/assets/images/headerBack.jfif" alt="test" />
                        <div className="dashboardList__item__image__overlay">
                            <img className="dashboardList__item__image__overlay__ico" src="/assets/icos/delete.svg" alt="delete" />
                        </div>
                    </div>
                    <div className="dashboardList__item__info">
                        <div className="dashboardList__item__info__description">
                            <h3 className="dashboardList__item__info__description__title">descripción</h3>
                            <p className="dashboardList__item__info__description__desc">lorem efoamfoaemf alfk adfkafkldk lda afsf asf as asf</p>
                        </div>
                        <div className="dashboardList__item__info__metadatas">
                            <h3 className="dashboardList__item__info__metadatas__title">guardado</h3>
                            <p className="dashboardList__item__info__metadatas__description">25/05/25</p>
                        </div>
                        <div className="dashboardList__item__info__metadatas">
                            <h3 className="dashboardList__item__info__metadatas__title">width</h3>
                            <p className="dashboardList__item__info__metadatas__description">400px</p>
                        </div>
                        <div className="dashboardList__item__info__metadatas">
                            <h3 className="dashboardList__item__info__metadatas__title">height</h3>
                            <p className="dashboardList__item__info__metadatas__description">350px</p>
                        </div>
                    </div>
                </div>

                <div className="dashboardList__item">
                    <div className="dashboardList__item__image">
                        <img className="dashboardList__item__image__img" src="/assets/images/photo2.webp" alt="test" />
                        <div className="dashboardList__item__image__overlay">
                            <img className="dashboardList__item__image__overlay__ico" src="/assets/icos/delete.svg" alt="delete" />
                        </div>
                    </div>
                    <div className="dashboardList__item__info">
                        <div className="dashboardList__item__info__description">
                            <h3 className="dashboardList__item__info__description__title">descripción</h3>
                            <p className="dashboardList__item__info__description__desc">lorem efoamfoaemf alfk adfkafkldk lda afsf asf as asf</p>
                        </div>
                        <div className="dashboardList__item__info__metadatas">
                            <h3 className="dashboardList__item__info__metadatas__title">guardado</h3>
                            <p className="dashboardList__item__info__metadatas__description">25/05/25</p>
                        </div>
                        <div className="dashboardList__item__info__metadatas">
                            <h3 className="dashboardList__item__info__metadatas__title">width</h3>
                            <p className="dashboardList__item__info__metadatas__description">400px</p>
                        </div>
                        <div className="dashboardList__item__info__metadatas">
                            <h3 className="dashboardList__item__info__metadatas__title">height</h3>
                            <p className="dashboardList__item__info__metadatas__description">350px</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}