import { useState } from 'react'
import '../stylesheets/band-mists-of-avery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Album cover and photos
import albumCover from "../assets/album-photos/suite-annus-expectandi-album-cover.jpg";
import welcomeSpring from "../assets/album-photos/spring-album-photo.jpg";
import cloudBurstFromElkPark from "../assets/album-photos/cloud-burst-in-elk-park.jpg";
import fullBloomCrossnore from "../assets/album-photos/full-bloom-album-photo.JPG";
import sultryAugustNight from "../assets/album-photos/sultry-august-night.jpg";
import fallArrivesFallLeaves from "../assets/album-photos/fall-arrives.jpg";
import snowfallInNewlandNew from "../assets/album-photos/snowfall-in-newland.jpg";

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

//Audio Player Component
import AudioPlayer from "./AudioPlayer.jsx";

export function Body() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div id="band-body" className='band-background container-fluid d-flex align-items-top min-vh-100'>
                <div className="container-lg text-center">
                    <h2 className='body-subheading mt-4'>MISTS OF AVERY</h2>
                    <p className='fs-5 text-white'>
                        Our band name refers to our love for Avery County, located in the mountains of western North Carolina, our spiritual (and soon to be our physical) home.
                        Avery County features rugged mountain terrain, including Grandfather Mountain, and has the highest average elevation of any U.S. county east of the Mississippi River.
                        Often referred to as “the Highlands,” the area has deep Scots-Irish roots dating back to the early settlers from Great Britain.
                        Due to this rich musical heritage, the Appalachian Mountains was the birthplace of today’s bluegrass, folk, blues, and country music genres.
                        Mists of Avery offers a modern melting pot of different genres and styles, featuring at times the folk instruments and drone structures of Celtic music, but also incorporating influences of jazz and popular music.
                        Many of our creations invoke the flavors, personalities, and names of Avery County’s lovely communities, including Elk Park, Crossnore, and Newland, for example.
                    </p>
                    <h3 className='body-subheading mt-5 pb-lg-5'>SUITE: ANNUS EXPECTANDI</h3>
                    <p className='fs-5 text-white pb-5'>
                        Our first album is entitled SUITE: ANNUS EXPECTANDUS, which is Latin for “year of waiting.”
                        It is a refreshing stroll through the seasons of the year using reflective music and, in some cases, the sounds of nature, to invite the listener to join the journey.
                        The album cover features the ancient Latin adage, “Tempora mutantur, nos et mutamur in illis,” which translates as “Seasons change, and we also change with them.”
                    </p>
                    <div className='container text-center'>
                        <div className='align-items-start'>
                            <div className='row'>
                                <div className='col pb-5'>
                                    <AudioPlayer songName='Prelude Tempora Mutantur' coverArtImg={albumCover} audioSrc={prelude_clip} />
                                </div>
                                <div className='col pb-5'>
                                    <AudioPlayer songName='Welcome Spring' coverArtImg={welcomeSpring} audioSrc={welcomeClip} />
                                </div>
                                <div className='col pb-5'>
                                    <AudioPlayer songName='Cloud Burst From Elk Park' coverArtImg={cloudBurstFromElkPark} audioSrc={cloudBurstClip} />
                                </div>
                                <div className='col pb-5'>
                                    <AudioPlayer songName='Full Bloom Crossnore' coverArtImg={fullBloomCrossnore} audioSrc={fullBloomClip}/>
                                </div>
                                <div className='col pb-5'>
                                    <AudioPlayer songName='Sultry August Night' coverArtImg={sultryAugustNight} audioSrc={sultryAugustNightClip} />
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col pb-5'>
                                    <AudioPlayer songName='Fall Arrives Fall Leaves' coverArtImg={fallArrivesFallLeaves} audioSrc={fallArrivesClip} />
                                </div>
                                <div className='col pb-5'>
                                    <AudioPlayer songName='Snowfall In Newland' coverArtImg={snowfallInNewlandNew} audioSrc={snowFallClip} />
                                </div>
                                <div className='col pb-5'>
                                    <AudioPlayer songName='Full Bloom Crossnore (Music Only)' coverArtImg={fullBloomCrossnore} audioSrc={fullBloomNMClip}/>
                                </div>
                                <div className='col pb-5'>
                                    <AudioPlayer songName='Sultry August Night (Music Only)' coverArtImg={sultryAugustNight} audioSrc={sultryAugustNMClip}/>
                                </div>
                                <div className='col pb-5'>
                                    <AudioPlayer songName='Snowfall In Newland (Music Only)' coverArtImg={snowfallInNewlandNew} audioSrc={snowFallNMClip}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
