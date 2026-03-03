import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
    return (
        <header className="w-full h-21 flex flex-row items-center pr-5 justify-between bg-[#101012]">
            <img src="/gnoq.png" alt="" className="h-20" />
            <div className="flex flex-row items-center gap-3">
                <Link href={"/"} className="text-white">Início</Link>
                <Button className="bg-[#dceef7] text-black">Contate-nos!</Button>
            </div>
        </header>
    );
}