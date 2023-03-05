/* eslint-disable react/no-unknown-property */
import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import { inSphere } from 'maath/random/dist/maath-random.cjs'

const Stars = () => {
    const ref = useRef<any>()
    const [sphere] = useState(() =>
        inSphere(new Float32Array(5000), { radius: 1.2 })
    )

    useFrame((state, delta) => {
        if (!ref.current) return
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={Float32Array.from(sphere)}
                stride={3}
                frustumCulled
            >
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

const StarsCanvas = () => {
    return (
        <div className="w-full h-auto absolute inset-0 z-[-1]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    )
}

export default StarsCanvas
