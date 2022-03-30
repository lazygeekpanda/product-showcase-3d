import * as React from "react";

const Lights: React.FC = () => {
  return (
    <>
      {/* <pointLight color="#fff" intensity={0.01} position={[0.1, 0.1, 100]}
        // @ts-ignore
        lookAt={[0, 0, 0]} /> */}
        {/* <ambientLight
          color="#B8B3E9"
          intensity={1}
          position={[100, 100, 100]}
        /> */}
        <spotLight
          position={[0, 100, 0]}
          angle={0.15}
          penumbra={0.1}
          shadow-mapSize={[512, 512]}
          castShadow
          color="#00F0B5"
          intensity={1}
          // @ts-ignore
          lookAt={[0, 0, 0]}
        />
        <spotLight
          position={[-10, -10, 0]}
          angle={0.15}
          penumbra={0.1}
          shadow-mapSize={[512, 512]}
          castShadow
          color="#00F0B5"
          intensity={1}
        />
        <spotLight
          color="#ffd0d0"
          position={[10, 100, 10]}
          angle={0.15}
          castShadow
          intensity={1}
        />
        <directionalLight
          color="#E54F6D"
          intensity={10}
          position={[0, 10, 0]}
        />
        <directionalLight
          color="#5BC0EB"
          intensity={1}
          position={[0, -10, 0]}
        />
        {/* <spotLight
          color="red"
          position={[-10, 100, 10]}
          angle={0.15}
          castShadow
        /> */}
    </>
  );
};

export default Lights;
