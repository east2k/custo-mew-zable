export type BodyType = 'slim' | 'normal' | 'chonky' | 'kitten';
export type EyeType = 'round' | 'almond' | 'cute' | 'sleepy';
export type EarType = 'pointy' | 'round' | 'folded' | 'tufted';
export type TailType = 'thin' | 'fluffy' | 'short' | 'curled';

export type CatConfig = {
  id?: string;
  bodyType: BodyType;
  primaryColor: string;
  eyeType: EyeType;
  earType: EarType;
  tailType: TailType;
};

export type SavedCat = CatConfig & {
  id: string;
  createdAt: number;
};

export type CatStorage = {
  savedCats: SavedCat[];
};
