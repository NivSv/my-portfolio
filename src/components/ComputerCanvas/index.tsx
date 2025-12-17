/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../CanvasLoader'

interface ComputerProps {
    isMobile: boolean
}

const Computer = (props: ComputerProps) => {
    const computer = useGLTF('./desktop_pc/scene.gltf')

    return (
        <mesh>
            <ambientLight intensity={0.8} />
            <hemisphereLight intensity={0.5} groundColor="black" />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.15}
                penumbra={0.5}
                intensity={2}
                castShadow
                shadow-mapSize={2048}
            />
            <spotLight
                position={[20, 50, 10]}
                angle={0.15}
                penumbra={0.5}
                intensity={1.5}
                castShadow
            />
            <directionalLight position={[5, 5, 5]} intensity={3} castShadow />
            <directionalLight position={[-5, 5, 5]} intensity={2} />
            <directionalLight position={[0, 10, 0]} intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, 10, -10]} intensity={0.8} />
            <primitive
                object={computer.scene}
                scale={props.isMobile ? 0.7 : 0.75}
                position={props.isMobile ? [0, -2.5, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}

const ComputerCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia('(max-width: 500px)')

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches)

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches)
        }

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener('change', handleMediaQueryChange)

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }
    }, [])

    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 16, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default ComputerCanvas
