import Header from "../components/common/header"
import ImagesList from "../components/home/imagesList"
import Modal from "../components/home/modal"
import { useState } from "react";

export default function Home() {

    const [active, setActive] = useState(false);

    return (
        <>
            <Header />
            <ImagesList setActive={setActive}/>
            <Modal active={active} setActive={setActive} />
        </>
    )
}