import {useEffect, useMemo, useRef} from "react";
import * as THREE from "three";
import {OrbitControls} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

const CustomGeometryParticles = ({count, shape, ...props}) => {

    const points = useRef();

    // Generate our positions attributes array
    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const distance = 1;

        for (let i = 0; i < count; i++) {
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);

            let x = distance * Math.sin(theta) * Math.cos(phi)
            let y = distance * Math.sin(theta) * Math.sin(phi);
            let z = distance * Math.cos(theta);

            positions.set([x, y, z], i * 3);
        }
        return positions;
    }, [count]);

    const circleTexture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        context.beginPath();
        context.arc(32, 32, 30, 0, Math.PI * 2);
        context.fillStyle = 'white';
        context.fill();
        return new THREE.CanvasTexture(canvas);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (points.current) {
                points.current.rotation.x += 0.0005;
                points.current.rotation.y += 0.0004;
                points.current.rotation.z += 0.0006;
            }
        }, 16);

        return () => clearInterval(interval);
    }, []);

    return (
        <points ref={points} {...props}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.2} color="#cc99ff" sizeAttenuation depthWrite={false} map={circleTexture} alphaTest={0.5}/>
        </points>
    );
};

export default CustomGeometryParticles;