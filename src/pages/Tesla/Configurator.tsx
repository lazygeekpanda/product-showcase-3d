import React, { useState } from 'react'

import { TwitterPicker } from 'react-color'

const TeslaConfigurator: React.FC<any> = ({ rimsColor, bodyColor, grillColor, chromeColor, onChange }) => {
  return <div className="config-container">
    <div><h4>Config</h4></div>

    <div>
      <label>Rim Color</label>
      <TwitterPicker triangle='hide' color={rimsColor} onChangeComplete={(color: any) => onChange('rims', color.hex)} />
    </div>
    <div>
      Body Color: {bodyColor}

      <TwitterPicker triangle='hide' color={bodyColor} onChangeComplete={(color: any) => onChange('body', color.hex)} />
    </div>
    <div>
      Grill Color: {grillColor}

      <TwitterPicker triangle='hide' color={grillColor} onChangeComplete={(color: any) => onChange('grill', color.hex)} />
    </div>
    <div>
      Chrome Color: {chromeColor}

      <TwitterPicker triangle='hide' color={chromeColor} onChangeComplete={(color: any) => onChange('chrome', color.hex)} />
    </div>
  </div>
}

export default TeslaConfigurator
