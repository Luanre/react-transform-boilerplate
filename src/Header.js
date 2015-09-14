import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './HeaderStyles.css';

export default class Header extends Component {
    render () {
        return (
            <div>
                <li className={styles.item}><Link to="home">Home</Link></li>
                <li className={styles.item}><Link to="gallery">Gallery</Link></li>
                <li className={styles.item}><Link to="todolist">ToDo list</Link></li>
                <hr />
            </div>
        )
    }
}