import React from 'react'
import './homepage.css'
export default function Homepage({ history }) {
    const enterSite = e => {
        e.preventDefault()
        history.push('/login')
    }

    return (
        <div className='container maint-cnt'>
            <div className="header-nav">
                <span className="mytext1"> SPY Travels </span>
            </div>
            
            <div className="">
            </div>

            <div className="container">
                <div className="slogan">
                    <h1>
                        <span><b>A Team of </b></span>
                        <div className="message">
                            <div className="word1">Hipster</div>
                            <div className="word2">Hacker</div>
                            <div className="word3">Hustler</div>
                        </div>
                    </h1>
    <h5>
                        <span><b>Members of</b></span>
                        <div className="message">
                            <div className="word4">S.Yuvaraj</div>
                            <div className="word5">H.Sunil</div>
                            <div className="word6">T.Parthasarathi</div>
                        </div>
                    </h5>
    <h6>
                        <span><b>VANO   :</b></span>
                        <div className="message">
                            <div className="word7">4685</div>
                            <div className="word8">4644</div>
                            <div className="word9">4701</div>
                        </div>
                    </h6>
                </div>

                <a href="/#" onClick={e => enterSite(e)} className="mainBtn">
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="#FF8282" />
                                <stop offset="100%" stopColor="#E178ED" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                    <span >Get Started!</span>
                </a>
            </div>
        </div>
    )
}


