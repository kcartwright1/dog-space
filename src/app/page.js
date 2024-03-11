"use client";
import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="container">
      <div className="rwd-content-bodyTop">
        <div>
          <Image
            src={"/dogspacelogo.png"}
            width={500}
            height={300}
            alt="dogspace logo"
          />
        </div>
        <div className="rwd-content-bodyBottom">
          <div className="button">
            <SignInButton
              src="/whitepaw.png"
              width={200}
              height={250}
              alt="sign in button"
            />
          </div>
          <div>
            <SignUpButton />
          </div>
        </div>
      </div>
      <div>
        <Image
          src={"/dogfriends.png"}
          width={800}
          height={500}
          alt="group of happy dogs"
        />
      </div>
    </div>
  );
}
