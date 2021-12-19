import React from "react"
import cookie from "react-cookies"
import { connect } from "react-redux"
import BreadCrum from "../components/BreadCrum"
import ContainerFluid from "../components/ContainerFluid"
import Footer from "../components/Footer"
import LeftSidebar from "../components/LeftSidebar"
import MainContent from "../components/MainContent"
import MainHeader from "../components/MainHeader"
import Modals from "../components/Modals"
import Navbar from "../components/Navbar"
import RightSidebar from "../components/RightSidebar"
import Routes from "./routes";

function Panel(){
    const logOut = () => {
        cookie.remove("cred")
        location.reload()
    }

    return (
        <div>
            <div className="app-sidebar__overlay"/>
            <MainContent>
                <MainHeader />
                <ContainerFluid>
                    <BreadCrum />
                    <Navbar />
                    <LeftSidebar />
                    <Routes />
                </ContainerFluid>
            </MainContent>
            <RightSidebar />
            <Modals />
            <Footer />
        </div>
    )
}

export default connect()(Panel)