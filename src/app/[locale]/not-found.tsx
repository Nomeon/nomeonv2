import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
 
export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');
  return (
    <main className='container mx-auto flex px-8 flex-col gap-4 items-center justify-center min-h-screen'>
      <h1 className='font-baumans text-2xl lg:text-4xl'><span className='text-primary'>404{" "}</span>- {t('title')}</h1>
      <p className='font-noto text-center'>{t('description')}</p>
      <Button asChild>
        <Link href="/">{t('back')}</Link>
      </Button>
    </main>
  )
}