import Header from "../components/common/header"
import Modal from "../components/common/modal"
import ImagesList from "../components/home/imagesList"
import { useState } from "react";

export default function Home() {

    const [active, setActive] = useState(false);
    const [ keyword, setKeyword ] = useState("")

    return (
        <>
            <Header keyword={keyword} setKeyword={setKeyword} />
            <ImagesList setActive={setActive} keyword={keyword} />
            <Modal active={active} setActive={setActive} />
        </>
    )
}