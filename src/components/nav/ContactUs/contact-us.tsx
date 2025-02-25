import './contact-us.css';
import { Pen } from 'lucide-react';

export function ContactUs() {
  return (
    <div className="group/contact flex flex-row items-center gap-2 border-2 border-black bg-primary-foreground hover:bg-primary p-2 pl-4 cursor-pointer">
      <span className="text-primary font-bold group-hover/contact:text-primary-foreground">CONTACT US</span>
      <div>
        {/* <div className="bg-primary-foreground p-2 group-hover/contact:bg-primary border-2 border-black group-hover/contact:border-primary-foreground transition"> */}
        <Pen className="text-primary h-4 w-4 rotate-animation group-hover/contact:text-primary-foreground transition" />
        {/* </div> */}
      </div>
    </div>
  );
}
