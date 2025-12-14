import { CatConfig } from '@/types';
import { getContrastColor } from '@/utils/color';

const renderEyes = (eyeType: string, contrastColor: string, highlightColor: string) => {
  switch (eyeType) {
    case 'round':
      return (
        <g>
          <circle cx={180} cy={235} r={8} fill={contrastColor} />
          <circle cx={220} cy={235} r={8} fill={contrastColor} />
          <circle cx={182} cy={233} r={5} fill={highlightColor} />
          <circle cx={222} cy={233} r={5} fill={highlightColor} />
        </g>
      );
    case 'almond':
      return (
        <g>
          <ellipse cx={180} cy={235} rx={7} ry={10} fill={contrastColor} />
          <ellipse cx={220} cy={235} rx={7} ry={10} fill={contrastColor} />
          <circle cx={182} cy={233} r={2.5} fill={highlightColor} />
          <circle cx={222} cy={233} r={2.5} fill={highlightColor} />
        </g>
      );
    case 'cute':
      return (
        <g>
          <path
            d="M 172 235 Q 180 228 188 235"
            stroke={contrastColor}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 212 235 Q 220 228 228 235"
            stroke={contrastColor}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      );
    case 'sleepy':
      return (
        <g>
          <path
            d="M 172 235 L 188 235"
            stroke={contrastColor}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 212 235 L 228 235"
            stroke={contrastColor}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      );
    default:
      return null;
  }
};

const renderNose = () => <polygon points="200,250 195,258 205,258" fill="#ff69b4" />;

const renderMouth = (contrastColor: string) => (
  <g>
    <path
      d="M 200 258 Q 195 263 190 261"
      stroke={contrastColor}
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M 200 258 Q 205 263 210 261"
      stroke={contrastColor}
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
  </g>
);

export const renderFace = (config: CatConfig) => {
  const { eyeType, primaryColor } = config;
  const contrastColor = getContrastColor(primaryColor);
  const highlightColor = contrastColor === '#1a1a1a' ? '#ffffff' : '#1a1a1a';

  return (
    <g>
      <circle cx={200} cy={240} r={55} fill={primaryColor} stroke="#000000" strokeWidth="3" />
      {renderEyes(eyeType, contrastColor, highlightColor)}
      {renderNose()}
      {renderMouth(contrastColor)}
    </g>
  );
};
