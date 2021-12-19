import React, {useEffect} from "react";
import {
    Route,
    Routes,
    Navigate,
    HashRouter
  } from "react-router-dom";
import cookie from 'react-cookies';
import {ItrApiService} from '@afiplfeed/itr-ui'
import Panel from "./Layout/Panel";
import Login from "./containers/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'ti-icons/css/themify-icons.css'
import './assets/index.scss'
import "react-datepicker/dist/react-datepicker.min.css"

export default function App () {

    useEffect(() => {
        ItrApiService.CONFIG(process.env.ENV, process.env.BASEURL, process.env.SITE,
            "chandrasekar", "01", 'IND');
    }, []);


    return (
        <HashRouter>
            {
                !cookie.load("cred") ?
                    (
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/" element={<Navigate to="/login" />} />
                        </Routes>
                    ) : (
                        <div className="page">
                            <Panel />
                        </div>
                    )
            }
        </HashRouter>
    )
}