import React, { Component } from 'react'
import './TeamDisplay.css'
class BattleDisplay extends Component {
    constructor(){
        super()
        this.state={
            displayAttackOnePunch:false,
            displayAttackGenos:false
        }
    }
    attack() {

        let attack = 100
        console.log('DAMAGE', {attack})
        let health = document.getElementById("health-m")
        health.value -= attack


    }
    toggleOne = () => {
        this.setState({ displayAttackOnePunch: !this.state.displayAttackOnePunch })

    }
    render() {
        return (
            <div>
                <img src='http://www.sclance.com/backgrounds/cartoon-backgrounds/cartoon-backgrounds_488267.png' className='main-container' />main continer
                {
                    this.state.displayAttackOnePunch
                        ? (
                            <div>
                                <img src='https://media1.giphy.com/media/oZTBL4vOswrT2/giphy.gif?cid=790b76115d4a38cb4b5357366f55d650&rid=giphy.gif' className='main-container'/>
                            </div>
                        )
                        : (
                            null
                        )
                }
                <div className='char-list'>
                    <div className='img-holder-one'>
                        <div className='img-one-background'>
                <img src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Folliebarder%2Ffiles%2F2018%2F05%2Fonepunchman_season2-1200x675.jpg'className='image-container-1' />
                <progress id="health" value='100' max="100"></progress>
                <button onClick={this.attack}></button>
                            <button onClick={this.toggleOne}>Attack</button>
                        </div>
                    </div>
                    </div>
                        <div className='char-info'>
                </div>
                <div className='char-list-2'>
                    <div className='img-holder-2'>
                        <div className='img-2-background'>
                <img src='https://i.gyazo.com/7540a639bc3b08756bac062e319ebb7d.png'className='image-container-2' />
                <progress id="health-m" value='100' max="100"></progress>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}
export default BattleDisplay