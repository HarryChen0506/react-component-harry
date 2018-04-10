/**
 * 路由
 */
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AppNav from '../pages/Nav';
import Demo from '../pages/Demo';
import ImageViewer from '../pages/ImageViewer/Example'


function Hello(props){
    return <div>Hello</div>
}
class AppRoute extends React.Component {
    render(){
        return (
            <BrowserRouter>                
                <div className="router">
                    <AppNav />
                    <Switch>   
                        <Route path="/demo" component={Demo} />
                        <Route path="/hello" component={Hello} />  
                        <Route path="/imageViewer" component={ImageViewer} />  

                    </Switch> 
                </div>  
            </BrowserRouter>
        )
    }
}

export default AppRoute