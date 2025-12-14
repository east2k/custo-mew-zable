import { useRef, useCallback } from 'react';
import { exportCatAsPNG, exportCatAsSVG } from '@/utils/export';

export const useExport = () => {
  const svgRef = useRef<HTMLDivElement>(null);

  const exportPNG = useCallback(() => {
    const svgElement = svgRef.current?.querySelector('svg');
    if (svgElement) {
      exportCatAsPNG(svgElement);
    }
  }, []);

  const exportSVG = useCallback(() => {
    const svgElement = svgRef.current?.querySelector('svg');
    if (svgElement) {
      exportCatAsSVG(svgElement);
    }
  }, []);

  return {
    svgRef,
    exportPNG,
    exportSVG,
  };
};
