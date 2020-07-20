import React from 'react';

import Person from './Components/Person';
import Water from './Components/Water';
import HeartRate from './Components/HeartRate';
import Temperature from './Components/Temperature';

class App extends React.Component{


    constructor(state) {            
        super(state)
        this.state = {
            water: 1.5,
            heart : 120,
            temperature : -10,
            steps : 3000,
            waterStep : 0,
            waterHeart : 0,
            waterTemperature : 0,
        };
        this.onStepsChange = this.onStepsChange.bind(this);
        this.onHeartChange = this.onHeartChange.bind(this);
        this.onTemperatureChange = this.onTemperatureChange.bind(this);
    }

    onStepsChange(val){
        this.onCalculateWater(val,"steps");
        this.setState({
            steps: val,
        });
    }
    onHeartChange(val){
        this.onCalculateWater(val,"heart");
        this.setState({
            heart: val,
        });
    }
    onTemperatureChange(val){
        this.onCalculateWater(val,"temperature");
        this.setState({
            temperature: val,
        });
    }
    onCalculateWater(val,swf){
        if( swf === 'steps' ){            
            if( val > 10000 ){            
                let temp = val * 0.00002;       
                this.setState({
                    waterStep: temp,
                });       
            }else{
                this.setState({
                    waterStep: 0,
                }); 
            }
        }

        if( swf === 'heart' ){
            if( val > 120 ){
                let temp = val * 0.0008;  
                this.setState({
                    waterHeart: temp,
                });  
            }else{
                this.setState({
                    waterHeart: 0,
                });  
            }  
        }

        if( swf === 'temperature' ){              
            if( val > 20 ){              
                let temp = val * 0.02;  
                this.setState({
                    waterTemperature: temp,
                });   
            }else{
                this.setState({
                    waterTemperature: 0,
                });  
            }
        }
            console.table(1.5,"|", this.state.waterHeart,"|", this.state.waterStep,"|", this.state.waterTemperature )
        var tot_water = this.state.waterHeart + this.state.waterStep + this.state.waterTemperature + 1.5;

        this.setState({
            water : tot_water
        });
    }

    render(){

        document.title = "Elsy";

        const MIN_TEMPERATURE = -20;
        const MAX_TEMPERATURE = 40;

        const MIN_HEART = 80;
        const MAX_HEART = 180;

        const MIN_STEPS = 0;
        const MAX_STEPS = 50000;

        return(
            <div className="row mx-0">
                <Water
                    water={this.state.water.toFixed(2)}
                />
                <Person 
                    min={MIN_STEPS} 
                    max={MAX_STEPS} 
                    onChange={this.onStepsChange} 
                    steps={this.state.steps}
                />
                <HeartRate 
                    min={MIN_HEART} 
                    max={MAX_HEART} 
                    onChange={this.onHeartChange} 
                    heart={this.state.heart} 
                />
                <Temperature 
                    min={MIN_TEMPERATURE} 
                    max={MAX_TEMPERATURE} 
                    onChange={this.onTemperatureChange} 
                    temperature={this.state.temperature} 
                />
            </div>
        );
    }

}

export default App;