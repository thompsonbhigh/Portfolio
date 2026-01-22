import {useState, Suspense} from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island'
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Boat from '../models/Boat';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -18, -50];
    let rotation = [0, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [15, 15, 15];
    } else {
      screenScale = [20, 20, 20];
    }
    return [screenScale, screenPosition, rotation];
  }

  const adjustBoatForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
        screenScale = [0.007, 0.007, 0.007];
	    screenPosition = [0, -1.5, 0];
    } else {
        screenScale = [0.01  , 0.01 , 0.01  ];
	    screenPosition = [0, -3, -4];
    }
    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [boatScale, boatPosition] = adjustBoatForScreenSize();
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

        <Canvas className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
          camera={{near: 0.1, far: 1000, rotation: [-0.2, 0, 0]}}>
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 1, 1]} intensity={2}/>
              <ambientLight intensity={0.5}/>
              <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

            <Boat 
				scale = {boatScale}
				position = {boatPosition}
				isRotating = {isRotating}
				rotation = {[0, 0, 0]}
			/>
            <Bird />
            <Sky 
				isRotating = {isRotating}
			/>
            <Island 
              position = {islandPosition}
              scale = {islandScale}
              rotation = {islandRotation}
			  isRotating = {isRotating}
			  setIsRotating = {setIsRotating}
			  setCurrentStage = {setCurrentStage}
            />

            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home