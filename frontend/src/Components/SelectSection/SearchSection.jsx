const SearchSection = ({ setSection }) => {
	return (
		<input
			type="text"
			className="form-control"
			placeholder="Search for sections"
			onChange={({ currentTarget: input }) => setSection(input.value)}
		/>
	);
};

export default SearchSection;
