import { useState } from 'react'
import '../stylesheets/body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import suiteAnnusExpectandiAlbumCover from '../assets/album-photos/suite-annus-expectandi-album-cover.jpg';
import { HashLink as Link} from "react-router-hash-link";
import 'bootstrap-icons/font/bootstrap-icons.css'

//https://getbootstrap.com/docs/5.3/components/carousel
//https://getbootstrap.com/docs/5.3/components/collapse
//https://getbootstrap.com/docs/5.3/components/accordion


export function Body() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div id="body" className='body-background container-fluid d-flex align-items-top min-vh-100'>
                <div id='mesmers-muse-section' className="container-lg text-center">
                    <div id='about-us' className="mt-4">
                        <div className="col">
                            <h1 className='body-heading pt-5'>Mesmer’s Muse Records</h1>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div>
                            <h2 className='body-subheading pb-3'>About Us</h2>
                            <h3 className='h3 text-white'>What's in a name?</h3>
                            <p className='fs-5 text-white'>
                                Most people have heard or used the word “mesmerize” from time to time. However, many do
                                not realize that the term emerged from the ideas and practices of Franz Anton Mesmer
                                (1734-1815),
                                a German physicist who believed in the existence of a natural energy force shared
                                between all animate and inanimate objects, which he called “animal magnetism,” also
                                known as “mesmerism.”
                                Mesmer believed that true personal and social health was achieved by the balance and
                                free flow of this magnetic energy from person to person. This idea eventually led to his
                                creation of a
                                device he called a <em>“baquet,”</em> which allowed small groups of people to achieve
                                balance of their “energies” together at once. (Mesmer’s drawing of this device is
                                featured in our logo.)
                                Instead of keeping his “big idea” to himself and dooming it to shrivel up in a dusty
                                cabinet somewhere, Mesmer dared to cultivate it, to pursue it, and to allow his belief
                                in this energy
                                (his “muse”) to become the all-consuming driving force of his entire life.
                            </p>
                            <p className='fs-5 text-warning'>
                                Ironically,
                                the word <em>“mesmerize”</em> has come to be defined as:
                            </p>
                            <p className='fs-5 blockquote text-warning'>
                                <em>“to hold the attention of a person to the
                                    exclusion
                                    of all else or so as to transfix them.”</em><br/><br/>
                            </p>
                            <h4 id='get-connected' className='h4 text-white'>Our Mission</h4>
                            <p className='fs-5 text-white'>
                                Mesmer’s Muse Records mission is to encourage and enable music artists to pursue, to
                                perfect, and to fully realize their <em>muse</em>.<br/><br/>
                            </p>
                            <p className='body-subheading'>Bringing Big Ideas To Life, One Muse At A Time</p>
                        </div>
                        <div>
                            <h2 className='body-subheading'>Get Connected!</h2>
                            <p className='fs-5 text-white'>
                                Join our community to share your work, collaborate with us, and stay updated on the
                                latest updates in our growing community.
                            </p>
                            <p className='fs-4 text-info'>Follow us on social media for information on new content and
                                events.</p>
                            <button type='button' className='btn btn-primary m-2'>
                                <i href='#' className="bi bi-facebook h1"></i>
                            </button>
                            <button type='button' className='btn btn-secondary m-2'>
                                <i href='#' className="bi bi-instagram h1"></i>
                            </button>
                            <button type='button' className='btn btn-dark m-2'>
                                <i href='#' className="bi bi-twitter-x h1"></i>
                            </button>
                            <a href='mailto:info@mesmersmuse.com' className='btn btn-primary btn-lg m-2'>CONTACT US</a>
                        </div>
                        <h2 className='body-subheading pt-5 pb-3'>New Release!</h2>
                        <div id="carouselExampleCaptions" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1">
                                </button>
                            </div>
                            <div className="carousel-inner">
                                <Link to='/mists-of-avery/#mists-of-avery-band-section' className="text-decoration-none text-dark">
                                    <div className="carousel-item active">
                                        <img src={suiteAnnusExpectandiAlbumCover} className="mx-auto img-thumbnail d-block w-75 pb-2" alt="Mists of Avery Band Cover"/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Mists of Avery</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}