import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }
    activeitem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });

    };
    render() {
        return (
            <nav className='mapNav'>
                <ul>
                    <Navitem item="Community" tolink="/" activec={this.activeitem}></Navitem>
                    <Navitem item="Location" tolink="/map" activec={this.activeitem}></Navitem>
                    <Navitem item="Menu" tolink="/menu" activec={this.activeitem}></Navitem>
                </ul>
            </nav>

        )
    }
}

export default Navbar
