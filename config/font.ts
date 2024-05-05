import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

export const fontSerif = Plus_Jakarta_Sans({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const fontSans = Inter({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
