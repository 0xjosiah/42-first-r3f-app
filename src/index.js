import './styles.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Canvas } from '@react-three/fiber'
import { ACESFilmicToneMapping, CineonToneMapping, LinearEncoding, sRGBEncoding } from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        // dpr={ [ 1, 2 ] } // pixel ratio setting, 1 number fixes ratio, array clamps with arr[0] - low, arr[1] - high, [1,2] is default
        // orthographic
        // flat // this refers to tone mapping
        gl={{
            // antialias: false,
            // toneMapping: CineonToneMapping,
            toneMapping: ACESFilmicToneMapping, // default
            // outputEncoding: LinearEncoding,
            outputEncoding: sRGBEncoding, // default
        }}
        camera={{
            fov: 45,
            // zoom: 100,
            near: 0.1,
            far: 200,
            position: [ 2, 2, 7 ]
        }}
    >
        <App />
    </Canvas>
)