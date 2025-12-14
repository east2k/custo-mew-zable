import CatSVG from "./CatSVG";
import { CatConfig } from "@/types";

type CatPreviewProps = {
    config: CatConfig;
};

const CatPreview = ({ config }: CatPreviewProps) => (
    <div className="flex items-center justify-center bg-zinc-600 p-8 lg:p-12">
        <div className="w-full max-w-lg aspect-square">
            <CatSVG config={config} />
        </div>
    </div>
);

export default CatPreview;
