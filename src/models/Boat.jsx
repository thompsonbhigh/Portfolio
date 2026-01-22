import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';

import boatScene from '../assests/3d/rocket.glb';

const Boat = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(boatScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].reset().play(); 
    } else {
      actions['Take 001'].fadeOut(0.2);
    }
  }, [actions, isRotating])

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Boat