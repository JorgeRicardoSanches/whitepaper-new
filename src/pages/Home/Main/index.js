
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.less'
class MainContent extends Component
{
    render()
    {
        return(
            <>
            <div className="main">
                <ul>
                    <li>
                        <Link to='/'>Summary</Link>
                    </li>
                    <li className="active">
                        <Link to='/'>Introduction</Link>
                    </li>
                    <li>
                        <Link to='/'>Solving the Equity Inequity</Link>
                        <ul>
                            <li>
                                <Link>How the CSO Works:</Link>
                            </li>
                            <li>
                                <Link>The CSO Lifecycle:</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/'>Fairmint’s CSO Web Application</Link>
                        <ul>
                            <li>
                                <Link>Pricing and Trading Tokens:</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/'>Illustrative CSO Example from an Investor’s Perspective</Link>
                    </li>
                    <li>
                        <Link to='/'>Illustrative CSO Example from a Founder’s Perspective</Link>
                    </li>
                </ul>
            </div>
            </>
        )
    }
}

export default MainContent