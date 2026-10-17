import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { Group } from 'three'

  const Cube = ({position, size, color}) =>{
    return(
      <mesh position={position}>
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

      <group position={[0,1,0]}>
        <Cube position={[0, 0, 0]} size={[1, 1, 1]} color="hotpink" />
      </group>

    </Canvas>
  )
}

export default App
