import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';

const Home = () => {
  const t = useTranslations();
  return (
    <div>
      {t('welcome')}
      <LanguageSwitcher />
    </div>
  );
};

export default Home;
