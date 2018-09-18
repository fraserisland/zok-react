import React from 'react'

import './styles.css'
import Header from '../../components/Header'
import About from '../../components/About'
import headImg from '../../static/zokusha-header.jpg'

class HomePage extends React.Component {
    state={
        readMore: false
    }

    toggleReadMore = () => {
        this.setState({readMore: !this.state.readMore})
    }

    render() {
        return (  
            <div className="homepage__container">
                <Header 
                    title="Home"
                    subTitle="Zokusha Tribe"
                    description="Zokusha Tribe represents nothing more than your local street racers - only in Japan"
                    img={headImg}
                />
                <About 
                    readMore={this.state.readMore}
                    toggleReadMore={this.toggleReadMore}
                />
            </div>
        );
    }
}
 
export default HomePage;