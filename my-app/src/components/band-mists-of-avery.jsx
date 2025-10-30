import { useState } from 'react'
import '../stylesheets/band-mists-of-avery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'

// Album cover and photos
import albumCover from "../assets/album-photos/suite-annus-expectandi-album-cover.jpg";
import welcomeSpring from "../assets/album-photos/spring-album-photo.jpg";
import cloudBurstFromElkPark from "../assets/album-photos/cloud-burst-in-elk-park.jpg";
import fullBloomCrossnore from "../assets/album-photos/full-bloom-album-photo.JPG";
import sultryAugustNight from "../assets/album-photos/sultry-august-night.jpg";
import fallArrivesFallLeaves from "../assets/album-photos/fall-arrives.jpg";
import snowfallInNewlandNew from "../assets/album-photos/snowfall-in-newland.jpg";
import tidalLogo from "../assets/tidal-icon-transparent.png";

//Audio clips
import prelude_clip from "../assets/audio/1_Prelude_clip.mp3";
import welcomeClip from "../assets/audio/2_Welcome_clip.mp3";
import cloudBurstClip from "../assets/audio/3_Cloudburst_clip.mp3";
import fullBloomClip from "../assets/audio/4_FullBloom_clip.mp3";
import sultryAugustNightClip from "../assets/audio/5_Sultry_clip.mp3";
import fallArrivesClip from "../assets/audio/6_Fall_clip.mp3"
import snowFallClip from "../assets/audio/7_Snowfall_icy_clip.mp3";
import fullBloomNMClip from "../assets/audio/8_FullBloom_nm_clip1.mp3";
import sultryAugustNMClip from "../assets/audio/9_Sultry_nm_clip.mp3";
import snowFallNMClip from "../assets/audio/10_Snowfall_sgl_clip.mp3"
import suiteAnnusExpectandiAlbumCover from "../assets/album-photos/suite-annus-expectandi-album-cover.jpg";

//Audio Player Component
import AudioPlayer from "./AudioPlayer.jsx";


export function Body() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div id="mists-of-avery-band-section" className='band-background container-fluid d-flex align-items-top min-vh-100'>
                <div className="container-lg text-center">
                    <div>
                        <img src={suiteAnnusExpectandiAlbumCover} className="mx-auto img-thumbnail d-block w-50 pb-2"
                             alt="Mists of Avery Band Cover"/>
                    </div>
                    <div className="alert alert-success fade show mt-4" role="alert">
                        <h3 className="alert-heading">ALBUM DROP PARTY!</h3>
                        <h5>@Petty Thieves Brewing Co.</h5>
                        <p>413 Dalton Ave Suite B, Charlotte, NC 28206</p>
                        <>Next Sunday Nov. 9th @ Noon</>
                        <hr/>
                        <p className="mb-0">1st Beverage Of Your Choice (Bar or Food truck) ON US!</p>
                        <p> LUCKY DUCK Food Truck serving lunch (umm...NOT ON US!)</p>
                        <button type="button" className="btn-close alert-dismissible position-absolute top-0 end-0 me-3 mt-2" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <h2 className='body-subheading mt-5'>MISTS OF AVERY</h2>
                    <p className='fs-5 text-white'>
                        Our band name refers to our love for Avery County, located in the mountains of western North
                        Carolina, our spiritual (and soon to be our physical) home.
                        Avery County features rugged mountain terrain, including Grandfather Mountain, and has the
                        highest average elevation of any U.S. county east of the Mississippi River.
                        Often referred to as “the Highlands,” the area has deep Scots-Irish roots dating back to the
                        early settlers from Great Britain.
                        Due to this rich musical heritage, the Appalachian Mountains was the birthplace of today’s
                        bluegrass, folk, blues, and country music genres.
                        Mists of Avery offers a modern melting pot of different genres and styles, featuring at times
                        the folk instruments and drone structures of Celtic music, but also incorporating influences of
                        jazz and popular music.
                        Many of our creations invoke the flavors, personalities, and names of Avery County’s lovely
                        communities, including Elk Park, Crossnore, and Newland, for example.
                    </p>
                    <h3 className='body-subheading mt-5 pb-lg-5'>SUITE: ANNUS EXPECTANDI</h3>
                    <p className='fs-5 text-white pb-5'>
                        Our first album is entitled SUITE: ANNUS EXPECTANDUS, which is Latin for “year of waiting.”
                        It is a refreshing stroll through the seasons of the year using reflective music and, in some
                        cases, the sounds of nature, to invite the listener to join the journey.
                        The album cover features the ancient Latin adage, “Tempora mutantur, nos et mutamur in illis,”
                        which translates as “Seasons change, and we also change with them.”
                    </p>
                    <p className='fs-5 text-white pb-5'>
                        “Prelude: Tempora Mutantur” features Celtic-influenced melodies, instruments, and percussion to
                        convey the awe-inspiring grandeur of the mountains.
                        “Welcome Spring” employs a four-note chord provided by a set of backyard windchimes, adding and
                        then removing layer upon layer based on those four notes.
                        “Cloudburst in Elk Park” and “Full Bloom: Crossnore” use natural sounds of a thunderstorm and
                        bird songs, respectively, as a canvas upon which the songs are painted.
                        “Sultry August Night” features the counter-rhythmic ostinato of Appalachian cicadas and tree
                        frogs to underpin a lush callback to jazz combos of the late 50’s and early 60’s.
                        “Fall Arrives / Fall Leaves” offers the sounds of wind rustling though falling leaves to remind
                        the listener of the beauty and melancholy of the trees’ last burst of glory for the year.
                        “Christmas in Newland / Icy Branches” is nostalgic and childlike by design, inviting the
                        listener to recall that “best snowfall ever” when they were a child, with all its wonder,
                        delight, and joy.
                        The journey concludes with a walk through an ice-glazed forest, finishing with the subtle
                        windchimes’ reminder that the cycle will soon begin anew.
                    </p>
                    <div className='container-fluid text-center'>
                        <div className='align-items-start'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-2 pb-5'>
                                    <AudioPlayer songName='Prelude: Tempora Mutantur' coverArtImg={albumCover}
                                                 audioSrc={prelude_clip}/>
                                </div>
                                <div className='col-lg-2 pb-5'>
                                    <AudioPlayer songName='Welcome Spring' coverArtImg={welcomeSpring}
                                                 audioSrc={welcomeClip}/>
                                </div>
                                <div className='col-lg-2 pb-5'>
                                    <AudioPlayer songName='Cloudburst In Elk Park' coverArtImg={cloudBurstFromElkPark}
                                                 audioSrc={cloudBurstClip}/>
                                </div>
                                <div className='col-lg-2 pb-5'>
                                    <AudioPlayer songName='Full Bloom: Crossnore' coverArtImg={fullBloomCrossnore}
                                                 audioSrc={fullBloomClip}/>
                                </div>
                                <div className='col-lg-2 pb-5'>
                                    <AudioPlayer songName='Sultry August Night' coverArtImg={sultryAugustNight}
                                                 audioSrc={sultryAugustNightClip}/>
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-lg-2 pb-5'>
                                    <AudioPlayer songName='Fall Arrives / Fall Leaves'
                                                 coverArtImg={fallArrivesFallLeaves} audioSrc={fallArrivesClip}/>
                                </div>
                                <div className='col-lg-2 pb-5'>
                                    <AudioPlayer songName='Snowfall In Newland / Icy Branches'
                                                 coverArtImg={snowfallInNewlandNew} audioSrc={snowFallClip}/>
                                </div>
                                <div className='col-lg-2 pb-5'>
                                    <AudioPlayer songName='Full Bloom: Crossnore [music only]'
                                                 coverArtImg={fullBloomCrossnore} audioSrc={fullBloomNMClip}/>
                                </div>
                                <div className='col-lg-2 pb-5'>
                                    <AudioPlayer songName='Sultry August Night [music only]'
                                                 coverArtImg={sultryAugustNight} audioSrc={sultryAugustNMClip}/>
                                </div>
                                <div className='col-lg-2 pb-5'>
                                    <AudioPlayer songName='Snowfall In Newland [single]'
                                                 coverArtImg={snowfallInNewlandNew} audioSrc={snowFallNMClip}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid text-center'>
                        <h2 className='body-subheading h2 text-white mt-5 pb-3'>Available On All Streaming Platforms
                            Including:</h2>
                        <button type='button' className='btn btn-success btn-lg m-2 opacity-100' disabled={true}>
                            <i className="bi bi-spotify h1"></i>
                        </button>
                        <button type='button' className='btn btn-light btn-lg m-2 opacity-100' disabled={true}>
                            <i className="bi bi-apple h1"></i>
                        </button>
                        <button type='button' className='btn btn-info btn-lg m-2 opacity-100' disabled={true}>
                            <i className="bi bi-amazon h1"></i>
                        </button>
                        <button type='button' className='btn btn-secondary m-2 opacity-100' disabled={true}>
                            <img alt='tidal-logo' className='' width='40' height='50' src={tidalLogo}></img>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
