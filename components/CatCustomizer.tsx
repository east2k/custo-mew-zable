"use client";

import { useCallback } from "react";
import { CatPreview } from "@/components/Cat";
import CustomizationPanel from "@/components/CustomizationPanel";
import { SavedCatsGallery, ExportModal } from "@/components/modals";
import { ToastContainer } from "@/components/ui";
import { useCatConfig, useSavedCats, useExport, useModal, useToast } from "@/hooks";
import { SavedCat } from "@/types";

const CatCustomizer = () => {
    const { config, updateConfig, randomize } = useCatConfig();
    const { savedCats, save, refresh } = useSavedCats();
    const { svgRef, exportPNG, exportSVG } = useExport();
    const galleryModal = useModal();
    const exportModal = useModal();
    const { toasts, showToast, removeToast } = useToast();

    const handleSave = useCallback(() => {
        save(config);
        showToast('Cat saved successfully!', 'success');
    }, [config, save, showToast]);

    const handleLoadCat = useCallback(
        (cat: SavedCat) => {
            updateConfig(cat);
        },
        [updateConfig]
    );

    const handleExportPNG = useCallback(() => {
        exportPNG();
        exportModal.close();
    }, [exportPNG, exportModal]);

    const handleExportSVG = useCallback(() => {
        exportSVG();
        exportModal.close();
    }, [exportSVG, exportModal]);

    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row lg:h-screen">
                    <CustomizationPanel
                        config={config}
                        onChange={updateConfig}
                        onRandomize={randomize}
                        onSave={handleSave}
                        onExport={exportModal.open}
                        onShowGallery={galleryModal.open}
                    />

                    <div ref={svgRef} className="flex-1">
                        <CatPreview config={config} />
                    </div>
                </div>
            </div>

            {galleryModal.isOpen && (
                <SavedCatsGallery
                    cats={savedCats}
                    onClose={galleryModal.close}
                    onSelect={handleLoadCat}
                    onUpdate={refresh}
                />
            )}

            {exportModal.isOpen && (
                <ExportModal
                    onClose={exportModal.close}
                    onExportPNG={handleExportPNG}
                    onExportSVG={handleExportSVG}
                />
            )}

            <ToastContainer toasts={toasts} onRemove={removeToast} />
        </main>
    );
};

export default CatCustomizer;
