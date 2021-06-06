import * as THREE from 'three'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei'
// import { useSpring, animated,config } from '@react-spring/three'
import Overlay from './Overlay'


function Carla2(props) {
  const { scene } = useGLTF('/model.glb')
  return <primitive object={scene} {...props} />
}
function Carla(props) {
  const { scene } = useGLTF('/carla-draco.glb')
  return <primitive object={scene} {...props} />
}
function Weibo(props) {
  const { scene } = useGLTF('/webo-model.gltf')
  return <primitive object={scene} {...props} />
}
// console.log(Weibo)
// function Weibo(props) {
//   const { scene } = useGLTF('/weibo-model.gltf')
//   return <primitive object={scene}  {...props} />
// }



function VideoText({ clicked, ...props }) {
  const [active, setActive] = useState(false);
  const myMesh = React.useRef();
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/cutlittle.mp4', crossOrigin: 'Anonymous', loop: true }))
  
  // const [video2] = setState(() => Object.assign(document.createElement('video2'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true }))
  
  useEffect(() => void (clicked && video.play()), [video, clicked])
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = 0;
  });
  return (
    <Text font="/Alibaba-PuHuiTi-H.ttf" fontSize={2} letterSpacing={0.1} {...props}>
     数字情绪
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
      <Text  ref={myMesh} font="/Alibaba-PuHuiTi-H.ttf" fontSize={2} up={1 }letterSpacing={-0.1} {...props}>
         Social Network
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial>
      </Text>
    </Text>
    
  )
}

function Ground() {
  const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
  return (
    <Reflector resolution={2056} args={[15, 15]} mirror={0.8} mixBlur={8} mixStrength={9} rotation={[-Math.PI / 2, 0, Math.PI / 2]} blur={[400, 100]}>
      {(Material, props) => <Material color="#6F6F6F" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[1, 1]} {...props} />}
    </Reflector>
  )
}

function Intro({ start, set }) {
  const [vec] = useState(() => new THREE.Vector3())
  
  useEffect(() => setTimeout(() => set(true), 0), [])
  return useFrame((state) => {
    if (start) {
      state.camera.position.lerp(vec.set(state.mouse.x * 10, 3 + state.mouse.y * 2.4, 13), 0.05)
      state.camera.lookAt(0, 1, 0)
    }
  })
}

export default function App() {
  const [clicked, setClicked] = useState(false)
  const [ready, setReady] = useState(false)
  const store = { clicked, setClicked, ready, setReady }
  return (
    <>
      <Canvas  shadowMap concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, -1, 250], fov: 35 }}>
        <color attach="background" args={['black']} />
        <fog attach="fog" args={['black', 17, 22]} />
          <Weibo scale={[0.2,0.2,0.2]} position={[5, 4,-6]} />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            <Carla2 castShadow  rotation={[0, Math.PI + 0.4, 0]} position={[1.2, 0, 0]} scale={[0.46, 0.46, 0.46]}  />
            <Carla rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 0, 0]} scale={[0.26, 0.26, 0.26]} />
            <VideoText {...store} position={[0, 2.3, -3]} />
            <Ground receiveShadow/>
          </group>
          <ambientLight intensity={0.4} />
          <spotLight position={[0, 10, 0]} intensity={1.3} />
          <directionalLight castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
            position={[-20, 0, -10]} intensity={2.7} />
          {/* <spotLight position={[0, 0, -10]} intensity={1.7} lookAt={0,10,0}/> */}
          <Intro start={ready && clicked} set={setReady} />
        </Suspense>
      </Canvas>
      <Overlay {...store} />
    </>
  )
}
