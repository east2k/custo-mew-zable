import { useState, useCallback } from 'react';
import { CatConfig } from '@/types';
import { DEFAULT_CAT } from '@/constants';
import { generateRandomCat } from '@/utils/storage';

export const useCatConfig = () => {
  const [config, setConfig] = useState<CatConfig>(DEFAULT_CAT);

  const updateConfig = useCallback((newConfig: CatConfig) => {
    setConfig(newConfig);
  }, []);

  const randomize = useCallback(() => {
    setConfig(generateRandomCat());
  }, []);

  return {
    config,
    updateConfig,
    randomize,
  };
};
