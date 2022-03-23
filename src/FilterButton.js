function FilterButton(props) {
    return (
        <button
            type="button"
            aria-pressed={props.isPressed}
            onClick={() => props.setFilter(props.name)}
        >
            {props.name}
        </button>
    );
}
export default FilterButton
