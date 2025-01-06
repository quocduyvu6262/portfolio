import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import {Html, useAnimations, useGLTF, useScroll} from '@react-three/drei'
import {useCurrentSheet} from "@theatre/r3f";
import {useFrame, useThree} from "@react-three/fiber";
import {number, val} from "@theatre/core";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {projects} from "../constants/index.js";
import SectionTitle from "./SectionTitle.jsx";
import Experience from "../sections/Experience.jsx";
import Project from "../sections/Project.jsx";

function Island({setShowTitle, scrollRef, ...props}) {
    const { scene, nodes, materials, animations } = useGLTF('/models/island/scene.gltf')
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    const { gl } = useThree();

    const islandRef = useRef();
    const balloonRef = useRef();
    const teleportFlashRef = useRef();
    const trafficRef = useRef();
    const grcRef = useRef();
    const dentalRef = useRef();
    const workRef = useRef();

    const [show, setShow] = useState(false);
    const [showExp, setShowExp] = useState(false);
    const [showProject, setShowProject] = useState(false);
    const [project, setProject] = useState({})

    const refs = {
        balloonRef: balloonRef,
        trafficRef: trafficRef,
        grcRef: grcRef,
        dentalRef: dentalRef,
        workRef: workRef
    };

    const sectionSetters = {
        trafficRef: (val) => {
            setProject(projects.traffic)
            setShowProject(val)
        },
        grcRef: (val) => {
            setProject(projects.grc)
            setShowProject(val)
        },
        dentalRef: (val) => {
            setProject(projects.dental)
            setShowProject(val)
        },
        workRef: setShowExp
    }

    useFrame(() => {
        const sequenceLength = val(sheet.sequence.pointer.length);
        sheet.sequence.position = scroll.offset * sequenceLength;
        setShowTitle(scroll.offset < 0.15);
        setShow(scroll.offset > 0.57 && scroll.offset < 0.8)
        const keys = ["workRef", "grcRef", "dentalRef", "trafficRef"]
        keys.forEach(key => {
            if (scroll.offset <= 0.57 || scroll.offset >= 0.8) {
                sectionSetters[key](false)
            }
        })
    });

    useEffect(() => {
        scrollRef.current = scroll
    }, [scroll, scrollRef]);

    const handleMouseEnter = (key) => {
        document.body.style.cursor = "pointer";
        gsap.to(refs[key].current.scale, { // Access `scale` directly
            x: 1.03,
            y: 1.03,
            z: 1.03,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = (key) => {
        document.body.style.cursor = "default";
        gsap.to(refs[key].current.scale, { // Access `scale` directly
            x: 1,
            y: 1,
            z: 1,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleOnClick = (key) => {
        if (scroll.offset <= 0.57 || scroll.offset >= 0.8) {
            scroll.el.scrollTo({
                top: window.innerHeight * 2, // Change this value to the desired scroll offset
                behavior: 'smooth',
            });
        } else {
            sectionSetters[key](true)
        }
    }

    useGSAP(() => {
        // Balloon Effect
        const ballonTl = gsap.timeline({
            repeat: -1,
            ease: "none",
            yoyo: true
        })
        ballonTl.to(balloonRef.current.position, {
            x: 50,
            duration: 2,
            ease: "sine.inOut"
        }).to(balloonRef.current.position,{
            x: -50,
            duration: 2,
            ease: "sine.inOut"
        })
        gsap.to(balloonRef.current.position, {
            y: "+=50",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        })
        gsap.to(balloonRef.current.position, {
            z: "+=50",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        })

        // Teleport Flash Effect
        gsap.to(teleportFlashRef.current.material, {
            opacity: 0.2,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
        })

        // Island Effect
        gsap.to(islandRef.current.position, {
            z: "-=100",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        })
        gsap.to(islandRef.current.rotation, {
            z: "+=0.05",
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        })
    })

    return (
        <>
            <group {...props} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]} >
                    <group
                        ref={balloonRef}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_2.geometry}
                            material={materials.BALOON}
                            position={[0,0,0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_3.geometry}
                            material={materials.BALOON_BULB}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials.BALOON_CURVE}
                        />
                        <Html
                            transform
                            scale={1 * (1/props.scale)}
                            position={[80, 0, 1150]}
                            rotation={[-Math.PI / 2 + 2.99, 0, 0]}
                            portal={{ current: gl.domElement.parentNode }}
                        >
                            <section
                                onMouseEnter={() => handleMouseEnter("balloonRef")}
                                onMouseLeave={() => handleMouseLeave("balloonRef")}
                                style={{ userSelect: 'none' }}
                                onClick={() => {
                                    scroll.el.scrollTo({
                                        top: window.innerHeight * 2, // Change this value to the desired scroll offset
                                        behavior: 'smooth',
                                    });
                                }}
                            >
                                <h2
                                    className={`px-2 border border-white rounded-lg text-center bg-yellow-300 w-full text-3xl font-bold text-black font-generalsans leading-relaxed tracking-wide`}
                                >
                                    Experience & Projects
                                </h2>
                            </section>
                        </Html>
                    </group>
                    <group ref={islandRef}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5.geometry}
                            material={materials.DROPS_PIPE}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_6.geometry}
                            material={materials.ISLAND_BASE_SHADOW}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_7.geometry}
                            material={materials.base_island_additional_pipes}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_8.geometry}
                            material={materials['base_island_additional_pipes_BEAM.001']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_9.geometry}
                            material={materials.base_island_additional_pipes_transarent}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_10.geometry}
                            material={materials.curve_Pipe}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_11.geometry}
                            material={materials.island_Connector_CURVE}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_12.geometry}
                            material={materials.island_Metal_holders}
                        />
                        <group
                            ref={workRef}
                            onPointerEnter={() => handleMouseEnter("workRef")}
                            onPointerLeave={() => handleMouseLeave("workRef")}
                            onClick={() => handleOnClick("workRef")}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_13.geometry}
                                material={materials.machine_MAIN}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                scale={1.2 * (1/props.scale)}
                                rotation={[-Math.PI / 2 + 3, 0, 0]}
                                position={[40,307, 600]}
                            >
                                <SectionTitle
                                    occlude={false}
                                    onMouseEnter={() => handleMouseEnter("workRef")}
                                    onClick={() => {
                                        handleOnClick("workRef")
                                        handleMouseLeave("workRef")
                                    }}
                                    title="Work Experience"
                                    show={show}
                                />
                            </mesh>
                        </group>
                        <group
                            ref={grcRef}
                            onPointerEnter={() => handleMouseEnter("grcRef")}
                            onPointerLeave={() => handleMouseLeave("grcRef")}
                            onClick={() => handleOnClick("grcRef")}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_14.geometry}
                                material={materials.machine_REACTOR}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_15.geometry}
                                material={materials.machine_REACTOR_transparent}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                scale={0.98 * (1/props.scale)}
                                rotation={[-Math.PI / 2 + 3, 0, 0]}
                                position={[-750,207, 500]}
                            >
                                <SectionTitle
                                    occlude={false}
                                    onMouseEnter={() => handleMouseEnter("grcRef")}
                                    onMouseLeave={() => handleMouseLeave("grcRef")}
                                    onClick={() => handleOnClick("grcRef")}
                                    title="GRC Controls Automation"
                                    show={show}
                                />
                            </mesh>
                        </group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_16.geometry}
                            material={materials.machine_RENTGEN}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            rotation={[17,0,0]}
                            geometry={nodes.Object_19.geometry}
                            material={materials.sphere}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_20.geometry}
                            material={materials.ISLAND_BASE}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_21.geometry}
                            material={materials.ISLAND_BASE}
                        />
                        <group
                            ref={dentalRef}
                            onPointerEnter={() => handleMouseEnter("dentalRef")}
                            onPointerLeave={() => handleMouseLeave("dentalRef")}
                            onClick={() => handleOnClick("dentalRef")}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_22.geometry}
                                material={materials.machine_PRINTER}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_23.geometry}
                                material={materials.machine_PRINTER}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                scale={0.7 * (1/props.scale)}
                                rotation={[-Math.PI / 2 + 3, 0, 0]}
                                position={[-700,-200, 400]}
                            >
                                <SectionTitle
                                    occlude={false}
                                    onMouseEnter={() => handleMouseEnter("dentalRef")}
                                    onMouseLeave={() => handleMouseLeave("dentalRef")}
                                    onClick={() => handleOnClick("dentalRef")}
                                    title="Dental Booking System"
                                    show={show}
                                />
                            </mesh>
                        </group>
                        <group
                            ref={trafficRef}
                            onPointerEnter={() => handleMouseEnter("trafficRef")}
                            onPointerLeave={() => handleMouseLeave("trafficRef")}
                            onClick={() => handleOnClick("trafficRef")}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                scale={0.85 * (1/props.scale)}
                                rotation={[-Math.PI / 2 + 3, -0.07, 0]}
                                position={[800,0,700]}
                            >
                                <SectionTitle
                                    occlude={false}
                                    onMouseEnter={() => handleMouseEnter("trafficRef")}
                                    onMouseLeave={() => handleMouseLeave("trafficRef")}
                                    onClick={() => handleOnClick("trafficRef")}
                                    title="Traffic Signal Control"
                                    show={show}
                                />
                            </mesh>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_17.geometry}
                                material={materials.machine_TELEPORT_flash}
                                ref={teleportFlashRef}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_18.geometry}
                                material={materials.machine_TELEPORT_transparent}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_24.geometry}
                                material={materials.machine_TELEPORT}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_25.geometry}
                                material={materials.machine_TELEPORT}
                            />
                        </group>
                    </group>
                </group>
            </group>
            <mesh
                position={[0.6,2,0.4]}
                rotation={[-0.2,0,0]}
            >
                <Experience show={showExp} setShowExp={setShowExp}/>
            </mesh>

            <mesh
                position={[0.6,2,0.4]}
                rotation={[-0.2,0,0]}
            >
                <Project show={showProject} setShowExp={setShowProject} project={project}/>
            </mesh>
        </>

    )
}

useGLTF.preload('/models/island/scene.gltf')

export default Island;
