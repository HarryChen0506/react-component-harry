/**
 * 路由
 */
import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import AppNav from '../pages/Nav';
import Demo from '../pages/Demo';
import ImageViewer from '../pages/ImageViewer/Example';
import JsTool from '../pages/JsTool';


function Hello(props){
    return <div>Hello</div>
}
class AppRoute extends React.Component {
    render(){
        return (
            <BrowserRouter>                
                <div className="router">
                    <AppNav>
                        <Link to='/demo'>demo</Link>
                        <Link to='/hello'>hello</Link>
                        <Link to='/imageViewer'>imageViewer</Link>
                        <Link to='/jstool'>jsTool</Link>
                    </AppNav>
                    <Switch>   
                        <Route path="/demo" component={Demo} />
                        <Route path="/hello" component={Hello} />  
                        <Route path="/imageViewer" component={ImageViewer} /> 
                        <Route path="/jsTool" component={JsTool} /> 
                    </Switch> 
                </div>  
            </BrowserRouter>
        )
    }
}

export default AppRoute