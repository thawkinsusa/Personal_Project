import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTeam } from '../../ducks/teamReducer';
import { Link } from 'react-router-dom'
import './TeamManagement.css'
import { Redirect } from 'react-router-dom'
import TeamMember from './TeamMember'
import Heroes from '../Heroes/Heroes'
class TeamManagement extends Component {
    componentDidMount() {

        this.props.getTeam(this.props.user.user.id);

    }
    render() {

        if (!this.props.user.user.loggedIn) {
            return <Redirect to='/login' />
        }

        if (this.props.team.team[0]) {
            let { team } = this.props;
            console.log('team', team)
            return (
                <div className='teamManagement'>
                    <div className='teamManagement-container'>
                        <div className='teamManagement-user-contents-container'>
                            <div className='teamManagement-img-container'>
                                <img src={team.team[0].team_image} className='dashboard-img' />
                                <div className='teamManagement-user-bottom-info-after-icon-container'>
                                    <div className='teamManagement-main-team-container'> {team.team[0].team_name}
                                        <div className='teamManagement-team-container'>
                                            <div className='teamManagement-team-info'>
                                                <img src={team.team[0].team_image} className='team-photo-container' />
                                            </div>
                                            {(team.team.length) ? <TeamMember teamId={team.team[0].id} /> : null}
                                        </div>
                                    </div>
                                </div>
                                <div className='hero-container'>
                                    <Heroes className='teamManagement-heroes'></Heroes>
                                </div>
                            </div>
                            <div className='teamManagement-user-info-top-container'>
                                <div className='teamManagement-db-info'>Memeber since: {team.team[0].team_creation_date}</div>
                                <div className='teamManagement-db-info'>team:{team.team[0].team_name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<div>

                <Link to='/TeamSignup'>
                    <div className='team-captain'>
                    </div>
                    <button>Create Team</button>
                </Link>
            </div>)
        }
    }
}
function mapStateToProps(state) {
    return { team: state.team, user: state.user };
}

export default connect(
    mapStateToProps,
    { getTeam }
)(TeamManagement);
