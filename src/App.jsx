import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { Group } from 'three'

const Cube = ({position, size, color}) =>{
  const ref = useRef()
  useFrame((state, delta)=>{
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta*5

  })
  return(
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function App() {

  return (
    <Canvas>
      {/* <ambientLight /> */}
      <directionalLight position={[0,0,2]} />

      {/* <group position={[1,0,0]}> */}
      {/* </group> */}

      <Cube position={[0, 0, 0]} size={[1, 1, 1]} color="hotpink" />


    </Canvas>
  )
}

export default App
