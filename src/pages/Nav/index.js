//导航组件

import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render(){
        return (
            <div>
                <Link to='/demo'>demo</Link>
                <Link to='/hello'>hello</Link>
                <Link to='/imageViewer'>imageViewer</Link>
            </div>
        ) 
    }
}
export default Nav