import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider } from "@/components/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SignedOut>
          <div className="flex justify-center h-svh items-center ">
            <SignIn />
          </div>
        </SignedOut>
        <SignedIn>
          <MainLayout />
        </SignedIn>
      </ThemeProvider>
    </>
  );
}

export default App;
