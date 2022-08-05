import { Routes, Route } from "react-router-dom";
import ClothingStore from "./clothing-store";
import Home from "./home";
import SavedSelection from "./saved-selection";

type Props = {}

const RouterComponent = (props: Props) => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothing-store" element={<ClothingStore />} />
            <Route path="/saved-selection" element={<SavedSelection />} />
        </Routes>
    )
}

export default RouterComponent