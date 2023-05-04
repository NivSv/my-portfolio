/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

import CanvasLoader from '../CanvasLoader'

const Robot = () => {
    const earth = useGLTF('./robot/scene.gltf')

    return (
        <primitive
            object={earth.scene}
            scale={2}
            position-y={0}
            rotation-y={0}
        />
    )
}

const RobotCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 5],
            }}
        >
            <EffectComposer>
                <ambientLight intensity={10} position={[100, 5, 1]} />
                <directionalLight position={[100, 5, 1]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={1} />
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls
                        autoRotate
                        enablePan={true}
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Robot />

                    <Preload all />
                </Suspense>
                <Bloom blendFunction={BlendFunction.ALPHA} />
            </EffectComposer>
        </Canvas>
    )
}

export default RobotCanvas
