import * as React from "react";
import { Canvas as R3FCanvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";

import Stars from "components/Stars/Stars";

const Canvas: React.FC = ({ children }) => (
  <R3FCanvas camera={{ position: [0, 0, 4], fov: 75 }} shadows dpr={[1, 2]}>
    {children}
    <Stars />
    <ContactShadows
      rotation-x={Math.PI / 2}
      position={[0, -1.4, 0]}
      opacity={0.75}
      width={10}
      height={10}
      blur={2.6}
      far={2}
    />
  </R3FCanvas>
);

export default Canvas;
