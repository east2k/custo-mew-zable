import { CatConfig } from "@/types";
import { BODY_TYPES, EYE_TYPES, EAR_TYPES, TAIL_TYPES, COLOR_PALETTE } from "@/constants";
import { ColorPalette, OptionButton, OptionGrid, Section } from "./OptionSection";
import Image from "next/image";

import logo from "@/public/logo.png";

type CustomizationPanelProps = {
    config: CatConfig;
    onChange: (config: CatConfig) => void;
    onRandomize: () => void;
    onSave: () => void;
    onExport: () => void;
    onShowGallery: () => void;
};

const CustomizationPanel = ({
    config,
    onChange,
    onRandomize,
    onSave,
    onExport,
    onShowGallery,
}: CustomizationPanelProps) => {
    const updateConfig = (updates: Partial<CatConfig>) => {
        onChange({ ...config, ...updates });
    };

    return (
        <aside className="bg-zinc-50 dark:bg-zinc-950 p-6 lg:w-2/5 lg:overflow-y-auto border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800">
            <div className="max-w-md mx-auto space-y-6">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                        <Image
                            src={logo}
                            alt="Cat Icon"
                            width={30}
                            height={30}
                            className="inline-block -mt-1 mr-2"
                        />
                        CustoMewZable
                    </h1>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                        Create your perfect minimalist cat
                    </p>
                </div>

                <Section title="Body Type">
                    <OptionGrid>
                        {BODY_TYPES.map((type) => (
                            <OptionButton
                                key={type}
                                label={type}
                                selected={config.bodyType === type}
                                onClick={() => updateConfig({ bodyType: type })}
                            />
                        ))}
                    </OptionGrid>
                </Section>

                <Section title="Primary Color">
                    <ColorPalette
                        colors={COLOR_PALETTE}
                        selectedColor={config.primaryColor}
                        onSelect={(color: string) => updateConfig({ primaryColor: color })}
                    />
                </Section>

                <Section title="Eyes">
                    <OptionGrid>
                        {EYE_TYPES.map((type) => (
                            <OptionButton
                                key={type}
                                label={type}
                                selected={config.eyeType === type}
                                onClick={() => updateConfig({ eyeType: type })}
                            />
                        ))}
                    </OptionGrid>
                </Section>

                <Section title="Ears">
                    <OptionGrid>
                        {EAR_TYPES.map((type) => (
                            <OptionButton
                                key={type}
                                label={type}
                                selected={config.earType === type}
                                onClick={() => updateConfig({ earType: type })}
                            />
                        ))}
                    </OptionGrid>
                </Section>

                <Section title="Tail">
                    <OptionGrid>
                        {TAIL_TYPES.map((type) => (
                            <OptionButton
                                key={type}
                                label={type}
                                selected={config.tailType === type}
                                onClick={() => updateConfig({ tailType: type })}
                            />
                        ))}
                    </OptionGrid>
                </Section>

                <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <button
                        onClick={onRandomize}
                        className="cursor-pointer w-full px-4 py-2.5 bg-aquamarine-500 hover:bg-aquamarine-600 text-white rounded-lg font-medium transition-colors"
                    >
                        Randomize
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={onSave}
                            className="cursor-pointer px-4 py-2.5 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-lg font-medium transition-colors"
                        >
                            Save
                        </button>
                        <button
                            onClick={onExport}
                            className="cursor-pointer px-4 py-2.5 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-lg font-medium transition-colors"
                        >
                            Export
                        </button>
                    </div>
                    <button
                        onClick={onShowGallery}
                        className="cursor-pointer w-full px-4 py-2.5 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-lg font-medium transition-colors"
                    >
                        View Saved Cats
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default CustomizationPanel;
