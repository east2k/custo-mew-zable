"use client";

type ExportModalProps = {
    onClose: () => void;
    onExportPNG: () => void;
    onExportSVG: () => void;
};

const ExportModal = ({ onClose, onExportPNG, onExportSVG }: ExportModalProps) => (
    <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
    >
        <div
            className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
        >
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">Export as</h3>
            <div className="space-y-2">
                <button
                    onClick={onExportPNG}
                    className="cursor-pointer w-full px-4 py-3 bg-aquamarine-500 hover:bg-aquamarine-600 text-white rounded-lg font-medium transition-colors text-left"
                >
                    PNG (800x800)
                </button>
                <button
                    onClick={onExportSVG}
                    className="w-full px-4 py-3 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-lg font-medium transition-colors text-left"
                >
                    SVG (Vector)
                </button>
            </div>
        </div>
    </div>
);

export default ExportModal;
