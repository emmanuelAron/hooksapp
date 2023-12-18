import React, {Component} from 'react'

class ClassState extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             counter: 0
        }
    }
    

    render(){
        return(
            <div>
                <p>Class State: {this.state.counter}</p>
            </div>
        )
    }
}

export default ClassState