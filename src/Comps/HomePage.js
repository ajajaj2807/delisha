import React, { Component } from 'react'
import '../Styles/HomePage.scss'

export class HomePage extends Component {
    render() {
        return (
            <div className="home-w">
                <div className="latest-w">
                    <div className="latest-w-image"></div>
                    <div className="latest-w-info">
                        <span className="latest-w-info-label">Latest</span>
                        <h2 className="latest-w-info-title">
                            Case: Emerging fashion trends of 2019
                        </h2>
                        <a className="latest-w-info-rm" href="#">Explore</a>
                    </div>
                </div>
                <div className="with-sidebar-w">
                    <div className="ws-main-w">
                    <h2> Browse your favourites</h2>
                    <div className="labels-w">
                        <span>fashion</span>
                        <span>beauty</span>
                        <span>travel</span>
                        <span>food</span>
                    </div>
                    </div>
                    <div className="ws-sidebar-w">
                        <h2>You may like</h2>
                        <div className="sidebar-card-w">
                            <span className="card-info">01</span>
                            <h3> Around the world fashion update </h3>
                            <p> A simple survey conducted across various 
                                countries to find out various fashion trends.
                            </p>
                            <a href="#" className="rm-btn">Read More</a>
                        </div>
                        <div className="sidebar-card-w">
                            <span className="card-info">02</span>
                            <h3> Change of trends threat to companies </h3>
                            <p> Fashion trends across the globe have been changing
                                at an alarming rate and that is a matter of concern.
                            </p>
                            <a href="#" className="rm-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
