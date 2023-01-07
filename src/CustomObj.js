import * as THREE from 'three'
export default function CustomObj() {

    const verticesCount = 10 * 3 // 10 triangles, 3 vertices per triangle
    const positions = new Float32Array(verticesCount * 3) // 3 coords per vertex

    for(let i = 0; i < verticesCount * 3; i++) {
        positions[i] = (Math.random() - .5) * 3
    }

    return (
        <mesh>
            <bufferGeometry>
                <bufferAttribute 
                    attach={ "attributes-position" } // this is equivalent of geometry.attributes.position
                    count={ verticesCount }
                    itemSize={ 3 }
                    array={ positions }
                />
            </bufferGeometry>
            <meshBasicMaterial color={0x00ff00} side={THREE.DoubleSide} />
        </mesh>
    )
}