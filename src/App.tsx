import { SignedIn, SignedOut, SignIn } from '@clerk/clerk-react';
import MainLayout from './layouts/MainLayout';
import { ThemeProvider } from '@/components/theme-provider';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SignedOut>
          <SignIn />
        </SignedOut>
        <SignedIn>
          <MainLayout />
        </SignedIn>
      </ThemeProvider>
    </>
  );
}

export default App;
