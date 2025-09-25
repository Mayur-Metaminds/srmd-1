import { useEffect,useRef,useState } from "react";
export default function ScrollTypingEffect(
  { text, className }: { text: string, className: string }) {
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

    const text = paragraph.textContent || "";
    paragraph.textContent = "";

    const spanArray: HTMLElement[] = [];
    for (let char of text) {
      const span = document.createElement("span");
      span.textContent = char;
      paragraph.appendChild(span);
      spanArray.push(span);
    //   span.style.fontSize = "40px"
    }
    spansRef.current = spanArray;


    lastScrollYRef.current = 0;
    const handleScroll = () => {
      if (!isVisible) {

        return
      }
      const scrollY = window.scrollY;
      const spans = spansRef.current;
      let idx = currentIndexRef.current;

      if (scrollY > lastScrollYRef.current) {
        // scroll up → reveal next character
        if (idx < spans.length) {
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

      <div className={`${className}   text-[#33333366]`}
        ref={paragraphRef}
        id="desc"
      >
        {text}
      </div>



    </>
  );
}
