// import { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import './App.css'
// import { Group } from 'three'


// const Cube = ({position, size, color}) =>{
//   const [isHovered, setIsHovered] = useState(false)
//   const [isClicked, setIsClicked] = useState(false)
//   const ref = useRef()
//   useFrame((state, delta)=>{
//     const speed = isHovered? 2:0.2
//     ref.current.rotation.x += delta*speed
//     ref.current.rotation.y += delta*speed
//   //  {isHovered? ref.current.position.z = Math.sin(state.clock.elapsedTime)*speed : none}

//   })
//   return(
//     <mesh 
//       position={position} 
//       ref={ref} 
//       onPointerEnter={(event)=>{event.stopPropagation(), setIsHovered(true)}} 
//       onPointerLeave={()=>setIsHovered(false)}
//       onClick={()=>setIsClicked(!isClicked)}
//       scale={isClicked?0.2:1}
//     >
//       <boxGeometry args={size} />
//       <meshStandardMaterial color={isHovered? "red" : "Yellow"} />
//     </mesh>
    
//   )
// }

// function App() {

//   return (
//     <Canvas>
//       {/* <ambientLight /> */}
//       <directionalLight position={[0,0,2]} />

//       {/* <group position={[1,0,0]}> */}
//       {/* </group> */}

//       {/* <Cube position={[0, 0, 0]} size={[1, 1, 1]} color="hotpink" /> */}
//       <mesh><boxGeometry /><meshStandardMaterial color="red" /></mesh>
//       <OrbitControls
//         enableZoom={true}
//         enablePan={false}
//         autoRotate
//         minPolarAngle={Math.PI / 4}
//         maxPolarAngle={Math.PI / 2}
//         // makeDefault
//       />

//     </Canvas>
//   )
// }

// export default App




// import { Canvas } from "@react-three/fiber";
// import Car from "./Car";

// export default function App() {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 0, 0] }}>
//         <ambientLight intensity={1} />
//         <Car />
//       </Canvas>
//     </div>
//   );
// }


import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import Description from "./Description";
import Car from "./Car";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <div style={{ width: "50%", height: "100%", backgroundColor: "red" }}>
        <Description />
      </div>

      <div style={{ width: "50%", height: "100%" }}>
        <Canvas camera={{ position: [0, 1, 5] }}>
          <color attach="background" args={["#3d3d3d"]} />
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />

          <Grid
            position={[0, 0, 0]}
            args={[10, 10]}
            cellSize={0.5}
            cellThickness={0.6}
            cellColor="#5a5a5a"
            sectionSize={2.5}
            sectionThickness={1.2}
            sectionColor="#7a7a7a"
            fadeDistance={30}
            fadeStrength={1}
            infiniteGrid
          />
          <Car />
          <OrbitControls makeDefault enablePan={false} maxPolarAngle={Math.PI / 2} />

        </Canvas>
      </div>
    </div>
  );
}