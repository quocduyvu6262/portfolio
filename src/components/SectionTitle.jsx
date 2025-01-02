import React, {useEffect, useRef, useState} from 'react'
import {Html, Scroll, useScroll} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";

const SectionTitle = (props) => {
    const { gl } = useThree();
    const viewRef = useRef();
    const [shouldRender, setShouldRender] = useState(false);
    useEffect(() => {
        if (viewRef.current) { // Check if the ref is set
            if (props.show) {
                setShouldRender(true)
                gsap.fromTo(
                    viewRef.current,
                    { autoAlpha: 0, y: -20 }, // Initial state (hidden and shifted up)
                    { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" } // Final state (visible and centered)
                );
            } else {
                // Animate the View out
                gsap.to(viewRef.current, {
                    autoAlpha: 0,
                    y: -20,
                    duration: 1,
                    ease: "power3.in",
                });
            }
        }
    }, [props.show]);

    if (viewRef.current) {
        viewRef.current.parentElement.style.pointerEvents = 'none'
    }

    return (
        <Html
            ref={viewRef}
            transform
            occlude={props.occlude}
            position={props.position}
            rotation={props.rotation}
            portal={{ current: gl.domElement.parentNode }}
            style={{
                pointerEvents: 'none',
            }}
        >
            {shouldRender &&
                <section
                    className="border-2 p-2 text-center border-white"
                    onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}
                    onClick={props.onClick}
                    style={{
                        borderRadius: 12,
                        pointerEvents: 'auto',
                    }}
                >
                    <p className={`sm:text-sm font-semibold text-white font-generalsans leading-relaxed tracking-wide`} style={{
                        userSelect: 'none'
                    }}>
                        {props.title}
                    </p>
                </section>
            }
        </Html>
    );
};

export default SectionTitle
