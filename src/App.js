import { Canvas } from '@react-three/fiber'

export default function App() {

    return (
        <Canvas>

            <mesh position={ [2, .75, 0] } >
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>

            <mesh position-x={-2}>
                <sphereGeometry />
                <meshBasicMaterial color={0xff1200} />
            </mesh>

            <mesh position={ [ 0, -1, 0 ] } rotation-x={ Math.PI * -.45 } scale={7} >
                <planeGeometry />
                <meshBasicMaterial color={0xfa90fc} />
            </mesh>
            
        </Canvas>
    )
}