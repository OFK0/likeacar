import { Flowbite } from 'flowbite-react';
import FlowbiteTheme from '@/flowbite.config';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Flowbite theme={{ theme: FlowbiteTheme }}>{children}</Flowbite>;
}
