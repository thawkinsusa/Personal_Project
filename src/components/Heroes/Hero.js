import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTeamHero } from '../../ducks/heroReducer';
import './Hero.css'
class Hero extends Component {

    addHero = () => {
        let userId = 1
        let  teamId  = 1
        let  heroId  = this.props.hero.id;
        this.props.addTeamHero(userId, teamId, heroId)
        
    };
    
    render() {
        console.log('props', this.props);


        return (
            <div className="heros-container">

                <div className='hero-list'>

                    <div className='hero'>
                        <p><button className='add-hero' onClick={this.addHero}><img src={this.props.hero.hero_image} className='image-container' /></button></p>
                    </div>
                </div>

            </div>
        )
    }

}






export default connect(
    null,
    { addTeamHero }
)(Hero);
