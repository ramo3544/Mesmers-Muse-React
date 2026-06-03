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
import youtubeMusicIcon from "../assets/youtube-music-icon.svg";

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
                    <h2 className='body-subheading mt-5'>MISTS OF AVERY</h2>
                    <div>
                        <p className='fs-5 text-white'>
                            Mists Of Avery is the artist name of its creator, Mitch Hunter. 
                            Mitch grew up in Lancaster SC, a town 30 miles south of Charlotte NC. 
                            Music has always been a vital part of Mitch's life, dating back to piano lessons beginning at age 7, 
                            the composition of his first piano piece entitled “Destiny” at age 12 (an ironic foretelling of things to come),
                            and attaining first chair trombone in Lancaster High School band. 
                            After earning a bachelor's degree in music from Furman University and master's degree in music from University of Tennessee, 
                            Mitch spent the majority of his life working in church music, as well as providing guitar, keys, and vocals in various cover bands through the years. 
                            The "Avery" in the artist name refers to his affection for Avery County in the mountains of North Carolina (his beloved “home away from home”). 
                            Often referred to as “the Highlands,” the area has deep Scots-Irish roots dating back to its earliest settlers, who brought their mandolins, fiddles, dulcimers and more from their various homelands. 
                            Due to this rich musical heritage, the Appalachian Mountains are considered the birthplace of today’s bluegrass, folk, blues, and country music genres. 
                            Mists of Avery offers a modern melting pot of different genres and styles, featuring at times the folk instruments and drone notes of Celtic music, but also incorporating influences of jazz and popular music. 
                            Many of the compositions invoke the flavors, personalities, and even names of Avery County’s charming communities, including Elk Park, Crossnore, and Newland.
                            Mitch Hunter and his wife Kim currently make their home in Concord NC, frequently vacationing at various rental cabins and cottages in Avery and Watauga counties. They look forward to a permanent relocation to Avery County in summer of 2028.
                        </p>
                        <h3 className='body-subheading mt-5 pb-lg-5'>SUITE: ANNUS EXPECTANDI</h3>
                        <p className='fs-5 text-white pb-5'>
                            Mists of Avery’s debut album is entitled SUITE: ANNUS EXPECTANDUS, which is Latin for “year of waiting.” 
                            It is a refreshing stroll through the seasons of the year using reflective music, and in some cases the sounds of nature, to invite the listener to join the journey. 
                            The spirit and heart of the album is best expressed in the Latin proverb, “Tempora mutantur, nos et mutamur in illis,” which translates as “Seasons change, and we also change with them.”
                        </p>
                        <div>
                            <ul className='fs-5 text-white text-start'>
                                <li>“Prelude: Tempora Mutantur” features Celtic-influenced melodies and instrumentation including mandolin, low “drone” notes, and percussion to depict the inspiring grandeur of the mountains.<br/><br/></li>
                                <li>“Welcome Spring” employs a four-note chord provided by a set of backyard windchimes, adding and then removing musical layers based on those four notes.<br/><br/> </li>
                                <li>“Cloudburst in Elk Park” and “Full Bloom: Crossnore” use natural sounds of a thunderstorm and bird songs, respectively, as a canvas upon which the songs are painted.<br/><br/></li>
                                <li>“Sultry August Night” features the counter-rhythmic ostinato of Appalachian cicadas and tree frogs to underpin a lush callback to jazz combos of the late 50’s and early 60’s.<br/><br/></li>
                                <li>“Fall Arrives/ Fall Leaves” offers the sounds of wind rustling though falling leaves to remind the listener of the beauty and melancholy of the trees’ last burst of glory for the year.<br/><br/></li>
                                <li>“Christmas in Newland/ Icy Branches” is nostalgic and childlike by design, inviting the listener to recall (or imagine) that “best snowfall ever” when they were a child, with all its wonder, delight, and joy.<br/><br/></li>
                                <li>The journey concludes with a walk through an ice-glazed forest (with the “ice” depicted via percussive instruments), finishing with the subtle windchimes’ reminder that the cycle will soon begin anew.<br/><br/></li>
                            </ul> 
                        </div>
                    </div>
                    <div>
                        <h5 className='body-subheading mt-5 pb-lg-5'>MISTS OF AVERY'S "SUITE: ANNUS EXPECTANDI"<br/><br/>
                            (Released 2025 By Mesmer's Muse Records)<br/><br/>
                            Listen to Preview Here!
                        </h5>
                    </div>
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
                            <img alt='tidal-logo' className='' width='40' height='50' src={youtubeMusicIcon}></img>
                        </button>
                    </div>
                    <div className='container-fluid text-center'>
                        <h3 className='body-subheading mt-5 pb-lg-5'>For more info on Mesmer's Muse Records</h3>
                        <h4 className='body-subheading'>Click Here</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
