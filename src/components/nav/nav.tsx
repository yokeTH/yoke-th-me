import { ContactUs } from './ContactUs/contact-us';
import { Logo } from './logo';
import { Menu } from './Menu';
import * as motion from 'motion/react-client';
import React from 'react';

export function Navbar() {
  return (
    <nav>
      <div className="px-16 py-4">
        <div className="flex justify-end">
          <motion.div
            initial={{ width: 0, height: 1 }}
            animate={{ width: '100%', height: 1 }}
            transition={{
              duration: 1,
            }}
            style={{
              backgroundColor: 'black',
            }}
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
          initial={{ width: 0, height: 1 }}
          animate={{ width: '100%', height: 1 }}
          transition={{
            duration: 1,
          }}
          style={{
            backgroundColor: 'black',
          }}
        />
      </div>
    </nav>
  );
}
