import { CatConfig } from '@/types';

export const renderTail = (config: CatConfig) => {
  const { tailType, primaryColor, bodyType } = config;

  const bodyDimensions = {
    slim: { rx: 60, ry: 60 },
    normal: { rx: 70, ry: 65 },
    chonky: { rx: 85, ry: 60 },
    kitten: { rx: 50, ry: 50 },
  };

  const { rx } = bodyDimensions[bodyType];
  const bodyY = 280;
  const tailStartX = 200 + rx;
  const tailStartY = bodyY;

  switch (tailType) {
    case 'thin':
      return (
        <g>
          <path
            d={`M ${tailStartX} ${tailStartY} Q ${tailStartX + 35} ${tailStartY - 30}, ${tailStartX + 60} ${tailStartY - 10}`}
            stroke="#000000"
            strokeWidth="15"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d={`M ${tailStartX} ${tailStartY} Q ${tailStartX + 35} ${tailStartY - 30}, ${tailStartX + 60} ${tailStartY - 10}`}
            stroke={primaryColor}
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      );
    case 'fluffy':
      return (
        <g>
          <path
            d={`M ${tailStartX} ${tailStartY} Q ${tailStartX + 25} ${tailStartY - 25}, ${tailStartX + 45} ${tailStartY - 15} Q ${tailStartX + 60} ${tailStartY - 5}, ${tailStartX + 65} ${tailStartY + 15}`}
            stroke="#000000"
            strokeWidth="21"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d={`M ${tailStartX} ${tailStartY} Q ${tailStartX + 25} ${tailStartY - 25}, ${tailStartX + 45} ${tailStartY - 15} Q ${tailStartX + 60} ${tailStartY - 5}, ${tailStartX + 65} ${tailStartY + 15}`}
            stroke={primaryColor}
            strokeWidth="15"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      );
    case 'short':
      return (
        <ellipse
          cx={tailStartX + 8}
          cy={tailStartY + 5}
          rx={12}
          ry={18}
          fill={primaryColor}
          stroke="#000000"
          strokeWidth="3"
          transform={`rotate(20 ${tailStartX + 8} ${tailStartY + 5})`}
        />
      );
    case 'curled':
      return (
        <g>
          <path
            d={`M ${tailStartX} ${tailStartY} Q ${tailStartX + 40} ${tailStartY - 30}, ${tailStartX + 50} ${tailStartY - 10} Q ${tailStartX + 55} ${tailStartY + 10}, ${tailStartX + 40} ${tailStartY + 20}`}
            stroke="#000000"
            strokeWidth="17"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d={`M ${tailStartX} ${tailStartY} Q ${tailStartX + 40} ${tailStartY - 30}, ${tailStartX + 50} ${tailStartY - 10} Q ${tailStartX + 55} ${tailStartY + 10}, ${tailStartX + 40} ${tailStartY + 20}`}
            stroke={primaryColor}
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      );
    default:
      return null;
  }
};
