type OptionGridProps = {
    children: React.ReactNode;
};

const OptionGrid = ({ children }: OptionGridProps) => (
    <div className="grid grid-cols-2 gap-2">{children}</div>
);

export default OptionGrid;
