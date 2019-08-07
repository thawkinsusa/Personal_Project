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
                <img src='https://i.ytimg.com/vi/JzqYAj0FDeo/maxresdefault.jpg'className='image-container-1' />
                <progress id="health" value='100' max="100"></progress>
                            <button onClick={this.toggleOne}>Attack</button>
                        </div>
                    </div>
                    </div>
                        <div className='char-info'>
                </div>
                <div className='char-list-2'>
                    <div className='img-holder-2'>
                        <div className='img-2-background'>
                <img src='https://i.ytimg.com/vi/JzqYAj0FDeo/maxresdefault.jpg'className='image-container-2' />
                <progress id="health" value='100' max="100"></progress>
                            <button onClick={this.toggleOne}>Attack</button>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}
export default BattleDisplay