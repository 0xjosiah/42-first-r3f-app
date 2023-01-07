import './styles.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Canvas } from '@react-three/fiber'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        // orthographic
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