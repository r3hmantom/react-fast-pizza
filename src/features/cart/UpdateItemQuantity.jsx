import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, getQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getQuantity(pizzaId));
  
  function handleIncrease() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecrease() {
    dispatch(decreaseItemQuantity(pizzaId));
  }
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecrease}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>

      <Button type="round" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
}
