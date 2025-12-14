import { SavedCat } from "@/types";
import { CatSVG } from "@/components/Cat";
import { deleteCat } from "@/utils/storage";

type SavedCatsGalleryProps = {
    cats: SavedCat[];
    onClose: () => void;
    onSelect: (cat: SavedCat) => void;
    onUpdate: () => void;
};

const SavedCatsGallery = ({ cats, onClose, onSelect, onUpdate }: SavedCatsGalleryProps) => {
    const handleDelete = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (confirm("Delete this cat?")) {
            deleteCat(id);
            onUpdate();
        }
    };

    const handleSelect = (cat: SavedCat) => {
        onSelect(cat);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                        Saved Cats
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        aria-label="Close gallery"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div className="p-6">
                    {cats.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-zinc-500 dark:text-zinc-400">No saved cats yet</p>
                            <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-2">
                                Create a cat and click Save to add it here
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {cats.map((cat) => (
                                <div
                                    key={cat.id}
                                    className="group relative bg-zinc-50 dark:bg-zinc-800 rounded-lg p-4 cursor-pointer hover:ring-2 hover:ring-aquamarine-500 transition-all"
                                    onClick={() => handleSelect(cat)}
                                >
                                    <div className="aspect-square mb-2">
                                        <CatSVG config={cat} />
                                    </div>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
                                        {new Date(cat.createdAt).toLocaleDateString()}
                                    </p>
                                    <button
                                        onClick={(e) => handleDelete(cat.id, e)}
                                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                        aria-label="Delete cat"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SavedCatsGallery;
