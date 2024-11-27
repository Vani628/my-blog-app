import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { imgs } from "@/Imgs/imgs";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={imgs.profile} width={40} alt="" />
          </div>
          
          {children}
        </div>
      </div>
    </>
  );
}
