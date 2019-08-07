import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../ducks/userReducer';
import './Nav.css'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
    }


    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })

    }
    localLogOut = async () => {
        await this.props.logout()
        this.props.history.push('/login')
    }

    render() {

        return (
            <div className='nav-bar'>
                <div className='header'>
                    <div className='logo'>Battle.Me</div>
                    <div className='menu-options'>
                        <Link to='/signup' className='link-buttons'><button className='nav-link'> Register </button></Link>
                        <Link to='/dashboard' className='link-buttons'><button className='nav-link'> Dashboard </button></Link>
                        <Link to='/TeamPage' className='link-buttons'><button className='nav-link'> Team Page </button></Link>
                        <Link to={`/TeamManagement/${this.props.state.team.team[0] ? this.props.state.team.team[0].id : 999999}`}><button className='nav-link'>TeamManagement</button></Link>
                        <Link to='/donate' className='link-buttons'><button className='nav-link'> Donate! </button></Link>
                        <button onClick={this.localLogOut} className="nav-link-menu">Logout</button>
                    </div>
                    <button className='menu-btn-content' onClick={this.toggleMenu}><i class="fa fa-bars"></i>
                    </button>
                </div>
                {
                    this.state.showMenu
                        ? (
                            <div className="nav-menu"
                            >
                                <Link to='/signup'><button className='nav-link-menu'> Register </button></Link>
                                <Link to='/dashboard'><button className='nav-link-menu'> Dashboard </button></Link>
                                <Link to='/TeamPage'><button className='nav-link-menu'> Team Page </button></Link>
                                <button onClick={this.localLogOut} className="nav-link-menu">Logout</button>
                                <Link to={`/TeamManagement/${this.props.state.team.team[0] ? this.props.state.team.team[0].id : 999999}`}><button className='nav-link-menu'>TeamManagement</button></Link>
                                <Link to='/donate' className='link-buttons'><button className='nav-link-menu'> Donate! </button></Link>
                                <Link to='/login'><button className='nav-link-menu'> Login </button></Link>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { state };
}

export default withRouter(connect(
    mapStateToProps,
    { logout }
)(Nav));