import { useState, useCallback } from 'react';
import { SavedCat, CatConfig } from '@/types';
import { loadSavedCats, saveCat } from '@/utils/storage';

export const useSavedCats = () => {
  const [savedCats, setSavedCats] = useState<SavedCat[]>(loadSavedCats);

  const save = useCallback((config: CatConfig) => {
    saveCat(config);
    setSavedCats(loadSavedCats());
  }, []);

  const refresh = useCallback(() => {
    setSavedCats(loadSavedCats());
  }, []);

  return {
    savedCats,
    save,
    refresh,
  };
};
