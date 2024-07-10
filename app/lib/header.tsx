import {
  SignedIn,
  SignedOut,
  UserButton,
  UserProfile,
  useClerk,
} from "@clerk/remix";
import { Link } from "@remix-run/react";

export default () => {
  const { signOut } = useClerk();

  return (
    <header className="bg-transparent py-8 fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-20">
        <Link
          to="/"
          prefetch="intent"
          className="text-2xl font-semibold text-primary group"
        >
          <span className="group-hover:animate-wiggle inline-block">🔥</span>{" "}
          Ember Academy
        </Link>
        <nav>
          <ul className="flex gap-x-4 items-center font-medium">
            <li>
              <Link
                prefetch="intent"
                to="/#projects"
                className="transition-colors duration-300 text-[#663300] hover:text-[#ff8c00]"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                prefetch="intent"
                to="/#progress"
                className="transition-colors duration-300 text-[#663300] hover:text-[#ff8c00]"
              >
                My Progress
              </Link>
            </li>
            <li>
              <Link
                prefetch="intent"
                to="/#leaderboard"
                className="transition-colors duration-300 text-[#663300] hover:text-[#ff8c00]"
              >
                Leaderboard
              </Link>
            </li>
            <li>
              <Link
                prefetch="intent"
                to="/#resources"
                className="transition-colors duration-300 text-[#663300] hover:text-[#ff8c00]"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                prefetch="intent"
                to="/hof"
                className="transition-colors duration-300 text-[#663300] hover:text-[#ff8c00]"
              >
                Hall of Fame
              </Link>
            </li>
            <SignedOut>
              <li>
                <Link
                  prefetch="intent"
                  to="/sign-in"
                  className="transition-colors duration-300 text-[#663300] hover:text-[#ff8c00]"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  prefetch="intent"
                  to="/sign-up"
                  className="transition-colors duration-300 text-white bg-primary hover:bg-[#663300] rounded-2xl px-2 py-1 -hover:text-[#ff8c00]"
                >
                  Sign Up
                </Link>
              </li>
            </SignedOut>
            <SignedIn>
              <li>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8",
                    },
                  }}
                />
              </li>
            </SignedIn>
          </ul>
        </nav>
      </div>
    </header>
  );
};
