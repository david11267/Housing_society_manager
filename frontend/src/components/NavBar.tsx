import { UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "./ThemeProvider";
import { dark } from "@clerk/themes";

export default function NavBar() {
  const { theme } = useTheme();

  const getClerkTheme = () => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? dark : undefined;
    }
    return theme === "dark" ? dark : undefined;
  };

  return (
    <div className="flex justify-between">
      <div className="bg-background border-2 rounded-md p-2 space-x-2 inline-flex  ">
        <Button variant="outline">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="outline">Button</Button>
      </div>

      <div className="space-x-4 dark:">
        <ModeToggle />
        <UserButton appearance={{ baseTheme: getClerkTheme() }} showName />
      </div>
    </div>
  );
}
