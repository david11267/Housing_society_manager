import { UserButton } from "@clerk/clerk-react";
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
      <div className="space-x-4 dark:">
        <ModeToggle />
        <UserButton appearance={{ baseTheme: getClerkTheme() }} showName />
      </div>
    </div>
  );
}
