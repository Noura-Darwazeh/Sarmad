import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Box3, Vector3, Group } from "three";

function FBXModel({ path }) {
  const model = useLoader(FBXLoader, path);
  const groupRef = useRef();
  const { camera, controls } = useThree();

  useEffect(() => {
    if (model && groupRef.current) {
      const box = new Box3().setFromObject(model);
      const size = new Vector3();
      const center = new Vector3();
      box.getSize(size);
      box.getCenter(center);

      model.position.sub(center);

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const distance = maxDim / (2 * Math.tan(fov / 2));
      camera.position.set(0, 0, distance * 1.2);
      camera.near = 0.1;
      camera.far = distance * 10;
      camera.updateProjectionMatrix();

      if (controls) {
        controls.target.set(0, 0, 0);
        controls.update();
      }

      groupRef.current.add(model);
    }
  }, [model, camera, controls]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return <group ref={groupRef} />;
}

export const ThreeDViewer = ({ model }) => {
  return (
    <Canvas
      style={{ height: "90vh", width: "100%" }}
      camera={{ fov: 45, near: 0.1, far: 1000 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <FBXModel path={model} />
      <OrbitControls makeDefault />
    </Canvas>
  );
};
