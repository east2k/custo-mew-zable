import { BodyType, EyeType, EarType, TailType, CatConfig } from '@/types';

export const BODY_TYPES: BodyType[] = ['slim', 'normal', 'chonky', 'kitten'];


export const EYE_TYPES: EyeType[] = ['round', 'almond', 'cute', 'sleepy'];

export const EAR_TYPES: EarType[] = ['pointy', 'round', 'folded', 'tufted'];

export const TAIL_TYPES: TailType[] = ['thin', 'fluffy', 'short', 'curled'];

export const COLOR_PALETTE = [
  '#1a1a1a',
  '#ffffff',
  '#ff6b6b',
  '#ffa07a',
  '#ffd700',
  '#90ee90',
  '#00d3ac',
  '#87ceeb',
  '#dda0dd',
  '#f5deb3',
];

export const DEFAULT_CAT: CatConfig = {
  bodyType: 'normal',
  primaryColor: '#ffa07a',
  eyeType: 'round',
  earType: 'pointy',
  tailType: 'fluffy',
};
