import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
export default function Community() {
    return (
        <div className='condiv'>
            <div className="row">
                {/* <div className="column">
                    <div className="card">
                        <img src="img1.jpg" alt="Jane" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Jane Doe</h2>
                            <p className="title">CEO &amp; Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>example@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="img2.jpg" alt="Mike" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Mike Ross</h2>
                            <p className="title">Art Director</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>example@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="img3.jpg" alt="John" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>John Doe</h2>
                            <p className="title">Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>example@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div> */}

                <Parallax pages={4}>
                    <ParallaxLayer
                        offset={0}
                        speed={0.1}
                        style={{ backgroundColor: 'red' }} />
                    <ParallaxLayer
                        offset={0}
                        speed={0.5}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // color: 'white',
                            // height: 600
                        }}>
                        <div className="column">
                            <div className="card">
                                <img src="img1.jpg" alt="Jane" style={{ width: '100%' }} />
                                <div className="container">
                                    <h2>Jane Doe</h2>
                                    <p className="title">CEO &amp; Founder</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>example@example.com</p>
                                    <p><button className="button">Contact</button></p>
                                </div>
                            </div>
                        </div>


                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={0.3} style={{ backgroundColor: '#ff6d6d' }} />
                    <ParallaxLayer
                        offset={1}
                        speed={0.5}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // color: 'white',
                            // height: 600
                        }}>
                        <div className="column">
                            <div className="card">
                                <img src="img1.jpg" alt="Jane" style={{ width: '100%' }} />
                                <div className="container">
                                    <h2>Jane Doe</h2>
                                    <p className="title">CEO &amp; Founder</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>example@example.com</p>
                                    <p><button className="button">Contact</button></p>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={2} speed={0.3} style={{ backgroundColor: '#ff6d6d' }} />
                    <ParallaxLayer
                        offset={2}
                        speed={0.5}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            height: 600
                        }}>
                        <div className="column">
                            <div className="card">
                                <img src="img1.jpg" alt="Jane" style={{ width: '100%' }} />
                                <div className="container">
                                    <h2>Jane Doe</h2>
                                    <p className="title">CEO &amp; Founder</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>example@example.com</p>
                                    <p><button className="button">Contact</button></p>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={3} speed={0.3} style={{ backgroundColor: '#abcdef', height: 600, }} />
                    <ParallaxLayer
                        offset={3}
                        speed={0.5}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            height: 600
                        }}>
                        <div className="column">
                            <div className="card">
                                <img src="img1.jpg" alt="Jane" style={{ width: '100%' }} />
                                <div className="container">
                                    <h2>Jane Doe</h2>
                                    <p className="title">CEO &amp; Founder</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>example@example.com</p>
                                    <p><button className="button">Contact</button></p>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>
                </Parallax>
            </div>
        </div>
    )
}