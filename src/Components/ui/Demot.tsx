import SimpleParallax from "simple-parallax-js";
import Image from "next/image";

export const Component = () => (
  <SimpleParallax 
    delay={0}
    orientation={"down"}
    scale={8}
    overflow
    maxTransition={60}
  >
    <Image src={"/HeroSection/image.png"} alt={"image"} width={1000} height={1824} />
  </SimpleParallax>
)