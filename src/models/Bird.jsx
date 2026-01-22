import { useRef, useEffect } from 'react'
import birdScene from '../assests/3d/ufo.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions['CINEMA_4D_Main'].play();
    actions['CINEMA_4D_Main'].timeScale = 1.0;
  }, [])

  useFrame(({clock, camera}) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2;

    if (birdRef.current.position.x > camera.position.x + 5) {
      birdRef.current.rotation.y = 5;
    } else if (birdRef.current.position.x < camera.position.x - 5) {
      birdRef.current.rotation.y = 15;
    }

    if (birdRef.current.rotation.y === 15) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  })

  return (
    <mesh ref={birdRef} position={[0, -20, 0]} scale={[0.002, 0.002, 0.002]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird