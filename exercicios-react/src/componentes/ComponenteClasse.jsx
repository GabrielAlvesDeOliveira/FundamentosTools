import React, { Component } from 'react'

export default class ComponenteClass extends Component{
    render(){
        return (
            <h1>{this.props.valor || 'padrao'}</h1>
        )
    }
}