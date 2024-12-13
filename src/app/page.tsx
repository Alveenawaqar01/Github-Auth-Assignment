import { SessionWrapper } from "@/components/login/SessionWrapper";
import { auth } from "@/app/lib/auth";
import SigInComponent from "@/components/login/LoginComponent";
import SigOutComponent from "@/components/login/SignOutComponent";

export default async function Home() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      {/* Right side: Sign In or Sign Out Components */}
      <div className="w-full max-w-md space-y-8 p-8 bg-black rounded-lg shadow-lg">
        <SessionWrapper>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {isAuthenticated ? "Welcome Back!" : "Please Sign In"}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isAuthenticated
                ? "You are logged in. Enjoy your stay!"
                : "Sign in to your account to get started."}
            </p>
          </div>

          {/* Sign In or Sign Out Form */}
          <div className="bg-black p-8 rounded-lg shadow-lg">
            {isAuthenticated ? (
              <SigOutComponent />
            ) : (
              <SigInComponent />
            )}
          </div>
        </SessionWrapper>
      </div>
    </div>
  );
}
