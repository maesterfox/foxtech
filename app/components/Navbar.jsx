import Link from "next/link";
import Image from "next/image";
import Logo from "./fox-logo.png";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Fox Logo"
        width={90}
        placeholder="blur"
        quality={100}
      />
      <h1>FoxTech Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
}