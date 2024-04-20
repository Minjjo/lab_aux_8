export const List = (props) => {
    const { list } = props
    return (
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};
