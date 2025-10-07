"use client";
import CardStackContainer from "@/Components/ui/card-stack";
import { useParallax } from "@/hooks/paralllelx";
import { useRotateScroll } from "@/hooks/useScrollRotate";
import { motion } from "framer-motion"

export default function ImpactCard() {
  const { ref, y } = useParallax({ speed: 0.2 })
  const { ref: rightRef, y: righty } = useParallax({ speed: 0.2 })
  const { ref: starRef, y: stary } = useParallax({ speed: 0.2 })
  const {ref:starRotateRef,rotate:starRotate}=useRotateScroll()
  const {ref:smallStarRotateRef,rotate:smallStarRotate}=useRotateScroll()
    const {ref:flowRotateRef,rotate:flowRotate}=useRotateScroll()

  return (
    <div
      className=" mt-1  min-h-screen flex-col flex items-center  p-4 relative overflow-x-clip overflow-y-visible w-full gap-y-10  "
    >
      <motion.div
        style={{ y }}
        ref={ref}
        className="absolute  left-2 top-5 h-[65%] hidden sm:block">



        {/* <svg width="270" height="535" viewBox="0 0 270 535" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <mask id="mask0_208_82" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="236" width="32" height="30">
            <rect y="236" width="31.9841" height="30" fill="url(#pattern0_208_82)" />
          </mask>
          <g mask="url(#mask0_208_82)">
            <rect x="-5.15625" y="231.164" width="37.0635" height="37.8571" fill="#C8AD6E" />
          </g>
          <rect width="29.9673" height="3.829" transform="matrix(0.79644 -0.604717 0.604738 0.796424 74 370.129)" fill="#FFE27C" />
          <rect width="29.9673" height="3.829" transform="matrix(0.79644 -0.604717 0.604738 0.796424 78.0703 375.48)" fill="#FFE27C" />
          <rect width="29.9673" height="3.829" transform="matrix(0.79644 -0.604717 0.604738 0.796424 82.1406 380.832)" fill="#FFE27C" />
          <rect width="29.9673" height="3.829" transform="matrix(0.79644 -0.604717 0.604738 0.796424 86.2031 386.191)" fill="#FFE27C" />
          <motion.path d="M263.267 0.886651L260.271 2.74794L259.121 0.0918514L257.871 0.103481L256.427 3.28372L253.87 0.974072L252.841 1.567L253.647 5.43467L249.765 4.59575L249.127 5.47672L251.573 8.16242L248.088 9.61157L248.141 10.6945L252.134 11.9907L249.214 14.8097L249.869 15.7619L253.736 14.9759L253 18.6079L254.04 19.2649L256.99 16.6124L258.057 20.1026L259.308 20.091L260.399 16.5807L263.438 19.1775L264.38 18.5021L263.708 14.8832L267.5 15.5979L268.008 14.6348L265.429 11.867L269.091 10.4996L269.08 9.41628L265.394 8.03385L267.921 5.30188L267.309 4.39087L263.611 4.46695L264.221 1.46114L263.267 0.886651Z" fill="#C8AD6E"
          animate={{ rotate: 360 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          />
          <motion.path d="M124.506 454.075C101.26 445.336 89.3879 442.705 78.5808 458.473C78.3529 439.319 69.8584 433.237 43.9154 428.377C33.9816 453.21 34.9965 463.242 48.2572 474.367C29.2526 474.652 23.2456 483.091 18.3206 508.643C44.5105 519.87 53.4578 517.438 63.8582 504.644C64.5525 526.16 76.2099 529.625 98.911 534.341C108.313 510.152 109.095 499.01 92.9246 488.61C114.6 488.159 119.475 477.751 124.506 454.075Z" fill="#FED543"
 animate={{ rotate: 360 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          />
          <motion.path opacity="0.4" d="M190.505 225.5L173.873 244.85L169.216 221H162.784L157.462 244.85L142.16 225.5L136.838 228.65L144.378 252.95L120.871 244.85L117.544 249.575L134.398 266.675L112 271.85L112.222 277.7L136.838 282.65L117.544 299.975L120.871 305.15L144.378 296.6L136.838 320.675L142.16 324.275L157.462 305.15L162.784 329H169.216L173.873 305.15L190.505 324.275L195.384 320.675L187.4 296.6L211.573 305.15L214.234 299.975L195.384 282.65L220 277.7V271.85L195.384 266.675L214.234 249.575L211.129 244.625L187.4 252.95L195.384 228.65L190.505 225.5Z" stroke="#0B5399" strokeWidth="1.30179"
 animate={{ rotate: 360 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          />
        </svg> */}
        <BgLeftProp />
      </motion.div>

      <motion.svg

        className="absolute   right-10 top-1 h-[65%] hidden sm:block"
        width="269" height="576" viewBox="0 0 269 576" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        ref={rightRef}
        style={{ y: righty }}

      >
        <mask id="mask0_208_82" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="191" y="0" width="78" height="73">
          <motion.rect x="191" width="77.828" height="73" fill="url(#pattern0_208_82)"
            animate={{ rotate: 360 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </mask>
        <g mask="url(#mask0_208_82)">
          <rect x="178.445" y="-11.7852" width="90.1878" height="92.119" fill="#FED543"

          />
        </g>
        <rect x="164.572" y="444.125" width="23.0581" height="9.29472" transform="rotate(29.4568 164.572 444.125)" fill="#C8AD6E" />
        <rect x="183.369" y="438.832" width="23.0581" height="9.29472" transform="rotate(29.4568 183.369 438.832)" fill="#C8AD6E" />
        <rect x="190.83" y="453.613" width="23.0581" height="9.29472" transform="rotate(-60.5432 190.83 453.613)" fill="#C8AD6E" />
        <rect x="172.033" y="458.914" width="23.0581" height="9.29472" transform="rotate(-60.5432 172.033 458.914)" fill="#C8AD6E" />
        <motion.path d="M92.2675 555.894L89.2707 557.756L88.1215 555.1L86.8714 555.111L85.4266 558.292L82.8702 555.982L81.8411 556.575L82.6473 560.442L78.7653 559.604L78.1269 560.485L80.5732 563.17L77.0876 564.619L77.1408 565.702L81.1337 566.999L78.2137 569.817L78.8692 570.77L82.7361 569.984L81.9996 573.616L83.0404 574.273L85.9903 571.62L87.0574 575.11L88.3075 575.099L89.3993 571.588L92.4376 574.185L93.3798 573.51L92.7077 569.891L96.4998 570.606L97.0082 569.643L94.4292 566.875L98.0906 565.507L98.0805 564.424L94.3935 563.042L96.9213 560.31L96.3093 559.399L92.6108 559.475L93.2212 556.469L92.2675 555.894Z" fill="#C8AD6E"
              ref={smallStarRotateRef}
          style={{rotate:smallStarRotate}}

        />
        <motion.path d="M1.5641 459C4.7047 467.805 7.60987 473.641 11.4818 477.008C15.1102 480.163 19.5201 481.098 25.5434 480.428C23.6202 482.427 22.2657 484.398 21.4268 486.428C20.4395 488.817 20.1769 491.259 20.5105 493.875C21.1317 498.744 23.8249 504.245 27.7341 511.201L28.5324 512.612L28.7447 512.986L29.1461 512.832C37.137 509.762 42.9373 507.047 46.4535 503.133C49.7712 499.439 51.0047 494.743 50.3002 487.893C54.5178 492.237 58.5849 494.091 63.4342 493.77C68.6125 493.427 74.604 490.601 82.5364 485.973L82.9023 485.76L82.7524 485.364C79.8516 477.71 77.4332 471.818 73.7969 468.104C70.3147 464.548 65.7672 463.03 58.8283 463.679C62.2326 459.67 64.1286 455.956 63.942 451.284C63.7424 446.287 61.1623 440.288 55.7758 431.742L55.5614 431.401L55.1822 431.538C46.5179 434.679 40.7602 437.571 37.4298 441.416C34.2774 445.055 33.3511 449.481 34.0359 455.554C29.7374 452.046 25.7539 450.344 20.965 450.641C15.861 450.959 9.9195 453.545 1.77837 458.403L1.42601 458.613L1.5641 459Z" stroke="#293464" strokeOpacity="0.4"
              ref={flowRotateRef}
          style={{rotate:flowRotate}}
        />

      </motion.svg>
      <motion.svg
        ref={starRef}
        style={{ y: stary }}
        className="absolute -top-10 right-20"
        width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
        ref={starRotateRef}
          style={{rotate:starRotate}}
          opacity="0.9" d="M79.5051 5.5L62.8727 24.85L58.2156 1H51.7844L46.462 24.85L31.1602 5.5L25.8378 8.65L33.3778 32.95L9.87064 24.85L6.54415 29.575L23.3984 46.675L1 51.85L1.22177 57.7L25.8378 62.65L6.54415 79.975L9.87064 85.15L33.3778 76.6L25.8378 100.675L31.1602 104.275L46.462 85.15L51.7844 109H58.2156L62.8727 85.15L79.5051 104.275L84.384 100.675L76.4004 76.6L100.573 85.15L103.234 79.975L84.384 62.65L109 57.7V51.85L84.384 46.675L103.234 29.575L100.129 24.625L76.4004 32.95L84.384 8.65L79.5051 5.5Z" fill="#FED543" />
      </motion.svg>




      <div className="w-full text-[12px] sm:text-[16px] font-semibold  self-justify-start">
        <button className="w-fit p-3 px-5 rounded-[100px] min-w-[167.68px] min-h-[43px] hover:scale-95 duration-500 bg-[#293464] text-white flex justify-center items-center gap-2 mx-auto mb-10 ">
          <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="16.8919" cy="10.7157" rx="7.78639" ry="7.78604" fill="#C8AD6E" />
            <path d="M11.3198 1.14884L8.92157 3.93883L8.25005 0.5H7.32272L6.55528 3.93883L4.34887 1.14884L3.58142 1.60302L4.66864 5.10674L1.27908 3.93883L0.799424 4.62011L3.22967 7.08569L0 7.83185L0.031977 8.67534L3.58142 9.38906L0.799424 11.8871L1.27908 12.6332L4.66864 11.4005L3.58142 14.8717L4.34887 15.3908L6.55528 12.6332L7.32272 16.0721H8.25005L8.92157 12.6332L11.3198 15.3908L12.0233 14.8717L10.8722 11.4005L14.3577 12.6332L14.7414 11.8871L12.0233 9.38906L15.5728 8.67534V7.83185L12.0233 7.08569L14.7414 4.62011L14.2937 3.90639L10.8722 5.10674L12.0233 1.60302L11.3198 1.14884Z" fill="#FED543" />
          </svg>
          <span>One Day. A Lifetime of Impact</span>
        </button>
      </div>

      <div className="w-full sm:w-[80%] h-[330px]  ">

        <CardStackContainer />
        {/* <CardStackWheel /> */}

      </div>


    </div>
  );
}


function BgLeftProp() {
  const { ref: ref1, rotate: rotate1 } = useRotateScroll();
  const { ref: ref2, rotate: rotate2 } = useRotateScroll();
  const { ref: ref3, rotate: rotate3 } = useRotateScroll();

  return (
    <svg width="270" height="535" viewBox="0 0 270 535" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <mask id="mask0_208_82" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="236" width="32" height="30">
        <rect y="236" width="31.9841" height="30" fill="url(#pattern0_208_82)" />
      </mask>
      <g mask="url(#mask0_208_82)">
        <rect x="-5.15625" y="231.164" width="37.0635" height="37.8571" fill="#C8AD6E" />
      </g>
      <rect width="29.9673" height="3.829" transform="matrix(0.79644 -0.604717 0.604738 0.796424 74 370.129)" fill="#FFE27C" />
      <rect width="29.9673" height="3.829" transform="matrix(0.79644 -0.604717 0.604738 0.796424 78.0703 375.48)" fill="#FFE27C" />
      <rect width="29.9673" height="3.829" transform="matrix(0.79644 -0.604717 0.604738 0.796424 82.1406 380.832)" fill="#FFE27C" />
      <rect width="29.9673" height="3.829" transform="matrix(0.79644 -0.604717 0.604738 0.796424 86.2031 386.191)" fill="#FFE27C" />
      <motion.path d="M263.267 0.886651L260.271 2.74794L259.121 0.0918514L257.871 0.103481L256.427 3.28372L253.87 0.974072L252.841 1.567L253.647 5.43467L249.765 4.59575L249.127 5.47672L251.573 8.16242L248.088 9.61157L248.141 10.6945L252.134 11.9907L249.214 14.8097L249.869 15.7619L253.736 14.9759L253 18.6079L254.04 19.2649L256.99 16.6124L258.057 20.1026L259.308 20.091L260.399 16.5807L263.438 19.1775L264.38 18.5021L263.708 14.8832L267.5 15.5979L268.008 14.6348L265.429 11.867L269.091 10.4996L269.08 9.41628L265.394 8.03385L267.921 5.30188L267.309 4.39087L263.611 4.46695L264.221 1.46114L263.267 0.886651Z" fill="#C8AD6E"
        ref={ref1}
        style={{ rotate: rotate1 }}
      />
      <motion.path d="M124.506 454.075C101.26 445.336 89.3879 442.705 78.5808 458.473C78.3529 439.319 69.8584 433.237 43.9154 428.377C33.9816 453.21 34.9965 463.242 48.2572 474.367C29.2526 474.652 23.2456 483.091 18.3206 508.643C44.5105 519.87 53.4578 517.438 63.8582 504.644C64.5525 526.16 76.2099 529.625 98.911 534.341C108.313 510.152 109.095 499.01 92.9246 488.61C114.6 488.159 119.475 477.751 124.506 454.075Z" fill="#FED543"
        ref={ref2}
        style={{ rotate: rotate2 }}
      />
      <motion.path opacity="0.4" d="M190.505 225.5L173.873 244.85L169.216 221H162.784L157.462 244.85L142.16 225.5L136.838 228.65L144.378 252.95L120.871 244.85L117.544 249.575L134.398 266.675L112 271.85L112.222 277.7L136.838 282.65L117.544 299.975L120.871 305.15L144.378 296.6L136.838 320.675L142.16 324.275L157.462 305.15L162.784 329H169.216L173.873 305.15L190.505 324.275L195.384 320.675L187.4 296.6L211.573 305.15L214.234 299.975L195.384 282.65L220 277.7V271.85L195.384 266.675L214.234 249.575L211.129 244.625L187.4 252.95L195.384 228.65L190.505 225.5Z" stroke="#0B5399" strokeWidth="1.30179"
        ref={ref3}
        style={{ rotate: rotate3 }}
      />
    </svg>
  )
}
function BgRightProp() {
  const { ref: rightRef, y: righty } = useParallax({ speed: 0.2 })
  const { ref: ref1, rotate: rotate1 } = useRotateScroll();
  const { ref: ref2, rotate: rotate2 } = useRotateScroll();
  const { ref: ref3, rotate: rotate3 } = useRotateScroll();

  const { ref: starRef, y: stary } = useParallax({ speed: 0.2 })
  return (
    <>   <motion.svg
      className="absolute   right-10 top-1 h-[65%] hidden sm:block"
      width="269" height="576" viewBox="0 0 269 576" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      ref={rightRef}
      style={{ y: righty }}

    >
      <mask id="mask0_208_82" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="191" y="0" width="78" height="73">
        <motion.rect x="191" width="77.828" height="73" fill="url(#pattern0_208_82)"
          ref={ref1}
          style={{ y: rotate1 }}
        />
      </mask>
      <g mask="url(#mask0_208_82)">
        <rect x="178.445" y="-11.7852" width="90.1878" height="92.119" fill="#FED543"

        />
      </g>
      <rect x="164.572" y="444.125" width="23.0581" height="9.29472" transform="rotate(29.4568 164.572 444.125)" fill="#C8AD6E" />
      <rect x="183.369" y="438.832" width="23.0581" height="9.29472" transform="rotate(29.4568 183.369 438.832)" fill="#C8AD6E" />
      <rect x="190.83" y="453.613" width="23.0581" height="9.29472" transform="rotate(-60.5432 190.83 453.613)" fill="#C8AD6E" />
      <rect x="172.033" y="458.914" width="23.0581" height="9.29472" transform="rotate(-60.5432 172.033 458.914)" fill="#C8AD6E" />
      <motion.path d="M92.2675 555.894L89.2707 557.756L88.1215 555.1L86.8714 555.111L85.4266 558.292L82.8702 555.982L81.8411 556.575L82.6473 560.442L78.7653 559.604L78.1269 560.485L80.5732 563.17L77.0876 564.619L77.1408 565.702L81.1337 566.999L78.2137 569.817L78.8692 570.77L82.7361 569.984L81.9996 573.616L83.0404 574.273L85.9903 571.62L87.0574 575.11L88.3075 575.099L89.3993 571.588L92.4376 574.185L93.3798 573.51L92.7077 569.891L96.4998 570.606L97.0082 569.643L94.4292 566.875L98.0906 565.507L98.0805 564.424L94.3935 563.042L96.9213 560.31L96.3093 559.399L92.6108 559.475L93.2212 556.469L92.2675 555.894Z" fill="#C8AD6E"
        ref={ref2}
        style={{ y: rotate2 }}

      />
      <motion.path d="M1.5641 459C4.7047 467.805 7.60987 473.641 11.4818 477.008C15.1102 480.163 19.5201 481.098 25.5434 480.428C23.6202 482.427 22.2657 484.398 21.4268 486.428C20.4395 488.817 20.1769 491.259 20.5105 493.875C21.1317 498.744 23.8249 504.245 27.7341 511.201L28.5324 512.612L28.7447 512.986L29.1461 512.832C37.137 509.762 42.9373 507.047 46.4535 503.133C49.7712 499.439 51.0047 494.743 50.3002 487.893C54.5178 492.237 58.5849 494.091 63.4342 493.77C68.6125 493.427 74.604 490.601 82.5364 485.973L82.9023 485.76L82.7524 485.364C79.8516 477.71 77.4332 471.818 73.7969 468.104C70.3147 464.548 65.7672 463.03 58.8283 463.679C62.2326 459.67 64.1286 455.956 63.942 451.284C63.7424 446.287 61.1623 440.288 55.7758 431.742L55.5614 431.401L55.1822 431.538C46.5179 434.679 40.7602 437.571 37.4298 441.416C34.2774 445.055 33.3511 449.481 34.0359 455.554C29.7374 452.046 25.7539 450.344 20.965 450.641C15.861 450.959 9.9195 453.545 1.77837 458.403L1.42601 458.613L1.5641 459Z" stroke="#293464" strokeOpacity="0.4"
        ref={ref3}
        style={{ y: rotate3 }}
      />

    </motion.svg>
      <motion.svg
        ref={starRef}
        style={{ y: stary }}
        className="absolute -top-10 right-20"
        width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          animate={{ rotate: 360 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          opacity="0.9" d="M79.5051 5.5L62.8727 24.85L58.2156 1H51.7844L46.462 24.85L31.1602 5.5L25.8378 8.65L33.3778 32.95L9.87064 24.85L6.54415 29.575L23.3984 46.675L1 51.85L1.22177 57.7L25.8378 62.65L6.54415 79.975L9.87064 85.15L33.3778 76.6L25.8378 100.675L31.1602 104.275L46.462 85.15L51.7844 109H58.2156L62.8727 85.15L79.5051 104.275L84.384 100.675L76.4004 76.6L100.573 85.15L103.234 79.975L84.384 62.65L109 57.7V51.85L84.384 46.675L103.234 29.575L100.129 24.625L76.4004 32.95L84.384 8.65L79.5051 5.5Z" fill="#FED543" />
      </motion.svg>

    </>

  )
}