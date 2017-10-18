// LepineSceneObj.js

import React, { Component } from 'react'
import { Stylesheet } from 'react-native'
import { ViroARScene, Viro3DObject, ViroAmbientLight, ViroSpotLight, ViroAnimations, ViroMaterials } from 'react-viro'

export class LepineSceneObj extends Component {
  render(){
    return(
      <ViroARScene onTrackingInitialized={()=>{this.setState({})}}>
        <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]} materials={["grid"]} animation={{name: "rotate", run: true, loop: true}}/>
        <ViroAmbientLight color={"#aaaaaa"} />
        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0,-1,-.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true} />
        <Viro3DObject
          source={require('../js/res/emoji_smile/emoji_smile.vrx')}
          position={[-.5, -.5, -.5]}
          scale={[.2, .2, .2]}
          type="VRX" />
      </ViroARScene>
    )
  }
}

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('../js/res/grid_bg.jpg'),
  },
});

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: "+=90"
    },
    duration: 250, //.25 seconds
  },
});
