"use client"

import { useEffect, useRef, useState } from "react"

import gsap from "gsap"
import { Observer } from "gsap/Observer"


import { cn } from "@/lib/utils"
import ScrollTypingEffect from "./ScrollTextFilling"


gsap.registerPlugin(Observer)

function disableBodyScroll() {
  document.body.style.overflow = "hidden"
}
function enableBodyScroll() {
  document.body.style.overflow = ""
}

export default function Caroussel({
  isLoading=false,
}: {
  isLoading?: boolean
//   timeLineData:[{date:string,title:string,description:string,image:string}]
}) {
     const timeLineData = [
    {
      date: "August 2025",
      image: "/TimeLine/image.png",
      title: "Lorem Ipsum 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      date: "September 2025",
      image: "/TimeLine/image.png",
      title: "Lorem Ipsum 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    },
    {
      date: "October 2025",
      image: "/TimeLine/image.png",
      title: "Lorem Ipsum 3",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain",
    },
    {
      date: "November 2025",
      image: "/TimeLine/image.png",
      title: "Lorem Ipsum 4",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    },
  ];
  const totalLength = timeLineData?.length ?? 1



// Adjusted width based on the number of items
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [animating, setAnimating] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const observerRef = useRef<Observer | null>(null)
  const [isInView, setIsInView] = useState<boolean>(false)
 const [itemWidth,setItemWidth]=useState<number>(790)
  const isEdgeCard =
    currentIndex === 0 || currentIndex === (timeLineData?.length || 1) - 1


    useEffect(() => {
  const handleResize = () => setItemWidth(window.innerWidth > 768 ? 790 : 740)
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
}, [])
  const updateIndex = (newIndex: number) => {
    if (animating) return
    setAnimating(true)
    const nextIndex = Math.max(0, newIndex % totalLength)

    gsap.to(".scrollable-container", {
      x: -nextIndex * itemWidth,
      duration: 0.9,
      ease: "power2.inOut",
      onComplete: () => setAnimating(false),
    })

    gsap.to(".arrow", {
      width: nextIndex === 0 ? 78 : nextIndex * itemWidth,
      duration: 0.9,
      ease: "power2.inOut",
    })

    setCurrentIndex(nextIndex)
  }

  // UNLOCK scroll and move to next section
  const moveToNextSection = () => {
    enableBodyScroll()
    const nextSection = document.querySelector("#after-carousel")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // INTERSECTION OBSERVER: setInView state
  useEffect(() => {
    if (!containerRef.current) return

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry) {
          setIsInView(entry.isIntersecting ?? false)
        }
      },
      { threshold: 0.95 }
    )

    io.observe(containerRef.current)

    return () => io.disconnect()
  }, [])

  // Add a ref or selector to previous section (the one before carousel)
  const topSectionRef = useRef<HTMLElement | null>(null)
  const [scrollDirection, setScrollDirection] = useState<
    "up" | "down" | undefined
  >(undefined)

  // You can set this ref by prop or selector on mount:
  useEffect(() => {
    topSectionRef.current = document.querySelector("#top-section-id") // Replace with your actual top component selector
  }, [])

  useEffect(() => {
    if (!isInView || !containerRef.current) return

    observerRef.current = Observer.create({
      target: containerRef.current,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onUp: () => {
        setScrollDirection("down")
        if (animating || !timeLineData) return
        const total = timeLineData.length
        if (currentIndex + 1 < total) {
          updateIndex(currentIndex + 1)
        } else {
          observerRef.current?.kill()
          moveToNextSection()
        }
      },
      onDown: () => {
        setScrollDirection("up")
        if (animating || !timeLineData) return

        if (currentIndex > 0) {
          updateIndex(currentIndex - 1)
        } else {
          // At first card and scrolling UP → exit carousel to previous section
          observerRef.current?.kill()

          // Unlock scroll so page can move normally
          enableBodyScroll()

          if (topSectionRef.current) {
            topSectionRef.current.scrollIntoView({ behavior: "smooth" })
          } else {
            // fallback: scroll to top of page
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        }
      },
      tolerance: 10,
      preventDefault: true,
    })

    return () => observerRef.current?.kill()
  }, [isInView, currentIndex, animating])

  // BODY SCROLL LOCK: handle vertical scroll lock/unlock, always correct even if scrolling up/down
  useEffect(() => {
    if (isInView) {
      disableBodyScroll()
    } else {
      enableBodyScroll()
    }
    // Always cleanup when leaving/unmounting
    return () => {
      enableBodyScroll()
    }
  }, [isInView])
  return (
    <section
      className="relative mt-[70px] hidden w-screen flex-col items-center gap-6 overflow-hidden bg-[#e9eaf2] sm:flex md:min-h-[565px] lg:mt-[110px] lg:min-h-[100vh] lg:gap-[10px]  justify-center "
      ref={containerRef}
       style={{
        background: "linear-gradient(#293464B2, #293464B2), url('/countdownbg.jpg')",
        backgroundSize: "contain",
        backgroundRepeat:"repeat",
        backgroundPosition: "center",
        clipPath: "polygon( 0 10px,50% 0,100% 15px,100% calc(100% - 10px), 50% 100%,  0 calc(100% - 10px) )"

      }}

    >
        <div className="z-30  w-[50%] self-start px-10">
            
             <svg width="1282" height="549" viewBox="0 0 1282 549" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[-12px] left-0 w-[100vw] h-auto max-w-none z-10">
        <path d="M30.5145 431.638L24.6313 432.552L27.4185 427.614L26.2773 426.64L21.7192 430.066L21.9357 424.313L20.514 424.066L18.1702 429.52L15.2261 424.521L13.9199 424.856L14.3198 430.444L9.56119 427.969L8.71419 429.04L12.3323 433.648L6.28369 433.799L6.08989 435.222L11.5567 437.266L6.57101 440.396L6.97001 441.841L12.583 440.766L9.91387 445.804L11.0551 446.779L15.4951 443.252L15.5488 449.166L16.96 449.266L19.191 443.785L22.1849 448.964L23.4412 448.449L22.7213 442.519L27.8394 445.37L28.7257 444.332L25.1417 439.684L31.0775 439.506L31.2766 438.157L25.8045 436.039L30.903 432.937L30.5145 431.638Z" fill="#C8AD6E" />
        <circle cx="12.6" cy="12.6" r="12.6" transform="matrix(-1 0 0 1 513.266 0.109375)" fill="#6982C1" fillOpacity="0.4" />
        <circle cx="12.6" cy="12.6" r="12.6" transform="matrix(-1 0 0 1 438.199 84.0078)" fill="#C8AD6E" />
        <rect x="1249.74" y="492.381" width="15.7799" height="6.36088" transform="rotate(-130.1 1249.74 492.381)" fill="#C8AD6E" />
        <rect x="1236.42" y="491.271" width="15.7799" height="6.36088" transform="rotate(-130.1 1236.42 491.271)" fill="#C8AD6E" />
        <rect x="1235.17" y="480.014" width="15.7799" height="6.36088" transform="rotate(139.9 1235.17 480.014)" fill="#C8AD6E" />
        <rect x="1248.49" y="481.115" width="15.7799" height="6.36088" transform="rotate(139.9 1248.49 481.115)" fill="#C8AD6E" />
        <rect x="141.734" y="166.367" width="15.7799" height="6.36088" transform="rotate(-130.1 141.734 166.367)" fill="#293464" />
        <rect x="128.414" y="165.266" width="15.7799" height="6.36088" transform="rotate(-130.1 128.414 165.266)" fill="#293464" />
        <rect x="127.164" y="154.008" width="15.7799" height="6.36088" transform="rotate(139.9 127.164 154.008)" fill="#293464" />
        <rect x="140.484" y="155.109" width="15.7799" height="6.36088" transform="rotate(139.9 140.484 155.109)" fill="#293464" />
        <rect x="1255.42" y="281.133" width="15.7799" height="6.36088" transform="rotate(-9.08373 1255.42 281.133)" fill="#293464" />
        <rect x="1263.23" y="270.287" width="15.7799" height="6.36088" transform="rotate(-9.08373 1263.23 270.287)" fill="#293464" />
        <rect x="1273.53" y="275.014" width="15.7799" height="6.36088" transform="rotate(-99.0837 1273.53 275.014)" fill="#293464" />
        <rect x="1265.72" y="285.867" width="15.7799" height="6.36088" transform="rotate(-99.0837 1265.72 285.867)" fill="#293464" />
        <path d="M253.926 308.888C250.694 302.413 248.68 299.497 243.246 300.722C246.995 296.586 246.386 293.603 241.81 287.422C234.765 290.755 232.993 293.099 233.619 298.104C229.504 294.397 226.548 295.008 220.43 299.489C223.797 307.079 226.19 308.333 230.948 307.663C226.83 312.396 228.633 315.447 232.546 320.955C239.35 317.653 241.726 315.429 240.334 310.002C245.053 314.203 248.157 312.946 253.926 308.888Z" fill="#15A9EE" fillOpacity="0.4" />
        <path d="M1122.93 130.888C1119.69 124.413 1117.68 121.497 1112.25 122.722C1115.99 118.586 1115.39 115.603 1110.81 109.422C1103.76 112.755 1101.99 115.099 1102.62 120.104C1098.5 116.397 1095.55 117.008 1089.43 121.489C1092.8 129.079 1095.19 130.333 1099.95 129.663C1095.83 134.396 1097.63 137.447 1101.55 142.955C1108.35 139.653 1110.73 137.429 1109.33 132.002C1114.05 136.203 1117.16 134.946 1122.93 130.888Z" fill="#C8AD6E" />
        <rect x="589.711" y="528.023" width="25.1988" height="4.02024" transform="rotate(-34.703 589.711 528.023)" fill="#95A4E6" fillOpacity="0.4" />
        <rect x="593.73" y="533.828" width="25.1988" height="4.02024" transform="rotate(-34.703 593.73 533.828)" fill="#95A4E6" fillOpacity="0.4" />
        <rect x="597.754" y="539.633" width="25.1988" height="4.02024" transform="rotate(-34.703 597.754 539.633)" fill="#95A4E6" fillOpacity="0.4" />
        <rect x="601.77" y="545.43" width="25.1988" height="4.02024" transform="rotate(-34.703 601.77 545.43)" fill="#95A4E6" fillOpacity="0.4" />
      </svg>
            <div className="p-2 sm:p-3 rounded-[100px] w-auto max-w-fit bg-white text-[#222222] flex justify-center items-center gap-x-2 text-[14px] sm:text-[16px] px-4 sm:px-5">
          <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
            <ellipse cx="16.8946" cy="10.7153" rx="7.78622" ry="7.78556" fill="#0B5399" />
            <path d="M11.3216 1.1488L8.92333 3.93862L8.25183 0.5H7.32452L6.55709 3.93862L4.35072 1.1488L3.58329 1.60295L4.67049 5.10646L1.281 3.93862L0.80136 4.61986L3.23156 7.08529L0.00195312 7.83141L0.0339294 8.67484L3.58329 9.38852L0.80136 11.8864L1.281 12.6325L4.67049 11.3998L3.58329 14.8709L4.35072 15.3899L6.55709 12.6325L7.32452 16.0711H8.25183L8.92333 12.6325L11.3216 15.3899L12.025 14.8709L10.8739 11.3998L14.3593 12.6325L14.743 11.8864L12.025 9.38852L15.5744 8.67484V7.83141L12.025 7.08529L14.743 4.61986L14.2953 3.90618L10.8739 5.10646L12.025 1.60295L11.3216 1.1488Z" fill="#C8AD6E" />
          </svg>
          <span className="whitespace-nowrap font-semibold text-[12px] md:text-[14px] sm:text-[16px]">From Roots to Wings</span>
        </div>
           <ScrollTypingEffect className="text-[#7F85A2] text-[26px] sm:text-[40px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-tight font-[400] sm:leading-snug" colorChange="white" text="Evolved over 20 years, and loved by lakhs of children across the world" />
        </div>

      <div className="relative h-[400px] w-full lg:h-[65vh]">
          {/* Your existing code below — no changes */ }
          <div className="scrollable-container flex w-fit gap-[140px] px-[calc(50%-calc(600px/2))] lg:gap-[190px] ">
            {timeLineData?.map((obj, index) => (
              <div
                key={`${obj.title}${index}`}
                className={cn(
                  "card relative max-h-[240px] w-[650px] flex-shrink-0 transition-opacity duration-700  ",
                  currentIndex < index ? "opacity-0" : "block"
                )}
              >
                {index === 0 && (
                  <div className="absolute left-[102px] top-10 flex items-center">
                    <p className="arrow h-[6px] min-w-[78px] rounded-tl-[10px] rounded-bl-[10px] bg-white" />
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 9.6L6.6 17.9138L6.6 1.28616L21 9.6Z"
                        fill="#B93637"
                      />
                      <rect
                        x="4.67969"
                        y="0.960938"
                        width="17.28"
                        height="3.84"
                        transform="rotate(90 4.67969 0.960938)"
                        fill="white"
                      />
                    </svg>
                  </div>
                )}

                    <div className="  text-white w-full flex flex-col gap-3 sm:gap-6 z-20 self-center sm:self-end mt-20 ">
                <div className="bg-[#AF212B] w-auto max-w-fit flex justify-center items-center px-5 py-3 rounded-full text-center">
                    <span className="text-[14px] sm:text-[16px]">{obj.date}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-start sm:items-end w-full max-w-full sm:max-w-[90%] md:max-w-[705px]">
                    <img 
                        src={obj.image} 
                        alt="timeline" 
                        className="object-cover w-full sm:w-[132px] md:w-[280px] lg:w-[360px] h-[200px] sm:h-[141px] md:h-[200px] lg:h-[274px] rounded-xl flex-shrink-0" 
                    />
                    <div className="w-full flex flex-col justify-start sm:justify-end gap-2 self-start sm:self-end">
                        <h1 className="text-[24px] sm:text-[26px] md:text-[32px] font-semibold">{obj.title}</h1>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[22px]">{obj.description}</p>
                    </div>
                </div>
            </div>
                {/* <div className="absolute -bottom-[31vh] mt-[74px] flex justify-center lg:w-full">
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL}${obj?.image?.url}`}
                    alt={obj?.image?.name}
                    // width={505}
                    // height={231}
                    className="h-[231px] w-[505px] rounded-[20px]"
                  />
                </div> */}
              </div>
            ))}
          </div>
        
      </div>
      <div
        className={cn(
          "text-center transition-all duration-500",
          isInView ? "flex justify-center pt-4 mt-auto z-20" : "hidden"
        )}
      >
       

        <button className="text-white underline rounded-md hover:scale-95 duration-500 w-full max-w-[240px] sm:max-w-[280px] h-[52px] font-normal text-[18px] sm:text-[20px]"
        onClick={moveToNextSection}
        >
          skip
        </button>
      
      </div>
    </section>
  )
}
