import React from 'react'

import './styles.css'

const About = (props) => {
    return ( 
        <div className="about__container">
            <h2> // About The Tribe</h2> 
            <div className="about__para">
                <p className="about__text">Zokusha kids are nothing more than your local street racers – but in Japan. The term Zoku 族 means tribe and/or clan, it is often used as a suffix to subcultures within Japan. Groups started appearing among Japanese youth after WWII in the 1950’s and 60’s; a novel called Season of the Sun, by Shintaro Ishihara, gave rise to a reckless and care-free generation. </p>
            </div>
            { props.readMore &&
                <div>
                    <div className="about__para">
                        <p className="about__text">‘Street’ groups continued to manifest into the 70’s, 80’s, and 90’s with a booming car culture ranging from highway racers(Roulette-zoku or Circuit-zoku), drag racers(Zeroyon-zoku), drifters(Dorifto-zoku), Vanners (Vanning-zoku), Touge battlers(Rolling-zoku), and of course Bakusozoku – Boso tribe. ZokuSha kids are commonly mis-labeled as BosoZoku, meaning violent running-tribe or violent speed-tribe – another term, used to describe the motorcycle gangs that sprang up in the rapid automotive industry expansion of the 1950’s. </p>
                    </div>
                    <div className="about__para">
                        <p className="about__text">The first BosoZoku were known as kaminari-zoku or Lightning-tribe and mostly came from lower socioeconomic classes and publicly displayed their disaffection and dissatisfaction with Japanese mainstream society. There is a group/style reffered to as Kaido Racer which is be a mashup of ZokuSha and BosoZoku. They drive ‘BosoZoku’ styled cars slowly down highways while zig-zgging and revving their engines, often with passengers hanging out the windows waving bats and flags and accompanied by BosoZoku bikes.</p>
                    </div>
                </div>
            }
            <p className="link" onClick={props.toggleReadMore}>{props.readMore ? 'Show less ': 'Show more' }</p>
        </div>
    );
}

export default About;