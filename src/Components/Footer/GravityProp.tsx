"use client"
import Gravity, { MatterBody } from "@/Components/fancy/physics/gravity"
import { memo, useEffect, useRef } from "react"
import { motion } from "framer-motion"

function Preview({isInView}:{isInView:boolean}) {
    const containerRef = useRef<any>(null)

    useEffect(() => {
        if (!containerRef.current) return
        if(isInView) 
            containerRef.current.start()
        
    }, [isInView])
    return (
        <div className="w-dvw h-dvh flex flex-col bg-transparent opacity-70  sm:opacity-100 pointer-events-auto  " >
            <Gravity
                gravity={{ x: 0, y: 0.9 }}
                className="w-full h-full"
                autoStart={false}
                ref={containerRef}
            >
                <MatterBody matterBodyOptions={{
                    friction: 0.5, restitution: 0.8,
                    density: 0.001,
                }} x="80%" y="0%" isDraggable={false}>
                    <svg
                        className="w-20 h-20 sm:w-32 sm:h-32 hover:cursor-pointer"
                        width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="83.7031" width="69.6629" height="28.0812" fill="#C7AC6E" />
                        <rect x="41.5781" y="41.8516" width="69.6629" height="28.0812" fill="#C7AC6E" />
                        <rect x="83.1562" y="69.6641" width="69.6629" height="28.0812" transform="rotate(-90 83.1562 69.6641)" fill="#C7AC6E" />
                        <rect x="41.5781" y="111.516" width="69.6629" height="28.0812" transform="rotate(-90 41.5781 111.516)" fill="#C7AC6E" />
                    </svg>


                </MatterBody>
                <MatterBody matterBodyOptions={{
                    friction: 0.5, restitution: 0.8,
                    density: 0.001,
                }} x="85%" y="0%" angle={10} isDraggable={false} bodyType="circle">

                    <svg width="204" height="204" viewBox="0 0 204 204"
                        className="w-20 h-20 sm:w-32 sm:h-32 hover:cursor-pointer" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="101.813" cy="102.11" r="100.922" fill="#FED543" stroke="black" />
                    </svg>


                </MatterBody>
                <MatterBody matterBodyOptions={{
                    friction: 0.5, restitution: 0.8,
                    density: 0.001,
                }} x="83%" y="0%" isDraggable={false} bodyType="svg">

                    <svg

                        className="w-20 h-20 sm:w-32 sm:h-32 hover:cursor-pointer"
                        width="20" height="20" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path

                            opacity="0.9" d="M79.5051 5.5L62.8727 24.85L58.2156 1H51.7844L46.462 24.85L31.1602 5.5L25.8378 8.65L33.3778 32.95L9.87064 24.85L6.54415 29.575L23.3984 46.675L1 51.85L1.22177 57.7L25.8378 62.65L6.54415 79.975L9.87064 85.15L33.3778 76.6L25.8378 100.675L31.1602 104.275L46.462 85.15L51.7844 109H58.2156L62.8727 85.15L79.5051 104.275L84.384 100.675L76.4004 76.6L100.573 85.15L103.234 79.975L84.384 62.65L109 57.7V51.85L84.384 46.675L103.234 29.575L100.129 24.625L76.4004 32.95L84.384 8.65L79.5051 5.5Z" fill="#FED543" />
                    </svg>

                </MatterBody>
                <MatterBody matterBodyOptions={{
                    friction: 0.5, restitution: 0.8,
                    density: 0.001,
                }} x="82%" y="0%" isDraggable={false} bodyType="rectangle">
                    <svg
                        className="w-20 h-20 sm:w-32 sm:h-32 hover:cursor-pointer"
                        width="114" height="86" viewBox="0 0 114 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.296875" width="113.013" height="13.718" fill="#C7AC6E" />
                        <rect x="0.296875" y="24.0938" width="113.013" height="13.718" fill="#C7AC6E" />
                        <rect x="0.296875" y="48.1875" width="113.013" height="13.718" fill="#C7AC6E" />
                        <rect x="0.296875" y="72.2656" width="113.013" height="13.718" fill="#C7AC6E" />
                    </svg>


                </MatterBody>
                <MatterBody matterBodyOptions={{
                    friction: 0.5, restitution: 0.8,
                    density: 0.001,
                }} x="81%" y="0%" isDraggable={false}>

                    <img src="/footer/flower.svg" alt="" className=" w-20 h-20" />

                </MatterBody>
            </Gravity>
        </div>
    )
}

export default memo(Preview)
