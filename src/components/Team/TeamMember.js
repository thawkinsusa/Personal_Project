import React, { Component } from 'react'
import { getTeam } from '../../ducks/teamReducer';
import { getTeamHeroes, deleteTeamHero } from '../../ducks/heroReducer'
import { connect } from 'react-redux';
import './TeamMember.css'
import TeamManagement from './TeamManagement';

class TeamMember extends Component {
    componentDidMount() {
        this.props.getTeamHeroes(this.props.user.user.id)
    }
    kick = (hero_id) => {
       
        let teamId = this.props.teamId
        this.props.deleteTeamHero(hero_id, teamId)

    }

    render() {
     
        if(this.props.team.team.length)
        {return (
           <div className='team-member-container'>
               {this.props.teamHeroes.teamHeroes.map(member => <div className='team-member' key={member.id}><div className='member-img-container'><img src={member.hero_image} className='team-member-photo-container' /></div><div classname='member-db-info'>{member.hero_name}</div><button className='kick' onClick={() => {this.kick(member.id)}}>Kick Member</button></div>)}
            </div> 
        )}
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
            { getTeam, getTeamHeroes, deleteTeamHero }
        )(TeamMember);



