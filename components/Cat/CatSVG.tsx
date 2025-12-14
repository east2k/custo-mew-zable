import { CatConfig } from "@/types";
import { renderTail, renderBody, renderEars, renderFace, renderBackLegs, renderFrontLegs } from "@/utils/cat-renderers";

type CatSVGProps = {
    config: CatConfig;
};

const CatSVG = ({ config }: CatSVGProps) => (
    <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {renderTail(config)}
        {renderBackLegs(config)}
        {renderBody(config)}
        {renderEars(config)}
        {renderFace(config)}
        {renderFrontLegs(config)}
    </svg>
);

export default CatSVG;
