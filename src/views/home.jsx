import Header from "../components/common/header"
import Modal from "../components/common/modal"
import ImagesList from "../components/home/imagesList"
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