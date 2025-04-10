import Header from "../components/common/header"
import Modal from "../components/common/modal"
import ImagesList from "../components/home/imagesList"
import { useState } from "react";

export default function Home() {

    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState(null);

    return (
        <>
            <Header />
            <ImagesList setActive={setActive} setSelected={setSelected} />
            <Modal active={active} setActive={setActive} item={selected} />
        </>
    )
}