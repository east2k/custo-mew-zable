import { CatConfig, SavedCat } from '@/types';
import {
  BODY_TYPES,
  EYE_TYPES,
  EAR_TYPES,
  TAIL_TYPES,
  COLOR_PALETTE,
} from '@/constants';

const STORAGE_KEY = 'customewzable_cats';
const MAX_SAVED_CATS = 20;

function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function loadSavedCats(): SavedCat[] {
  if (typeof window === 'undefined') return [];

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load saved cats:', error);
    return [];
  }
}

export function saveCat(config: CatConfig): SavedCat {
  const savedCat: SavedCat = {
    ...config,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
  };

  try {
    const cats = loadSavedCats();
    cats.unshift(savedCat);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cats.slice(0, MAX_SAVED_CATS)));
  } catch (error) {
    console.error('Failed to save cat:', error);
  }

  return savedCat;
}

export function deleteCat(id: string): void {
  try {
    const cats = loadSavedCats().filter((cat) => cat.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cats));
  } catch (error) {
    console.error('Failed to delete cat:', error);
  }
}

export function generateRandomCat(): CatConfig {

  return {
    bodyType: randomPick(BODY_TYPES),
    primaryColor: randomPick(COLOR_PALETTE),
    eyeType: randomPick(EYE_TYPES),
    earType: randomPick(EAR_TYPES),
    tailType: randomPick(TAIL_TYPES),
  };
}
