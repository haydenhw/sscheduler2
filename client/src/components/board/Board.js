import React, { Component } from 'react';
import { Layer, Rect, Group } from 'react-konva';
import { connect } from 'react-redux';

import * as actions from 'actions/indexActions';
import store from 'reduxFiles/store';
import Modules from 'components/modules/Modules';
import ModulesItem from 'components/modules/ModulesItem';
import Anchor from './BoardAnchor';
import TestModule from './TestModule';


class Board extends Component {
  
  reRender() {
    const layer = this.refs.boardGroup.getLayer();
    layer.draw();
  }
  
  updatePosition() {
    const boardGroup = this.refs.boardGroup;
    const x = boardGroup.getX();
    const y = boardGroup.getY();
    store.dispatch(actions.updateBoardPosition({x: x, y: y}))
  }
  
  test() {
    console.log('hello')
  }
  
  render() {
    const {
      x,
      y,
      width,
      height,
      topLeft,
      topRight,
      bottomLeft,
      bottomRight
     } 
     = this.props;
     
    return (
      <Layer>
        
        <Group
          ref="boardGroup"
          x={x}
          y={y}
          width={width}
          height={height}
          draggable="true" 
        
          onDragMove={this.reRender.bind(this)}
          onDragEnd={this.updatePosition.bind(this)}
          >
      
          <Rect
            ref="board"
            name={"board"}
            x={topLeft.x}
            y={topLeft.y}
            width={topRight.x - topLeft.x || width}
            height={bottomLeft.y - topLeft.y || height }
            fill="#e3e3e5"
            opacity="0.5"
            stroke="#ccc"
          />
          
          <Rect
                ref="top"
                x={10} y={10} width={50} height={50}
                stroke = "grey"
                strokeWidth = ".75"
                draggable="true"
           />
            
          <Anchor x={topLeft.x} y={topLeft.y} name={"topLeft"} />
          <Anchor x={topRight.x || width} y={topRight.y} name={"topRight"} />
          <Anchor x={bottomLeft.x} y={bottomLeft.y || height} name={"bottomLeft"} />
          <Anchor x={bottomRight.x || width} y={bottomRight.y ||height} name={"bottomRight"} />
          
          <Modules />
          <TestModule />  
        </Group>
      </Layer>
      );
  }
}

const mapStateToProps = (state) => ({
  width: state.boardSpecs.width,
  height: state.boardSpecs.height,
  x: state.boardSpecs.x,
  y: state.boardSpecs.y,
  topLeft: state.anchorPositions.topLeft,
  topRight: state.anchorPositions.topRight,
  bottomLeft: state.anchorPositions.bottomLeft,
  bottomRight: state.anchorPositions.bottomRight
});

export default connect(mapStateToProps)(Board);