import React, { Component } from 'react'
import { getTeam } from '../../ducks/teamReducer';
import { getTeamHeroes } from '../../ducks/heroReducer'
import { connect } from 'react-redux';
import './TeamMember.css'

class TeamMemberNonAdmin extends Component {
    componentDidMount() {
        this.props.getTeamHeroes(this.props.user.user.id)
    }

    render() {
        console.log('this props team and heroes', this.props);
        if (this.props.team.team.length) {
            return (
                <div className='heroes-container'>
                   <div className='team-member'> <div className='member-img-container'><img src={this.props.team.team[0].user_image} className='team-captain-photo-container' /></div><div classname='captain-db-info'> Captain: {this.props.team.team[0].user_name} <div className='captain-name'></div></div></div>
        
        { this.props.teamHeroes.teamHeroes.map(member => <div className='team-member' key={member.id}><div className='member-img-container'><img src={member.hero_image} className='team-member-photo-container' /></div><div classname='member-db-info'>{member.hero_name}</div></div>) }
            </div > 
        )
    }
        else {
    return <div>Loading</div>
}
        }
    }

function mapStateToProps(state) {
    return { team: state.team, user: state.user, teamHeroes: state.heroes };
}

export default connect(
    mapStateToProps,
    { getTeam, getTeamHeroes }
)(TeamMemberNonAdmin);



