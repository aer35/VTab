import PersonItem from "./PersonItem";
import Item from "../model/Item";

const PersonComponent: React.FC<{
  index: number;
  items: Item[];
  setItems: (item: Item[]) => void;
}> = ({ index, items, setItems }) => {
  return (
    <div className="grid-person">
      <div className="grid-item" style={{ gridRow: `span ${items.length}` }}>
        <label>Person {index}</label>
        <br />
        <input
          type="text"
          placeholder={`Person ${index}'s name`}
          required={[1, 2].includes(index)}
        />
      </div>
      <PersonItem
        index={1}
        item={items[0]}
        setItem={(item) => {
          // modify the array in place then call the setItems function while destructuring the old array and rerencering it
          items[0] = item;
          setItems([...items]);
        }}
      />

      <div
        className="addItemButton"
        style={{ gridRow: `span ${items.length}` }}
      >
        <button
          type="button"
          onClick={() =>
            setItems([
              ...items,
              {
                name: "",
                cost: 0,
              },
            ])
          }
        >
          Add another item
        </button>
      </div>

      {items.slice(1).map((item, i) => (
        <PersonItem
          key={i}
          index={i + 2}
          item={item}
          setItem={(item) => {
            // modify the array in place then call the setItems function while destructuring the old array and rerencering it
            items[i + 1] = item;
            setItems([...items]);
          }}
        />
      ))}
    </div>
  );
};

export default PersonComponent;
