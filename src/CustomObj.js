import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
export default function CustomObj() {

    const geoRef = useRef(null)

    const verticesCount = 10 * 3 // 10 triangles, 3 vertices per triangle
    
    const positions = useMemo(() => {
        const positions = new Float32Array(verticesCount * 3) // 3 coords per vertex
        
        for(let i = 0; i < verticesCount * 3; i++) {
            positions[i] = (Math.random() - .5) * 3
        }
        
        return positions
    }, [])

    useEffect(() => geoRef.current.computeVertexNormals(), [])

    return (
        <mesh>
            <bufferGeometry ref={ geoRef }>
                <bufferAttribute 
                    attach={ "attributes-position" } // this is equivalent of geometry.attributes.position
                    count={ verticesCount }
                    itemSize={ 3 }
                    array={ positions }
                />
            </bufferGeometry>
            <meshStandardMaterial color={0x00ff00} side={THREE.DoubleSide} />
        </mesh>
    )
}