import React, {useRef, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export function Github(props) {
    const ref = useRef()
    const { nodes, materials, animations } = useGLTF('/models/github/scene.glb')

    useGSAP(() => {
        gsap.to(ref.current.position, {
            y: "+=0.2",
            duration: 1.5,
            repeat: -1,
            yoyo: true
        })

        gsap
            .timeline({
                repeat: -1,
                repeatDelay: 0.5,
            })
    })

    const handleMouseEnter = () => {
        document.body.style.cursor = "pointer";
        gsap.to(ref.current.scale, { // Access `scale` directly
            x: 1.1,
            y: 1.1,
            z: 1.1, // Adjust the scale on all axes
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = (key) => {
        document.body.style.cursor = "default";
        gsap.to(ref.current.scale, { // Access `scale` directly
            x: 1,
            y: 1,
            z: 1, // Adjust the scale on all axes
            duration: 0.3,
            ease: "power2.out",
        });
    };

    return (
        <group
            ref={ref} {...props}
            dispose={null}
            onPointerEnter={handleMouseEnter}
            onPointerLeave={handleMouseLeave}
        >
            <group name="Scene">
                <mesh
                    name="Cube053"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube053.geometry}
                    material={materials['Material.084']}>
                    <mesh
                        name="Circle010"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle010.geometry}
                        material={materials['Material.083']}
                        position={[0.009, 0.008, -0.18]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.621, 0.41, 0.621]}
                    />
                    <mesh
                        name="Cube054"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube054.geometry}
                        material={materials['Material.019']}
                    />
                </mesh>
            </group>
        </group>
    )
}

useGLTF.preload('/models/github/scene.glb')