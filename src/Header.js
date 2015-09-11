import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    render () {
        return (
            <div>
                <Link to="home">Home</Link>
                <Link to="gallery">Gallery</Link>
            </div>
        )
    }
}