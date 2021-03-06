import FilterStyles from "./FilterStyles";

const Filter = ({ allTasks, onFilterOptions, filter }) => {
  const OneGrouptasks = [];
  for (const key in allTasks) {
    OneGrouptasks.push(allTasks[key]);
  }

  const returnOptions = el => {
    const { tasks, title, id } = el;
    return tasks.length ? (
      <option value={id} key={id} data-testid={"option"}>
        {title}
      </option>
    ) : (
      ""
    );
  };

  const onChangeHandler = e => {
    onFilterOptions(e.target.value);
  };

  return (
    <FilterStyles>
      <label>Filter by:</label>
      <select
        name="group"
        id="group"
        value={filter}
        onChange={onChangeHandler}
        data-testid="select"
      >
        <option value="all" data-testid="option">
          all
        </option>
        {OneGrouptasks.map(returnOptions)}
      </select>
    </FilterStyles>
  );
};

export default Filter;
