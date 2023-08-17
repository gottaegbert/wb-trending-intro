import * as THREE from 'three'
import React, { Suspense, useEffect, useState,useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei'
// import { useSpring, animated,config } from '@react-spring/three'
// import Overlay from './Overlay'
// import randomWord from 'random-words'

function Carla(props) {
  const { scene } = useGLTF('/carla-draco.glb')
  return <primitive object={scene}  {...props} />
}
function Carla2(props) {
  const { scene } = useGLTF('/model.glb')
  return <primitive object={scene}  {...props} />
}
function Carla3(props) {
  const { scene } = useGLTF('/modelcopy.glb')
  return <primitive object={scene}  {...props} />
}


function VideoText({ clicked, ...props }) {
  const [active, setActive] = useState(false);
  // const { scale } = useSpring({
  //   scale: active ? 1.5 : 1,
  //   config: config.wobbly
  // })
  const myMesh = React.useRef();
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: 'final.mp4', crossOrigin: 'Anonymous', loop: false }))
  useEffect(() => void (clicked && video.play()), [video, clicked])
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = 0;
  });

  return (
      <Text ref={myMesh} font="/webfont.woff" fontSize={2} letterSpacing={0}outlineBlur={0.2} {...props}>
      数字情绪
       <Text ref={myMesh} font="/webfont.woff" fontSize={2} letterSpacing={-0.1}outlineBlur={0.2} {...props}></Text>
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} wrapT={2} />
      </meshBasicMaterial>
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
  
  useEffect(() => setTimeout(() => set(true), 500), [])
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
  const ref = useRef()
  return (
    <div ref={ref} className="container">
      <div className="text">
        Expore it now!
        </div>
      <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 240], fov: 35 }}>
        <color attach="background" args={['black']} />
        <fog attach="fog" args={['black', 15, 20]} />
        {/* <Box position={[0, 2, -2]} /> */}
        
            {/* <Diamonds /> */}
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            
            <Carla2 rotation={[0, Math.PI + 0.4, 0]} position={[1.2, 0, 0]} scale={[0.46, 0.46, 0.46]} color={0x00ff00} />
            <Carla3 rotation={[0, Math.PI + 0.4, 0]} position={[0.2, 0, 0]} scale={[0.46, 0.46, 0.46]} color={0x00ff00} />
            <Carla rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 0, 0]} scale={[0.26, 0.26, 0.26]} color={0x00ff00} />
            <VideoText {...store} position={[0, 2.3, -3]} />
            <Ground />
          </group>
           {/* <Cloud count={50} distance={20} position={0,-30,-10}/> */}
          <ambientLight intensity={2.5} />
          <ambientLight intensity={2.5} />
          <spotLight position={[0, 10, 0]} intensity={1.3} />
          {/* <pointLight position={[0, 0.4, 0]} intensity={0.3} /> */}
          <directionalLight position={[-20, 0, -10]} intensity={1.7} />
          <Intro start={ready && clicked} set={setReady} />
        </Suspense>

      </Canvas>
</div>
  )
}
