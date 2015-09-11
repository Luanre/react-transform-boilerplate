import React, { Component } from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import { App } from './App.js';
import Home from './Home';
import Gallery  from './Gallery';
import { NotFound } from './NotFound.js';

export let routes = (
        <Route handler={App} path="/">
            <DefaultRoute handler={Home} />
            <Route name="home" handler={Home} />
            <Route name="gallery" handler={Gallery} />
            <Route name="404" handler={NotFound} />
            <NotFoundRoute handler={NotFound} />
        </Route>
    );