// LepineScene.js
import React from 'react'

import {
  ViroScene,
  Viro360Image,
  Viro360Video
} from 'react-viro';


var ViroTheater = React.createClass({
  render: function() {
    return (
        <ViroScene>
          <Viro360Image source={require('../js/portal_res/360_theater_dark.jpg')} />
          {/* <Viro360Video source={require('../js/portal_res/360_surf.mp4')}
            volume={1.0}
            position={[0, 3.9, -45]}
            scale={[44, 22, 1]}
            loop={true} /> */}
        </ViroScene>
    );
  },
});

module.exports = ViroTheater
