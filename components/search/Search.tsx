const Search = ({ ...searchProps }): JSX.Element => {
  return (
    <input
      className="px-6 py-4 rounded-3xl mx-auto sm:w-[465px]"
      type="text"
      placeholder="What do you want to see in your city?"
      {...searchProps}
    />
  );
};

export default Search;
