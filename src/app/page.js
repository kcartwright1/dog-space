import Image from "next/image";

import { SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <>
      <h1>Welcome to dog-space!!!</h1>
      <h3>A place for canine friends</h3>

      <div className="container">
        <div className="rwd-content-bodyTop">
          <Image src="dogs-removebg-preview (3).png" />
        </div>
        <div className="rwd-content-bodyBottom">
          <div>
            <SignInButton />
          </div>
        </div>
      </div>
    </>
  );
}
