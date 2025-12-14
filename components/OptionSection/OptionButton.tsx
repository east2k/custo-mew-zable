type OptionButtonProps = {
    label: string;
    selected: boolean;
    onClick: () => void;
};

const OptionButton = ({ label, selected, onClick }: OptionButtonProps) => (
    <button
        onClick={onClick}
        className={`cursor-pointer px-3 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
            selected
                ? "bg-aquamarine-500 text-white"
                : "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 hover:border-aquamarine-300 dark:hover:border-aquamarine-700"
        }`}
    >
        {label}
    </button>
);

export default OptionButton;
