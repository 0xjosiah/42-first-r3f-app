import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function App() {
    const torusKnot = useRef(null)
    const shapesGroup = useRef(null)

    useFrame((state, delta) => {
        torusKnot.current.rotation.y += delta
        torusKnot.current.rotation.x += delta
        // shapesGroup.current.rotation.y += delta
    }) // this hook gives access to renderer frames, delta allows for frame rate consistency

    return (
        <>
            <group ref={shapesGroup}>

                <mesh position={ [2, .75, 0] } ref={torusKnot} >
                    <torusKnotGeometry />
                    <meshNormalMaterial />
                </mesh>

                <mesh position-x={-2}>
                    <sphereGeometry />
                    <meshBasicMaterial color={0xff1200} />
                </mesh>

            </group>

            <mesh position={ [ 0, -1, 0 ] } rotation-x={ Math.PI * -.45 } scale={7} >
                <planeGeometry />
                <meshBasicMaterial color={0xfa90fc} />
            </mesh>

        </>
    )
}