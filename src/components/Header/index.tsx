import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '../Logo';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../LanguageSwitcher';

const cx = classNames.bind(styles);

export default function Header() {
  const t = useTranslations();

  return (
    <header className={cx('header')}>
      <div className={cx('header__inner')}>
        <Logo />

        <nav className={cx('header__nav')}>
          <Link href="/">{t('menu.home')}</Link>
          <Link href="/about-us">{t('menu.about-us')}</Link>
          <Link href="/used-cars">{t('menu.used-cars')}</Link>
          <Link href="/repair-service">{t('menu.repair-service')}</Link>
          <Link href="/contact-us">{t('menu.contact-us')}</Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
