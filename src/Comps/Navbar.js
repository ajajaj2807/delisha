import React, { Component } from 'react'
import '../Styles/Navbar.scss'

export class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            search: false
        }
    }

    searchHandler = () => {
        this.setState({
            search: !this.state.search
        })
    }

    render() {
        return (
            <div className="nav-w">
                <div className="social-icons-w">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                </div>
                <div className="logo-w">DK</div>
                <div className="search-w">
                    <div className="menu-w">
                    <i class="fas fa-bars"></i>
                        MENU
                    </div>
                    <div className={ this.state.search ? "search-button-full-w" : "search-button-w"} >
                        {
                            this.state.search ? <div className="full-screen-search-w">
                                <h2> Search</h2>
                                <input className="search-box-i" placeholder="Type Something"></input>
                                <i class="search-b-fs fas fa-search"></i>
                                <i onClick={this.searchHandler} class=" close-modal-btn fas fa-times"></i>
                                 </div> : <i onClick={this.searchHandler} class=" sis fas fa-search"></i>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
