/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from '@react-three/drei'

import CanvasLoader from '../CanvasLoader'
import { Color } from 'three'

const Ball = ({ icon }: IBallCanvasProps) => {
    const [decal] = useTexture([icon])

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[0, 0, 5]} intensity={3} castShadow />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <directionalLight position={[-5, 5, 5]} intensity={1.5} />
            <pointLight position={[0, 0, 10]} intensity={2} />
            <spotLight
                position={[0, 0, 8]}
                angle={0.4}
                penumbra={0.5}
                intensity={3}
                castShadow
            />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color={new Color(0xfff8eb)}
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                    roughness={0.7}
                    metalness={0}
                    emissive={new Color(0x000000)}
                    emissiveIntensity={0}
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1.2}
                    map={decal}
                    opacity={1}
                    depthTest={false}
                    depthWrite={false}
                />
            </mesh>
        </Float>
    )
}

interface IBallCanvasProps {
    icon: string
}

const BallCanvas = ({ icon }: IBallCanvasProps) => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enablePan={false} enableZoom={false} />
                <Ball icon={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default BallCanvas
