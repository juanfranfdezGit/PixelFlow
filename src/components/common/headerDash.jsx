import { useNavigate } from "react-router-dom"

export default function HeaderDash() {
    
    const Navigate = useNavigate();

    return (
        <>
            <nav className="navMenu dashboard">
                <h1 className="navMenu__logo dashboard" onClick={() => Navigate('/')}>PixelFlow</h1>
                <button className="navMenu__button" onClick={() => Navigate('/')}>Volver</button>
            </nav>
        </>
    )
}