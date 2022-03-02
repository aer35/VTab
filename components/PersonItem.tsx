import Item from "../model/Item";
import NumberInput from "./NumberInput";

const PersonItem: React.FC<{
  index: number;
  item: Item;
  setItem: (item: Item) => void;
}> = ({ index, item, setItem }) => {
  return (
    <>
      <div className="grid-item">
        <label>Item {index}</label> <br />
        <input
          type="text"
          placeholder={`Item ${index}`}
          value={item.name}
          onChange={(e) =>
            setItem({
              ...item,
              name: e.target.value,
            })
          }
        ></input>
      </div>

      <div className="grid-item">
        <label>Cost</label>
        <br />$
        <NumberInput
          type="text"
          placeholder="Cost"
          number={item.cost}
          onNumChange={(num) => {
            setItem({
              ...item,
              cost: num,
            });
          }}
        ></NumberInput>
      </div>
    </>
  );
};

export default PersonItem;
