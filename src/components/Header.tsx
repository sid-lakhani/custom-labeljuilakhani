import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row bg-primary text-secondary items-center justify-between px-24">
      <div className="flex flex-row gap-4 items-center justify-center">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <h1 className="text-2xl">Jui Lakhani</h1>
      </div>
      <div>
        <ul className="flex flex-row gap-4 text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
