import { CatConfig } from '@/types';

export const renderBackLegs = (config: CatConfig) => {
  const { bodyType, primaryColor } = config;

  const bodyDimensions = {
    slim: { rx: 60, ry: 60 },
    normal: { rx: 70, ry: 65 },
    chonky: { rx: 85, ry: 60 },
    kitten: { rx: 50, ry: 50 },
  };

  const { rx, ry } = bodyDimensions[bodyType];
  const bodyY = 280;
  const legWidth = 14;
  const backLegHeight = bodyType === 'kitten' ? 18 : 25;
  const footRadius = 11;

  return (
    <g>
      {/* Back left leg */}
      <rect
        x={200 - rx * 0.6 - legWidth / 2}
        y={bodyY + ry * 0.2}
        width={legWidth}
        height={backLegHeight}
        fill={primaryColor}
        stroke="#000000"
        strokeWidth="3"
        rx="2"
      />
      {/* Back left paw */}
      <ellipse
        cx={200 - rx * 0.6}
        cy={bodyY + ry * 0.2 + backLegHeight + footRadius - 2}
        rx={footRadius + 2}
        ry={footRadius}
        fill={primaryColor}
        stroke="#000000"
        strokeWidth="3"
      />

      {/* Back right leg */}
      <rect
        x={200 + rx * 0.6 - legWidth / 2}
        y={bodyY + ry * 0.2}
        width={legWidth}
        height={backLegHeight}
        fill={primaryColor}
        stroke="#000000"
        strokeWidth="3"
        rx="2"
      />
      {/* Back right paw */}
      <ellipse
        cx={200 + rx * 0.6}
        cy={bodyY + ry * 0.2 + backLegHeight + footRadius - 2}
        rx={footRadius + 2}
        ry={footRadius}
        fill={primaryColor}
        stroke="#000000"
        strokeWidth="3"
      />
    </g>
  );
};

export const renderFrontLegs = (config: CatConfig) => {
  const { primaryColor, bodyType } = config;

  const headY = 250;
  const legWidth = 14;
  const frontLegHeight = bodyType === 'kitten' ? 25 : 35;
  const legStartY = bodyType === 'kitten' ? headY + 50 : headY + 55;
  const footRadius = 11;

  return (
    <g>
      {/* Front left leg */}
      <rect
        x={200 - 18 - legWidth / 2}
        y={legStartY}
        width={legWidth}
        height={frontLegHeight}
        fill={primaryColor}
        stroke="#000000"
        strokeWidth="3"
        rx="2"
      />
      {/* Front left paw */}
      <ellipse
        cx={200 - 18}
        cy={legStartY + frontLegHeight + footRadius - 2}
        rx={footRadius + 2}
        ry={footRadius}
        fill={primaryColor}
        stroke="#000000"
        strokeWidth="3"
      />

      {/* Front right leg */}
      <rect
        x={200 + 18 - legWidth / 2}
        y={legStartY}
        width={legWidth}
        height={frontLegHeight}
        fill={primaryColor}
        stroke="#000000"
        strokeWidth="3"
        rx="2"
      />
      {/* Front right paw */}
      <ellipse
        cx={200 + 18}
        cy={legStartY + frontLegHeight + footRadius - 2}
        rx={footRadius + 2}
        ry={footRadius}
        fill={primaryColor}
        stroke="#000000"
        strokeWidth="3"
      />
    </g>
  );
};
