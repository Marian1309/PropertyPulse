import { useContext } from 'react';

import { GlobalContext } from '@/providers/context';

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default useGlobalContext;
