import { ContactUs } from './ContactUs/contact-us';
import { Logo } from './logo';
import { Menu } from './Menu';
import * as motion from 'motion/react-client';
import React from 'react';

const lineStyle: React.CSSProperties = {
  height: '4px',
  background: 'black',
};

export function Navbar() {
  return (
    <nav>
      <div className="px-4 md:px-16 py-4">
        <div className="flex justify-end">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{
              duration: 1,
            }}
            style={lineStyle}
          />
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
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{
            duration: 1,
          }}
          style={lineStyle}
        />
      </div>
    </nav>
  );
}
