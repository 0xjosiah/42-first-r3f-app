import { extend, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import CustomObj from './CustomObj'

extend({ OrbitControls })

export default function App() {
    const torusKnot = useRef(null)
    const shapesGroup = useRef(null)

    // const three = useThree()
    const { camera, gl } = useThree()

    useFrame((state, delta) => {
        torusKnot.current.rotation.y += delta
        torusKnot.current.rotation.x += delta
        // shapesGroup.current.rotation.y += delta
    }) // this hook gives access to renderer frames, delta allows for frame rate consistency

    return (
        <>
            <orbitControls args={[ camera, gl.domElement ]} />

            <directionalLight position={[ 1, 2, 3 ]}/>

            <ambientLight intensity={.35} />

            <group ref={shapesGroup}>

                <mesh position={ [2, .75, 0] } ref={torusKnot} >
                    <torusKnotGeometry />
                    <meshStandardMaterial color={0xffdd00} />
                </mesh>

                <mesh position-x={-2}>
                    <sphereGeometry />
                    <meshStandardMaterial color={0xff1200} />
                </mesh>

            </group>

            <mesh position={ [ 0, -1, 0 ] } rotation-x={ Math.PI * -.45 } scale={7} >
                <planeGeometry />
                <meshStandardMaterial color={0xfa90fc} />
            </mesh>

            <CustomObj /> 

        </>
    )
}