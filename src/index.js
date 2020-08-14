import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
// import * as Keycloak from 'keycloak-js'

// let initOptions = {
//   url: 'http://10.12.42.138:7080/auth/', realm: 'employee-engage-realm', clientId: 'employee-engage-client'
// }

// let keycloak = Keycloak(initOptions);

// keycloak.init({ onLoad: "login-required" }).success((auth) => {

//     if (!auth) {
//         window.location.reload();
//     } else {
//         console.info("Authenticated");
//     }

//     //React Render
//     ReactDOM.render(<Router><App date={new Date()} /></Router>, document.getElementById('root'));
//     console.log(keycloak)
//     localStorage.setItem("react-token", keycloak.token);
//     localStorage.setItem("react-refresh-token", keycloak.refreshToken);

//     setTimeout(() => {
//         keycloak.updateToken(70).success((refreshed) => {
//             if (refreshed) {
//                 console.debug('Token refreshed' + refreshed);
//             } else {
//                 console.warn('Token not refreshed, valid for '
//                     + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
//             }
//         }).error(() => {
//             console.error('Failed to refresh token');
//         });
//     }, 60000)

// }).error(() => {
//     console.error("Authenticated Failed");
// });

ReactDOM.render(<Router><App date={new Date()} /></Router>, document.getElementById('root'));