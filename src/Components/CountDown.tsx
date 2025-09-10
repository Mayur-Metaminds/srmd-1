"use client";

import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { CalendarDays, LocateFixed, MapPin } from "lucide-react";


export default function CountDown() {
    return (
        <>
            <div id="count-down" className="w-full m-auto flex flex-col items-center mt-4 sm:mt-6 lg:mt-10 min-h-[400px] sm:min-h-[500px] lg:h-[621px] p-2 sm:p-4 lg:p-2 gap-4 sm:gap-6 lg:gap-10 justify-center relative overflow-hidden" style={{background:"linear-gradient(#293464B2), url('/countdownbg.jpg')"}}>
                <svg width="1282" height="549" viewBox="0 0 1282 549" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[-12px] hidden sm:block">
                    <path d="M30.5145 431.638L24.6313 432.552L27.4185 427.614L26.2773 426.64L21.7192 430.066L21.9357 424.313L20.514 424.066L18.1702 429.52L15.2261 424.521L13.9199 424.856L14.3198 430.444L9.56119 427.969L8.71419 429.04L12.3323 433.648L6.28369 433.799L6.08989 435.222L11.5567 437.266L6.57101 440.396L6.97001 441.841L12.583 440.766L9.91387 445.804L11.0551 446.779L15.4951 443.252L15.5488 449.166L16.96 449.266L19.191 443.785L22.1849 448.964L23.4412 448.449L22.7213 442.519L27.8394 445.37L28.7257 444.332L25.1417 439.684L31.0775 439.506L31.2766 438.157L25.8045 436.039L30.903 432.937L30.5145 431.638Z" fill="#C8AD6E"/>
                    <circle cx="12.6" cy="12.6" r="12.6" transform="matrix(-1 0 0 1 513.266 0.109375)" fill="#6982C1" fillOpacity="0.4"/>
                    <circle cx="12.6" cy="12.6" r="12.6" transform="matrix(-1 0 0 1 438.199 84.0078)" fill="#C8AD6E"/>
                    <rect x="1249.74" y="492.381" width="15.7799" height="6.36088" transform="rotate(-130.1 1249.74 492.381)" fill="#C8AD6E"/>
                    <rect x="1236.42" y="491.271" width="15.7799" height="6.36088" transform="rotate(-130.1 1236.42 491.271)" fill="#C8AD6E"/>
                    <rect x="1235.17" y="480.014" width="15.7799" height="6.36088" transform="rotate(139.9 1235.17 480.014)" fill="#C8AD6E"/>
                    <rect x="1248.49" y="481.115" width="15.7799" height="6.36088" transform="rotate(139.9 1248.49 481.115)" fill="#C8AD6E"/>
                    <rect x="141.734" y="166.367" width="15.7799" height="6.36088" transform="rotate(-130.1 141.734 166.367)" fill="#293464"/>
                    <rect x="128.414" y="165.266" width="15.7799" height="6.36088" transform="rotate(-130.1 128.414 165.266)" fill="#293464"/>
                    <rect x="127.164" y="154.008" width="15.7799" height="6.36088" transform="rotate(139.9 127.164 154.008)" fill="#293464"/>
                    <rect x="140.484" y="155.109" width="15.7799" height="6.36088" transform="rotate(139.9 140.484 155.109)" fill="#293464"/>
                    <rect x="1255.42" y="281.133" width="15.7799" height="6.36088" transform="rotate(-9.08373 1255.42 281.133)" fill="#293464"/>
                    <rect x="1263.23" y="270.287" width="15.7799" height="6.36088" transform="rotate(-9.08373 1263.23 270.287)" fill="#293464"/>
                    <rect x="1273.53" y="275.014" width="15.7799" height="6.36088" transform="rotate(-99.0837 1273.53 275.014)" fill="#293464"/>
                    <rect x="1265.72" y="285.867" width="15.7799" height="6.36088" transform="rotate(-99.0837 1265.72 285.867)" fill="#293464"/>
                    <path d="M253.926 308.888C250.694 302.413 248.68 299.497 243.246 300.722C246.995 296.586 246.386 293.603 241.81 287.422C234.765 290.755 232.993 293.099 233.619 298.104C229.504 294.397 226.548 295.008 220.43 299.489C223.797 307.079 226.19 308.333 230.948 307.663C226.83 312.396 228.633 315.447 232.546 320.955C239.35 317.653 241.726 315.429 240.334 310.002C245.053 314.203 248.157 312.946 253.926 308.888Z" fill="#15A9EE" fillOpacity="0.4"/>
                    <path d="M1122.93 130.888C1119.69 124.413 1117.68 121.497 1112.25 122.722C1115.99 118.586 1115.39 115.603 1110.81 109.422C1103.76 112.755 1101.99 115.099 1102.62 120.104C1098.5 116.397 1095.55 117.008 1089.43 121.489C1092.8 129.079 1095.19 130.333 1099.95 129.663C1095.83 134.396 1097.63 137.447 1101.55 142.955C1108.35 139.653 1110.73 137.429 1109.33 132.002C1114.05 136.203 1117.16 134.946 1122.93 130.888Z" fill="#C8AD6E"/>
                    <rect x="589.711" y="528.023" width="25.1988" height="4.02024" transform="rotate(-34.703 589.711 528.023)" fill="#95A4E6" fillOpacity="0.4"/>
                    <rect x="593.73" y="533.828" width="25.1988" height="4.02024" transform="rotate(-34.703 593.73 533.828)" fill="#95A4E6" fillOpacity="0.4"/>
                    <rect x="597.754" y="539.633" width="25.1988" height="4.02024" transform="rotate(-34.703 597.754 539.633)" fill="#95A4E6" fillOpacity="0.4"/>
                    <rect x="601.77" y="545.43" width="25.1988" height="4.02024" transform="rotate(-34.703 601.77 545.43)" fill="#95A4E6" fillOpacity="0.4"/>
                </svg>

                <AnimatedNumberCountdown
                    endDate={new Date("2025-11-16")}
                    className="my-2 sm:my-4"
                    compactPreview={true}
                />
                <div className="text-white flex flex-col items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 gap-1 sm:gap-2 lg:gap-1 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-[37px] px-4">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center text-center">
                        <CalendarDays width={20} height={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-[37px] xl:h-[37px]"/>
                        <span>Sunday,16 November, 2025</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center text-center">
                        <MapPin width={20} height={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-[37px] xl:h-[37px]" />
                        <span>Lorem ipsum dolor sit amet consectetur .</span>
                    </div>
                </div>

                <button className="bg-[#FED543] rounded-md hover:scale-95 duration-500 w-full max-w-[240px] sm:max-w-[280px] h-[52px] font-bold z-100 mx-4">
                   <span>Know More</span>
                </button>

            </div>
        </>
    )
}

interface CountdownProps {
    endDate: Date;
    startDate?: Date;
    className?: string;
    compactPreview?: boolean;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function AnimatedNumberCountdown({
    endDate,
    startDate,
    className,
    compactPreview = false,
}: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const start = startDate ? new Date(startDate) : new Date();
            const end = new Date(endDate);
            const difference = end.getTime() - start.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [endDate, startDate]);

    if (compactPreview) {
        return (
            <div className="  min-h-14 flex items-center justify-center gap-3  w-full p-1 text-white ">
                <div className="flex flex-col items-center w-24 text-black p-2 border-2 bg-white rounded-md border-yellow-300">
                    <NumberFlow
                        value={timeLeft.days}
                        className="text-4xl font-medium text-foreground leading-none"
                        format={{ minimumIntegerDigits: 2 }}
                    />
                    <span>Days</span>
                </div>
                <span className="text-4xl font-bold text-muted-foreground mx-0.5">
                    :
                </span>
                <div className="flex flex-col items-center w-24 text-black p-2 border-2 bg-white rounded-md border-yellow-300 ">
                    <NumberFlow
                        value={timeLeft.hours}
                        className="text-4xl font-medium text-foreground leading-none"
                        format={{ minimumIntegerDigits: 2 }}
                    />
                     <span>Hour</span>
                </div>
                <span className="text-3xl font-medium text-muted-foreground">:</span>
                <div className="flex flex-col items-center w-24 text-black p-2 border-2 bg-white rounded-md border-yellow-300">
                    <NumberFlow
                        value={timeLeft.minutes}
                        className="text-4xl font-medium text-foreground leading-none"
                        format={{ minimumIntegerDigits: 2 }}
                    />
                     <span>Min</span>
                </div>
                <span className="text-3xl font-bold text-muted-foreground">:</span>
                <div className="flex flex-col items-center w-24 text-black p-2 border-2 bg-white rounded-md border-yellow-300">
                    <NumberFlow
                        value={timeLeft.seconds}
                        className="text-4xl font-medium text-foreground leading-none"
                        format={{ minimumIntegerDigits: 2 }}
                    />
                     <span>Sec</span>
                </div>
            </div>
        );
    }

    return (
        <div className={`w-full max-w-4xl mx-auto px-4 ${className}`}>
            {/* Mobile Layout (< 640px) */}
            <div className="sm:hidden">
                <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col items-center rounded-lg p-3 bg-card dark:bg-card border border-border">
                        <NumberFlow
                            value={timeLeft.days}
                            className="text-2xl font-semibold tracking-tighter text-foreground"
                            format={{ minimumIntegerDigits: 2 }}
                        />
                    </div>
                    <div className="flex flex-col items-center rounded-lg p-3 bg-card dark:bg-card border border-border">
                        <NumberFlow
                            value={timeLeft.hours}
                            className="text-2xl font-semibold tracking-tighter text-foreground"
                            format={{ minimumIntegerDigits: 2 }}
                        />
                    </div>
                    <div className="flex flex-col items-center rounded-lg p-3 bg-card dark:bg-card border border-border">
                        <NumberFlow
                            value={timeLeft.minutes}
                            className="text-2xl font-semibold tracking-tighter text-foreground"
                            format={{ minimumIntegerDigits: 2 }}
                        />
                    </div>
                    <div className="flex flex-col items-center rounded-lg p-3 bg-card dark:bg-card border border-border">
                        <NumberFlow
                            value={timeLeft.seconds}
                            className="text-2xl font-semibold tracking-tighter text-foreground"
                            format={{ minimumIntegerDigits: 2 }}
                        />
                    </div>
                </div>
            </div>

            {/* Tablet Layout (640px - 1024px) */}
            <div className="hidden sm:flex lg:hidden items-center justify-center gap-2">
                <div className="flex flex-col items-center">
                    <NumberFlow
                        value={timeLeft.days}
                        className="text-3xl font-semibold tracking-tighter text-foreground"
                        format={{ minimumIntegerDigits: 2 }}
                    />
                </div>
                <div className="text-xl font-bold mx-1 text-muted-foreground">:</div>
                <div className="flex flex-col items-center">
                    <NumberFlow
                        value={timeLeft.hours}
                        className="text-3xl font-semibold tracking-tighter text-foreground"
                        format={{ minimumIntegerDigits: 2 }}
                    />
                </div>
                <div className="text-xl font-bold mx-1 text-muted-foreground">:</div>
                <div className="flex flex-col items-center">
                    <NumberFlow
                        value={timeLeft.minutes}
                        className="text-3xl font-semibold tracking-tighter text-foreground"
                        format={{ minimumIntegerDigits: 2 }}
                    />
                </div>
                <div className="text-xl font-bold mx-1 text-muted-foreground">:</div>
                <div className="flex flex-col items-center">
                    <NumberFlow
                        value={timeLeft.seconds}
                        className="text-3xl font-semibold tracking-tighter text-foreground"
                        format={{ minimumIntegerDigits: 2 }}
                    />
                </div>
            </div>

            {/* Desktop Layout (>= 1024px) */}
            <div className="hidden lg:flex items-center justify-center gap-4">
                <div className="flex flex-col items-center">
                    <NumberFlow
                        value={timeLeft.days}
                        className="text-5xl font-semibold tracking-tighter text-foreground"
                        format={{ minimumIntegerDigits: 2 }}
                    />
                </div>
                <div className="text-2xl font-bold text-muted-foreground">:</div>
                <div className="flex flex-col items-center">
                    <NumberFlow
                        value={timeLeft.hours}
                        className="text-5xl font-semibold tracking-tighter text-foreground"
                        format={{ minimumIntegerDigits: 2 }}
                    />
                </div>
                <div className="text-2xl font-bold text-muted-foreground">:</div>
                <div className="flex flex-col items-center">
                    <NumberFlow
                        value={timeLeft.minutes}
                        className="text-5xl font-semibold tracking-tighter text-foreground"
                        format={{ minimumIntegerDigits: 2 }}
                    />
                </div>
                <div className="text-2xl font-bold text-muted-foreground">:</div>
                <div className="flex flex-col items-center">
                    <NumberFlow
                        value={timeLeft.seconds}
                        className="text-5xl font-semibold tracking-tighter text-foreground"
                        format={{ minimumIntegerDigits: 2 }}
                    />
                </div>
            </div>
        </div>
    );
}

