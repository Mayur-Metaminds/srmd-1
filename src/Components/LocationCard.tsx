"use client"
import { UserRound } from "lucide-react";
import Image from "next/image";
interface ContactData {
    name: string;
    mobile: number | string;
    email: string;
    Address: string;
    city: string
    town: string
}
export default function LocationCard({ ContactData }: { ContactData: ContactData }) {

    return (
        <div className="w-full  border-2 border-[#C8AD6E] rounded-lg overflow-hidden bg-white/80 shadow-md flex flex-col justify-center items-center">
            {/* Header */}
            <div className="bg-[#C8AD6E] text-white text-center py-3 px-4 font-medium  mt-2 w-[95%] flex justify-center m-auto rounded-lg text-[20px] ">
                {ContactData.town}&nbsp;-&nbsp;{ContactData.city}
            </div>

            {/* Content */}
            <div className="w-full p-4 space-y-5 flex-col flex text-[16px] sm:text-[20px] font-[400] ">
                {/* Name and Phone on same line */}
                <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-0  items-center sm:items-start justify-between w-[80%]">
                    <div className="flex items-center gap-2">

                        <UserRound className=" text-white" fill="#000000" width={24} height={24} />
                        <span className="text-[#222222]  ">{ContactData.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={"/phone.png"} alt="ff" width={24} height={24} />
                        <span className="text-[#222222] ">{ContactData.mobile}</span>
                    </div>
                </div>

                {/* Email */}
                <a className="flex items-center gap-2 group" href={"mailto:" + ContactData.email}>

                    <Image src={"/mail.png"} alt="ff" width={24} height={24} className="" />
                    <span className="text-white-900">{ContactData.email}</span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-2 " title={ContactData.Address} >
                    {/* <MapPin className=" text-white" fill="#00000" height={20} /> */}
                    <Image src={"/mappin.png"} alt="ff" width={24} height={24} />
                    <span className="text-[#222222]  leading-relaxed line-clamp-2">
                        {ContactData.Address}
                    </span>

                </div>

            </div>
        </div>
    );
}