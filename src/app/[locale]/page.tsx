import { BackgroundBeams } from '@/components/BackgroundBeams';
import styles from '@/styles/HomePage.module.scss';
import classNames from 'classnames/bind';
import { useTranslations } from 'next-intl';
import Car3DModel from './components/Car3dModel';

const cx = classNames.bind(styles);

export default function Home() {
  const t = useTranslations();

  return (
    <div className={cx('homepage')}>
      <div className={cx('homepage__beams-container')}>
        <BackgroundBeams />
        <div className={cx('homepage__beams-container__content')}>
          <div className={cx('homepage__beams-container__car-model')}>
            <Car3DModel />
          </div>
          <div className={cx('homepage__beams-container__title')}>
            <span>
              {t.rich('homepage.jumbotron-title', {
                gradientText: (chunks) => (
                  <>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-primary via-primary-400 to-primary-600 py-4 drop-shadow-md">
                      <span className="">{chunks}</span>
                    </div>
                  </>
                ),
              })}
            </span>
          </div>
        </div>
        <div className={cx('homepage__beams-container__bottom-gradient')} />
      </div>
    </div>
  );
}