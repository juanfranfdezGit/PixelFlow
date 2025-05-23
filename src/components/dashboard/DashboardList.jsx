import { useDispatch } from "react-redux";
import { removeAllPhotos, removePhoto } from "../../redux/photosSlice";
import { useEffect, useState } from "react";

export default function ImagesList() {

    const [localPhotos, setLocalPhotos] = useState([]);
    const [editing, setEditing] = useState({});
    const [description, setDescription] = useState({});
    const [order, setOrder] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const savedPhotosFromLocalStorage = localStorage.getItem("savedPhotos");
        if (savedPhotosFromLocalStorage) {
            const parsedPhotos = JSON.parse(savedPhotosFromLocalStorage);

            setLocalPhotos(parsedPhotos)

            const descriptionsById = {};

            parsedPhotos.forEach(photo => {
                descriptionsById[photo.id] = photo.description || "";
            });

            setDescription(descriptionsById);
        }
    }, []);

    const handleRemoveAll = () => {
        dispatch(removeAllPhotos())
        window.location.reload();
    }

    const handleRemove = (id) => {
        dispatch(removePhoto(id))
        window.location.reload();
    }

    const handleDescription = (photoID) => {
        const newPhotos = localPhotos.map(photo => {
            if (photo.id === photoID) {
              return { ...photo, description: description[photoID] };
            }
            return photo;
          });
        
          setLocalPhotos(newPhotos);
          localStorage.setItem("savedPhotos", JSON.stringify(newPhotos));
        
          setEditing(prev => ({ ...prev, [photoID]: false }));
    }

    const allowOrder = () => {
        setOrder(!order)
    }

    const handleOrder = (type) => {
        const sortedPhotos = [...localPhotos].sort((a, b) => {
            if (type === "fecha") {
                return new Date(b.savedAt) - new Date(a.savedAt);
            } else if (type === "width") {
                return b.width - a.width;
            } else if (type === "height") {
                return b.height - a.height;
            } else if (type === "likes") {
                return b.likes - a.likes;
            }
            return 0;
        });
    
        setLocalPhotos(sortedPhotos);
        setOrder(false); 
    };

    if (!localPhotos || !Array.isArray(localPhotos)) {
        return <p>No hay fotos guardadas</p>;
    }

    return (
        <>
            <main className="dashboardList">
                <div className="dashboardList__actions">
                    <button onClick={allowOrder}>Ordenar</button>
                    <ul className={`dashboardList__actions__order ${order ? "allow" : "disallow"}`}>
                        <li onClick={() => handleOrder("fecha")}>Fecha</li>
                        <li onClick={() => handleOrder("width")}>Width</li>
                        <li onClick={() => handleOrder("height")}>Height</li>
                        <li onClick={() => handleOrder("likes")}>Likes</li>
                    </ul>
                    <button onClick={handleRemoveAll}>Borrar Todo</button>
                </div>

                {localPhotos.length === 0 ? (
                    <p>No hay fotos guardadas</p>
                ) : (
                localPhotos.map(photo => (
                    <div key={photo.id} className="dashboardList__item">
                        <div className="dashboardList__item__image">
                            <img className="dashboardList__item__image__img" src={photo.urls.full} alt={photo.user.name} />
                            <div className="dashboardList__item__image__overlay">
                                <img 
                                className="dashboardList__item__image__overlay__ico" 
                                onClick={() => handleRemove(photo.id)} 
                                src="/assets/icos/delete.svg" 
                                alt="delete" 
                                />
                            </div>
                        </div>
                        <div className="dashboardList__item__info">
                            <div className="dashboardList__item__info__description">
                                <h3 className="dashboardList__item__info__description__title">descripción</h3>
                                {
                                editing[photo.id] 
                                ? 
                                <textarea 
                                value={description[photo.id] || ""} 
                                onChange={(e) => {setDescription({...description,[photo.id]: e.target.value})}}
                                onBlur={() => handleDescription(photo.id)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault()
                                        handleDescription(photo.id)
                                    }
                                }}
                                autoFocus
                                />
                                : 
                                <p className="dashboardList__item__info__description__desc">{photo.description ? photo.description : "descripción no disponible"}
                                <img src="/assets/icos/edit.svg" alt="edit" onClick={() => setEditing({ ...editing, [photo.id]: true })} />
                                </p>
                                }
                            </div>
                            <div className="dashboardList__item__info__metadatas">
                                <h3 className="dashboardList__item__info__metadatas__title">guardado</h3>
                                <p className="dashboardList__item__info__metadatas__description">{photo.savedAt || "Fecha no disponible"}</p>
                            </div>
                            <div className="dashboardList__item__info__metadatas">
                                <h3 className="dashboardList__item__info__metadatas__title">width</h3>
                                <p className="dashboardList__item__info__metadatas__description">{photo.width}px</p>
                            </div>
                            <div className="dashboardList__item__info__metadatas">
                                <h3 className="dashboardList__item__info__metadatas__title">height</h3>
                                <p className="dashboardList__item__info__metadatas__description">{photo.height}px</p>
                            </div>
                            <div className="dashboardList__item__info__metadatas">
                                <h3 className="dashboardList__item__info__metadatas__title">Likes</h3>
                                <p className="dashboardList__item__info__metadatas__description">{photo.likes}</p>
                            </div>
                        </div>
                    </div>
                )))}
            </main>
        </>
    )
}