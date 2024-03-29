import React from 'react';
import axios from 'axios';
import './App.css'

class App extends React.Component{
    state={advice:''}

    //react life cycle component
    componentDidMount(){
        this.fetchAdvice()
    }

    fetchAdvice=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const {advice} = response.data.slip;
           
            this.setState({advice})

        })
        .catch((error)=>{
            console.log(error);
        })
    }

    render(){
        const {advice} =  this.state
        return(
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button onClick={this.fetchAdvice}>
                        <span>Give Me Advice</span>
                    </button>
                </div>
            </div>
            
        )
    }
}

export default App;