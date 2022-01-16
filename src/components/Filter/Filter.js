import FilterStyles from "./FilterStyles";

const Filter = ({ allTasks }) => {
  const OneGrouptasks = [];
  for (const key in allTasks) {
    OneGrouptasks.push(allTasks[key]);
  }

  const returnOptions = el => {
    const { tasks, title, id } = el;
    return tasks.length ? (
      <option value={id} key={id}>
        {title}
      </option>
    ) : (
      ""
    );
  };
  return (
    <FilterStyles>
      <label>Filter by statuses:</label>
      <select name="group" id="group">
        <option value="all">all</option>
        {OneGrouptasks.map(returnOptions)}
      </select>
    </FilterStyles>
  );
};

export default Filter;
