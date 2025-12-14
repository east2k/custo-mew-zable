import { CatConfig } from '@/types';

export const renderBody = (config: CatConfig) => {
  const { bodyType, primaryColor } = config;

  const bodyDimensions = {
    slim: { rx: 60, ry: 60 },
    normal: { rx: 70, ry: 65 },
    chonky: { rx: 85, ry: 60 },
    kitten: { rx: 50, ry: 50 },
  };

  const { rx, ry } = bodyDimensions[bodyType];

  return (
    <g>
      {/* Main body */}
      <ellipse cx={200} cy={280} rx={rx} ry={ry} fill={primaryColor} stroke="#000000" strokeWidth="3" />
    </g>
  );
};
