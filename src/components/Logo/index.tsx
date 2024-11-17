import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" title="likeacar.de">
      <Image src="/logo.svg" alt="likeacar.de" width={250} height={71} priority />
    </Link>
  );
}
