import Image from "next/image";
import { SignIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
     <h1>Hello World feifi</h1>
    </div>
  );
}
