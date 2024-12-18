interface DividerLineProps {
	style?: string;
};

function DividerLine({ style }: DividerLineProps) {
	return <hr className={style} />;
}

export default DividerLine;