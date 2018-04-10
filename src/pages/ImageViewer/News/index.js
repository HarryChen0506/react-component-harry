//新闻组件 News
import React from 'react';
import NewsBox from '../NewsBox';
import { ImageViewer } from '../../../lib/components'

// import { ImageViewer } from '../../../dist/react-component-harry.js'
class News extends React.Component {  
  render() {    
    return (      
        <div>
          <ImageViewer 
            async={true}             /*图片内容是否异步*/
            imageWrapperHeight={300}  /*图片容器高度*/
            opacity={1}          /*背景透明度*/
            zIndex={1000}           /*图层层级*/
            gap={30}                 /*图片间隙*/
          >
            <NewsBox content={this.props.content}/>     
          </ImageViewer>             
        </div>      
    );
  }
}

export default News