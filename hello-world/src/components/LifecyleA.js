import React, { Component } from 'react'

class LifecyleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Byron'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFormProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                LifecycleA
            </div>
        )
    }
}

export default LifecyleA
