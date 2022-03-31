import React from 'react'

import { TwitterPicker } from 'react-color'

const TeslaConfigurator: React.FC<any> = ({
  rimsColor,
  bodyColor,
  chromeColor,
  onChange,
}) => {
  return (
    <div className="config-container">
      <div>
        <label>Change Rim Color</label>
        <TwitterPicker
          triangle="hide"
          colors={[
            '#253C78',
            '#FF6900',
            '#0693E3',
            '#EB144C',
            '#9900EF',
            '#2DDF8C',
            '#000',
            '#f5f5f5',
          ]}
          color={rimsColor}
          onChangeComplete={(color: any) => onChange('rims', color.hex)}
        />
      </div>
      <div>
        Change Body Color: {}
        <TwitterPicker
          triangle="hide"
          colors={[
            '#280003',
            '#FF6900',
            '#FCB900',
            '#00D084',
            '#0693E3',
            '#f5f5f5',
            '#EB144C',
            '#9900EF',
            '#A2D729',
            '#EF8275',
          ]}
          color={bodyColor}
          onChangeComplete={(color: any) => onChange('body', color.hex)}
        />
      </div>
      <div>
        Change Chrome Color
        <TwitterPicker
          triangle="hide"
          colors={['#000', '#f5f5f5']}
          color={chromeColor}
          onChangeComplete={(color: any) => onChange('chrome', color.hex)}
        />
      </div>
    </div>
  )
}

export default TeslaConfigurator
