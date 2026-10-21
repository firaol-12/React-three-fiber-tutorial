
// import { useGLTF } from "@react-three/drei";

// function Car() {
//   const { scene } = useGLTF("/models/car.glb");

//   return (
//     <group
//       position={[0, 0, 0]}
//       rotation={[0, Math.PI / 4, 0]}
//       scale={0.02}
//     >
//       <primitive object={scene} />
//     </group>
//   );
// }

// export default Car;


import { useGLTF } from "@react-three/drei";

export default function Car(){

    const {scene} = useGLTF("/models/car.glb")
    
    return(
            <primitive object={scene}             
                scale={0.02}
                rotation={[0,Math.PI/4, 0]}
                position={[0,0,0]}
            />
    )
}
