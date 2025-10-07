import { useEffect, useRef, useState } from "react";
export default function ScrollTypingEffect(
  { text, className, colorChange = "#333333" }: { text: string, className: string, colorChange?: string }) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const lastScrollYRef = useRef<number>(0);
  const currentIndexRef = useRef<number>(0);
  const spansRef = useRef<HTMLElement[]>([]);
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    if (!isVisible) {
      lastScrollYRef.current = 0;
      currentIndexRef.current = 0
      return
    }

  }, [isVisible])

  useEffect(() => {
    const paragraph = paragraphRef.current;

    if (!paragraph) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting)
      })
    }, { threshold: 0.1 })
    observer.observe(paragraph)


    const words = (paragraph.textContent || "").split(" ");
    paragraph.textContent = "";

    const spanArray: HTMLElement[] = [];

    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.textContent = word + (index < words.length - 1 ? " " : "");
      paragraph.appendChild(span);
      spanArray.push(span);
    });

    spansRef.current = spanArray;


    lastScrollYRef.current = 0;
    const handleScroll = () => {
      if (!isVisible) {

        return
      }
      const scrollY = window.scrollY;
      const spans = spansRef.current;
      const idx = currentIndexRef.current;

      if (scrollY > lastScrollYRef.current) {
        // scroll up → reveal next character
        if (idx < spans.length) {
          spans[idx].style.color = colorChange
          spans[idx].classList.add("visible");
          currentIndexRef.current += 1;
        }
      } else {
        // scroll down → hide last character
        if (idx > 0) {
          spans[idx - 1].classList.remove("visible");
          currentIndexRef.current -= 1;
        }
      }

      lastScrollYRef.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [isVisible]);

  return (
    <>

      <div className={`${className} `}
        ref={paragraphRef}
        id="desc"
      >
        {text}
      </div>



    </>
  );
}
