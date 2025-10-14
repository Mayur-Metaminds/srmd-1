import { useAnimation,motion,useInView } from "framer-motion";
import { useEffect, useRef, } from "react";
import { useParallax } from "@/hooks/paralllelx";
import { useRotateScroll } from "@/hooks/useScrollRotate";
import { WindowSnakeReveal } from "./WindowSnakeReveal";

export function MobileSnakeReveal() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { ref: mobref1, rotate: mobrotate1 } = useRotateScroll()
  const { ref: mobref2, rotate: mobrotate2 } = useRotateScroll()
  const { ref: mobref3, rotate: mobrotate3 } = useRotateScroll()
  const { ref: mobref4, rotate: mobrotate4 } = useRotateScroll()


  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="block sm:hidden w-full h-auto -mt-8 mb-4 absolute top-[300px]"
    //   initial={{ opacity: 0 }}
    //   animate={isInView ? { opacity: 1 } : {}}
    //   transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
    >
      <svg
        width="375" height="188"
        viewBox="0 0 375 188"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          {/* Rectangle mask that expands */}
          {/* <clipPath id="MobilesnakeClip">
            <motion.rect
              x="0"
              y="0"
              height="188"
              initial={{ width: 0 }}
              animate={controls}
              variants={{
                visible: {
                  width: "100%",
                  transition: { duration: 1.5, ease: "easeOut" },
                },
              }}
            />
          </clipPath> */}
        </defs>


        <path d="M-26 145.5C-26 145.5 164 20.3053 244.5 116.298C325 212.29 497 79 497 79" stroke="#FED543" strokeWidth="32" clipPath="url(#MobilesnakeClip)" />
        <motion.path d="M225.695 24.3284L231.726 31.0486L233.415 22.7656H235.747L237.677 31.0486L243.225 24.3284L245.155 25.4224L242.421 33.8616L250.945 31.0486L252.151 32.6895L246.039 38.6283L254.161 40.4255L254.081 42.4572L245.155 44.1763L252.151 50.1931L250.945 51.9904L242.421 49.021L245.155 57.3821L243.225 58.6324L237.677 51.9904L235.747 60.2733H233.415L231.726 51.9904L225.695 58.6324L223.926 57.3821L226.821 49.021L218.056 51.9904L217.091 50.1931L223.926 44.1763L215 42.4572V40.4255L223.926 38.6283L217.091 32.6895L218.217 30.9704L226.821 33.8616L223.926 25.4224L225.695 24.3284Z" fill="#AF212B"
          ref={mobref1}
          style={{ rotate: mobrotate1 }}


        />

        <motion.path d="M289.47 4.41667L306.514 23.4083L311.287 0H317.877L323.331 23.4083L339.012 4.41667L344.466 7.50833L336.739 31.3583L360.828 23.4083L364.237 28.0458L346.965 44.8292L369.918 49.9083L369.691 55.65L344.466 60.5083L364.237 77.5125L360.828 82.5917L336.739 74.2L344.466 97.8292L339.012 101.363L323.331 82.5917L317.877 106H311.287L306.514 82.5917L289.47 101.363L284.471 97.8292L292.652 74.2L267.881 82.5917L265.154 77.5125L284.471 60.5083L259.246 55.65V49.9083L284.471 44.8292L265.154 28.0458L268.336 23.1875L292.652 31.3583L284.471 7.50833L289.47 4.41667Z" fill="#0B5399"
          ref={mobref2}
          style={{ rotate: mobrotate2 }}
        />

        <motion.path d="M115.74 118.47L124.454 131.803L129.722 117.697L133.814 118.293L134.897 133.321L146.504 122.944L149.586 125.356L142.44 139.469L158.182 136.707L159.842 139.895L147.465 148.757L161.218 153.984L160.511 157.529L144.369 158.268L154.972 170.613L152.355 173.459L138.223 166.073L140.695 181.444L136.96 183.145L129.071 170.073L123.379 184.116L119.287 183.521L118.628 168.554L106.196 178.671L103.439 176.026L110.846 162.091L94.6375 165.065L93.4441 161.665L107.113 152.85L91.9272 147.555L92.4925 143.99L108.657 143.114L98.3138 130.947L100.768 128.218L115.063 135.487L112.331 119.938L115.74 118.47Z" fill="#C8AD6E"
          ref={mobref3}
          style={{ rotate: mobrotate3 }}
        />

        <motion.path d="M62.4196 143.518L68.3018 152.517L71.8576 142.996L74.62 143.398L75.3507 153.542L83.1853 146.538L85.266 148.166L80.4425 157.692L91.0679 155.828L92.1886 157.98L83.8339 163.962L93.1172 167.49L92.6404 169.883L81.7442 170.382L88.9015 178.714L87.1352 180.635L77.5957 175.65L79.2643 186.025L76.7433 187.174L71.418 178.35L67.5764 187.829L64.814 187.427L64.3691 177.325L55.9776 184.154L54.1167 182.368L59.1161 172.962L48.1756 174.97L47.37 172.674L56.5967 166.724L46.3461 163.15L46.7277 160.744L57.6386 160.152L50.6571 151.94L52.3135 150.097L61.9629 155.005L60.1185 144.509L62.4196 143.518Z" fill="#1CB377"
          ref={mobref4}
          style={{ rotate: mobrotate4 }}
        />
      </svg>
    </motion.div>
  );
}