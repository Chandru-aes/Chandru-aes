import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import Forecasting from "../pages/Forecasting";
import StyleList from "../pages/Style";
import StyleCreate from "../pages/Style/StyleCreate";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/fore-casting" element={<Forecasting />} />
            <Route path="/style-list" element={<StyleList />} />
            <Route path="/style-create" element={<StyleCreate />} />
            <Route path="/" element={<Navigate to="/fore-casting" />} />
        </Routes>
    )
}

export default AllRoutes;