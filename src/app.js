import React from 'react';
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.css';

const jsx = (
    <React.Fragment>
        <AppRouter />
    </React.Fragment>
);

ReactDOM.render(jsx , document.getElementById('app'));