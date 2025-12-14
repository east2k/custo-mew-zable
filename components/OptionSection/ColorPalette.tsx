type ColorPaletteProps = {
    colors: string[];
    selectedColor: string;
    onSelect: (color: string) => void;
};

const ColorPalette = ({ colors, selectedColor, onSelect }: ColorPaletteProps) => (
    <div className="grid grid-cols-5 gap-2">
        {colors.map((color) => (
            <button
                key={color}
                onClick={() => onSelect(color)}
                className={`cursor-pointer w-full aspect-square rounded-lg transition-all ${
                    selectedColor === color
                        ? "ring-2 ring-aquamarine-500 ring-offset-2 dark:ring-offset-zinc-950 scale-110"
                        : "hover:scale-105"
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
            />
        ))}
    </div>
);

export default ColorPalette;
