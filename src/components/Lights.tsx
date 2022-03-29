import * as React from "react";

const Lights: React.FC = () => {
  return (
    <>
      {/* <pointLight color="#fff" intensity={0.01} position={[0.1, 0.1, 100]}
        // @ts-ignore
        lookAt={[0, 0, 0]} /> */}
        {/* <ambientLight
          color="#B8B3E9"
          intensity={0.8}
          position={[100, 100, 100]}
        /> */}
        <spotLight
          position={[0, 10, 10]}
          angle={0.15}
          penumbra={0.1}
          shadow-mapSize={[512, 512]}
          castShadow
          color="#00F0B5"
          intensity={5}
        />
        <spotLight
          color="#ffd0d0"
          position={[10, 10, 10]}
          angle={0.15}
          castShadow
          intensity={50}
        />
        {/* <spotLight
          position={[0, 100, 0]}
          angle={0.15}
          penumbra={0.1}
          shadow-mapSize={[512, 512]}
          castShadow
          color="#00F0B5"
        />
        <spotLight
          color="red"
          position={[-10, 100, 10]}
          angle={0.15}
          castShadow
        /> */}
    </>
  );
};

export default Lights;
