import { UserButton } from '@clerk/clerk-react';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';

export default function NavBar() {
  return (
    <div className="flex justify-between">
      <div className="bg-background border-2 rounded-md p-2 space-x-2 inline-flex  ">
        <Button variant="outline">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="outline">Button</Button>
      </div>

      <ModeToggle />
      <UserButton showName />
    </div>
  );
}
