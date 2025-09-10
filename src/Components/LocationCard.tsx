import { Mail, MapPin, Phone, User, UserRound } from "lucide-react";
import Image from "next/image";

export default function LocationCard() {
    return (
        <div className="w-[45%]sm:w-full  border-2 border-[#FED543] rounded-lg overflow-hidden bg-white/80 shadow-md flex flex-col justify-center items-center">
            {/* Header */}
            <div className="bg-[#C8AD6E] text-white text-center py-3 px-4 font-medium  mt-2 w-[95%] flex justify-center m-auto rounded-lg text-[20px] ">
                Mumbai - Location
            </div>
            
            {/* Content */}
            <div className="p-4 space-y-5 ">
                {/* Name and Phone on same line */}
                <div className="flex items-center justify-between w-[80%]">
                    <div className="flex items-center gap-2">
                        <UserRound className=" text-white"  fill="#000000" width={24} height={24}/>
                        <span className="text-gray-900 text-[20px] ">Jashel Metha</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* <Phone className=" text-white" fill="#00000" color="#ffffff" /> */}
                        <Image src={"/phone.png"} alt="ff" width={24} height={24} />
                        <span className="text-gray-900 text-[20px]">9986964695</span>
                    </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-2">
                    {/* <Mail className=" text-white" fill="#000000" color="#FFFFFF" /> */}
                    <Image src={"/mail.png"} alt="ff" width={24} height={24} />
                    <span className="text-white-900 text-[20px]">bengaluru@devinetouch.srmd.org</span>
                </div>
                
                {/* Address */}
                <div className="flex items-center gap-2">
                    {/* <MapPin className=" text-white" fill="#00000" height={20} /> */}
                    <Image src={"/mappin.png"} alt="ff" width={24} height={24} />
                    <span className="text-gray-900 text-[20px] leading-relaxed">
                        104 Shanti Sadan, Serpentine Street, Kumara Park West, Bangalore - 560020
                    </span>
                </div>
            </div>
        </div>
    );
}