import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hero from './Hero'
import './TeamUsersLoad.css'
import { getAllHeroes } from '../../ducks/heroReducer';
class Heroes extends Component {
    constructor() {
        super()
        this.state = {
            heroes: []
        }
    }
    componentDidMount() {

        this.props.getAllHeroes()
            .then(res => {
                console.log('res', res);
                this.setState({ heroes: res.value });
            })

    }

    render() {

        let { heroes } = this.state

        return (
            <div className="hero-container">


                <div>{heroes.map(hero => {
                    return (<div>
                        <Hero hero={hero} key={heroes.id} ></Hero>
                    </div>)
                })}
                </div>

            </div>

        )
    }

}

function mapStateToProps(state) {
    return { heroes: state.heroes };
}

export default connect(
    mapStateToProps,
    { getAllHeroes }
)(Heroes);