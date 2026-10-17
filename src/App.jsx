import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas>
      {/* <ambientLight /> */}
      <directionalLight position={[0,0,2]} />
      <mesh position={[1,1,0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="green" />
      </mesh>
            
      <mesh position={[-1,1,0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="red" />
      </mesh>

            <mesh position={[-1,-1,0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="blue" />
      </mesh>
            
      <mesh position={[1,-1,0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
    </Canvas>
  )
}

export default App
