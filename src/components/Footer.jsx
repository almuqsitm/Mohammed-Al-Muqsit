import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 bg-zinc-950 text-center text-zinc-500 border-t border-zinc-900">
      <p className="flex justify-center items-center gap-2 text-sm">
        Made by Mohammed Al-Muqsit &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
