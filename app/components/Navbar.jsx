import Link from "next/link";
import Image from "next/image";
import Logo from "./fox-logo.png";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  return (
    <nav className="flex flex-wrap justify-between items-center p-4">
      <div className="flex items-center">
        <Image
          src={Logo}
          alt="Fox Logo"
          s
          width={90}
          placeholder="blur"
          quality={100}
        />
        <h1 className="ml-4">FoxTech Helpdesk</h1>
      </div>
      {user && <span className="mr-6">Hello, {user.email}</span>}
      <LogoutButton />

      <div className="flex flex-wrap items-center">
        <Link href="/" className="mr-6">
          Dashboard
        </Link>
        <Link href="/tickets" className="mr-6">
          Tickets
        </Link>
      </div>
    </nav>
  );
}
