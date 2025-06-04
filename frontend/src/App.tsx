import { SignedIn, SignedOut, SignIn } from '@clerk/clerk-react';
import MainLayout from './layouts/MainLayout';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />

      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster />

        <SignedOut>
          <div className="flex justify-center h-svh items-center ">
            <SignIn />
          </div>
        </SignedOut>
        <SignedIn>
          <MainLayout />
        </SignedIn>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
