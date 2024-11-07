import { usePathname, useRouter } from 'next/navigation';

export let globalRouter: any = null;

export const useBase = () => {
  const pathname = usePathname();
  const router = useRouter();
  globalRouter = router;

  return {
    pathname,
    router,
  };
};

export default useBase;
