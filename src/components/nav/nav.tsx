import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ContactUs } from './ContactUs/contact-us';
import { Logo } from './logo';
import './nav.css';
import { Menu } from './Menu';

export function Navbar() {
  return (
    <nav>
      <div className="px-16 py-4">
        <div className="w-full overflow-hidden">
          <div className="w-full h-[1px] bg-black slide-in-right"></div>
        </div>
        <div className="flex justify-between p-2 items-center">
          <div>
            <Logo />
          </div>
          <div>
            <Menu />
          </div>
          <div>
            <ContactUs />
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="w-full h-[1px] bg-black slide-in-left"></div>
        </div>
      </div>
    </nav>
  );
}
