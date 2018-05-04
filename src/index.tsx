import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { app, initApp } from './app/app';
import { DevConfig } from './app/config';
import { Root } from './pages/root';

initApp(new DevConfig());

app.mount((
    <BrowserRouter>
        <Root />
    </BrowserRouter>
), document.getElementById("example")!);
