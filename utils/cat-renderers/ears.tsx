import { CatConfig } from '@/types';

export const renderEars = (config: CatConfig) => {
  const { earType, primaryColor } = config;
  const faceX = 200;
  const faceY = 240;

  switch (earType) {
    case 'pointy':
      return (
        <g>
          {/* Left ear */}
          <path
            d={`M ${faceX - 35} ${faceY - 40} L ${faceX - 50} ${faceY - 75} L ${faceX - 20} ${faceY - 50} Z`}
            fill={primaryColor}
            stroke="#000000"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Right ear */}
          <path
            d={`M ${faceX + 35} ${faceY - 40} L ${faceX + 50} ${faceY - 75} L ${faceX + 20} ${faceY - 50} Z`}
            fill={primaryColor}
            stroke="#000000"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </g>
      );
    case 'round':
      return (
        <g>
          <circle cx={faceX - 38} cy={faceY - 45} r={22} fill={primaryColor} stroke="#000000" strokeWidth="3" />
          <circle cx={faceX + 38} cy={faceY - 45} r={22} fill={primaryColor} stroke="#000000" strokeWidth="3" />
        </g>
      );
    case 'folded':
      return (
        <g>
          <path
            d={`M ${faceX - 38} ${faceY - 40} L ${faceX - 45} ${faceY - 70} L ${faceX - 25} ${faceY - 48}`}
            fill={primaryColor}
            stroke="#000000"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d={`M ${faceX + 38} ${faceY - 40} L ${faceX + 45} ${faceY - 70} L ${faceX + 25} ${faceY - 48}`}
            fill={primaryColor}
            stroke="#000000"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </g>
      );
    case 'tufted':
      return (
        <g>
          {/* Left ear base */}
          <path
            d={`M ${faceX - 35} ${faceY - 40} L ${faceX - 48} ${faceY - 75} L ${faceX - 20} ${faceY - 50} Z`}
            fill={primaryColor}
            stroke="#000000"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Right ear base */}
          <path
            d={`M ${faceX + 35} ${faceY - 40} L ${faceX + 48} ${faceY - 75} L ${faceX + 20} ${faceY - 50} Z`}
            fill={primaryColor}
            stroke="#000000"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Left tuft */}
          <circle cx={faceX - 48} cy={faceY - 78} r={6} fill={primaryColor} stroke="#000000" strokeWidth="2" />
          {/* Right tuft */}
          <circle cx={faceX + 48} cy={faceY - 78} r={6} fill={primaryColor} stroke="#000000" strokeWidth="2" />
        </g>
      );
    default:
      return null;
  }
};
