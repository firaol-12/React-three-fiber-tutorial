import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { Group } from 'three'


const Cube = ({position, size, color}) =>{
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const ref = useRef()
  useFrame((state, delta)=>{
    const speed = isHovered? 2:0.2
    ref.current.rotation.x += delta*speed
    ref.current.rotation.y += delta*speed
  //  {isHovered? ref.current.position.z = Math.sin(state.clock.elapsedTime)*speed : none}

  })
  return(
    <mesh 
      position={position} 
      ref={ref} 
      onPointerEnter={(event)=>{event.stopPropagation(), setIsHovered(true)}} 
      onPointerLeave={()=>setIsHovered(false)}
      onClick={()=>setIsClicked(!isClicked)}
      scale={isClicked?0.2:1}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={isHovered? "red" : "Yellow"} />
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
