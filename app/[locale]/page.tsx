import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import { Button } from '@/components/ui/button';

const Home = () => {
  const t = useTranslations();
  return (
    <div>
      {t('welcome')}
      <div className="w-32">
        <LanguageSwitcher />
      </div>
      <Button color="primary">ADD</Button>
    </div>
  );
};

export default Home;
