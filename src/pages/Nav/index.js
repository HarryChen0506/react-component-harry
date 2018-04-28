//导航组件

import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './nav.scss'

class Nav extends React.Component {
    render(){
        return (
            <div className="nav">
               {this.props.children}
            </div>  
        ) 
    }
}
export default Nav