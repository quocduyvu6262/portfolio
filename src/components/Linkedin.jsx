import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
export function Linkedin(props) {
    const { nodes, materials } = useGLTF('/models/linkedin/scene.glb')
    const ref = useRef();
    useGSAP(() => {
        gsap.to(ref.current.position, {
            y: "+=0.2",
            duration: 1.5,
            repeat: -1,
            yoyo: true
        })
        gsap.timeline({
            repeat: -1,
            ease: "sine.inOut",
            yoyo: true
        }).to(ref.current.rotation, {
            y: "+=0.4",
            duration: 2
        }).to(ref.current.rotation, {
            y: "-=0.5",
            duration: 2
        })
    })

    const handleMouseEnter = () => {
        document.body.style.cursor = "pointer";
        gsap.to(ref.current.scale, { // Access `scale` directly
            x: 1.15 * (props.scale),
            y: 1.15 * (props.scale),
            z: 1.15 * (props.scale), // Adjust the scale on all axes
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = (key) => {
        document.body.style.cursor = "default";
        gsap.to(ref.current.scale, { // Access `scale` directly
            x: 1 * (props.scale),
            y: 1 * (props.scale),
            z: 1 * (props.scale), // Adjust the scale on all axes
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
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve.geometry}
                material={materials['Material.002']}
                position={[-0.089, 0.148, 0.199]}
                rotation={[1.745, 0, -Math.PI / 9]}
                scale={70}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve001.geometry}
                material={materials['Material.002']}
                position={[-0.089, -0.068, 0.161]}
                rotation={[1.745, 0, -Math.PI / 9]}
                scale={70}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve002.geometry}
                material={materials['Material.002']}
                position={[0.127, -0.031, 0.088]}
                rotation={[1.745, 0, -Math.PI / 9]}
                scale={70}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve004.geometry}
                material={materials['Material.001']}
                position={[0, 0.014, -0.014]}
                rotation={[1.745, 0, -Math.PI / 9]}
                scale={90}
            />
        </group>
    )
}

useGLTF.preload('/models/linkedin/scene.glb')