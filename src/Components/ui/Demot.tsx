"use client"
import Gravity, { MatterBody } from "@/Components/fancy/physics/gravity"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

function Preview() {
    const ref = useRef<HTMLDivElement>(null)
    const footerRef = useRef<any>(null)
    const hasStarted = useRef(false) // ensures startEngine runs only once

    useEffect(() => {
        if (!ref.current) return

        const io = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (entry && entry.isIntersecting && !hasStarted.current) {
                    footerRef.current.start()
                    hasStarted.current = true
                }
            },
            { threshold: 0.1 }
        )

        io.observe(ref.current)

        return () => {
            io.disconnect()
            // Don't stop engine here if you want drag to continue!
        }
    }, [])

    return (
        <motion.div className="w-dvw h-dvh flex flex-col relative bg-transparent" ref={ref}>
            <Gravity
                gravity={{ x: 0, y: 0.9 }}
                className="w-full h-full"
                autoStart={false}
                ref={footerRef}
            >
                <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.5 }} x="80%" y="0%">
                    <div className="hover:cursor-grab">
                        <img src="/footer/ladder.svg" alt="" />
                    </div>
                </MatterBody>
                <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.5 }} x="85%" y="0%" angle={10}>
                    <div className="hover:cursor-grab">
                        <img src="/footer/circle.svg" alt="" />
                    </div>
                </MatterBody>
                <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.5 }} x="83%" y="0%">
                    <div className="hover:cursor-grab">
                        <img src="/footer/chakra.svg" alt="" />
                    </div>
                </MatterBody>
                <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.5 }} x="82%" y="0%">
                    <div className="hover:cursor-grab">
                        <img src="/footer/4line.svg" alt="" />
                    </div>
                </MatterBody>
                <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.5 }} x="81%" y="0%">
                    <div className="hover:cursor-grab">
                        <img src="/footer/flower.svg" alt="" />
                    </div>
                </MatterBody>
            </Gravity>
        </motion.div>
    )
}

export default Preview
