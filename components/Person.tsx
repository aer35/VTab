import PersonItem from "./PersonItem";
import Item from "../model/Item";
import Person from "../model/Person";

const PersonComponent: React.FC<{
  index: number;
  person: Person;
  setPerson: (person: Person) => void;
}> = ({ index, person, setPerson }) => {
  return (
    <div className="grid-person">
      <div
        className="grid-item"
        style={{ gridRow: `span ${person.items.length}` }}
      >
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
        item={person.items[0]}
        setItem={(item) => {
          person.items[0] = item;
          setPerson({ ...person });
        }}
      />

      <div
        className="addItemButton"
        style={{ gridRow: `span ${person.items.length}` }}
      >
        <button
          type="button"
          onClick={() =>
            setPerson({
              ...person,
              items: [...person.items, { name: "", cost: 0 }],
            })
          }
        >
          Add another item
        </button>
      </div>

      {person.items.slice(1).map((item, i) => (
        <PersonItem
          key={i}
          index={i + 2}
          item={item}
          setItem={(item) => {
            // modify the array in place then call the setItems function while destructuring the old array and rerencering it
            person.items[i + 1] = item;
            setPerson({ ...person });
          }}
        />
      ))}
    </div>
  );
};

export default PersonComponent;
