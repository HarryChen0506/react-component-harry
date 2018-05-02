// jsTool 常用的js函数库 模仿lodash

import React from 'react';
import jsTool from '../../lib/utils/jsTool.js'
import _ from 'lodash';

class JsTool extends React.Component {
    constructor(...args){
        super(...args);
        this.find = this.find.bind(this);
        this.before = this.before.bind(this);
        this.state = {
            // find: [{
            //     name: '张三',age: 14,gender: 'male'
            // }, {
            //     name: '李四',age: 20,gender: 'female'
            // },{
            //     name: '王五',age: 25,gender: 'male'
            // }],
            find:{
                one: {
                    name: '张三',age: 14,gender: 'male'
                },
                two: {
                    name: '李四',age: 20,gender: 'female'
                },
                three: {
                    name: '王五',age: 25,gender: 'male'
                }
            }
        }
    }
    find(){
        // const filter = _.find(this.state.find, (v)=>{
        //     return v.age > 18
        // });
        const filter = jsTool.find(this.state.find, (v)=>{
            return v.age > 21
        });
        console.log('filter', filter)        
    }
    before(){
        const once = jsTool.before(3,(v)=>{
            console.log(123, this);
            return 456
        })

        console.log(once('abc'))
        console.log(once())
    }
    render(){
        return (
            <div>
                <div>JsTool</div>
                <button onClick={this.find}>find</button>
                <button onClick={this.before}>before</button>
            </div>             
        )
    }
}

export default JsTool