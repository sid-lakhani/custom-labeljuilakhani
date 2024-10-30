import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="md:flex flex-row bg-primary text-secondary items-center justify-between px-24 hidden">
        <Link
          href="/"
          className="flex flex-row gap-4 items-center justify-center"
        >
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <h1 className="text-2xl">Jui Lakhani</h1>
        </Link>
        <div>
          <ul className="flex flex-row gap-4 text-lg">
            <Link href="/" className="hover:border-b border-secondary">
              Customs
            </Link>
            <Link href="/" className="hover:border-b border-secondary">
              Projects
            </Link>
          </ul>
        </div>
      </div>
      <div className="md:hidden flex flex-row items-center justify-center bg-primary text-secondary">
        <Sheet>
          <SheetTrigger>
            <p>Nav</p>
          </SheetTrigger>
          <SheetContent side="left">
            <ul className="flex flex-col gap-4 text-lg">
              <Link href="/" className="hover:border-b border-secondary">
                Customs
              </Link>
              <Link href="/" className="hover:border-b border-secondary">
                Projects
              </Link>
            </ul>
          </SheetContent>
        </Sheet>
        <Image src="/logo.png" alt="logo" width={80} height={80} />
        <h1 className="text-2xl">Jui Lakhani</h1>
      </div>
    </>
  );
}
