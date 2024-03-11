import { SignOutButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="dashcontainer">
      <div className="dash-content-bodyTop">
        <div>
          <h1>Hello, Welcome to your pawfect post feed!</h1>
        </div>
        <div className="dash-content-bodyBottom">
          <div className="mytimeline">
            <h2>My Timeline</h2>
          </div>
          <div className="friendsposts">
            <h2>My Fur Friend's Posts</h2>
          </div>
          <SignOutButton></SignOutButton>
        </div>
      </div>
    </div>
  );
}
