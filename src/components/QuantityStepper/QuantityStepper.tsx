import "./QuantityStepper.css"
interface QuantityStepperProps {
  quantity:number;
  max:number;
  onIncrement: () => void;
  onDecrement: () => void;
  size?: 'sm' | 'md';
}
const QuantityStepper = ({
  quantity, max, onIncrement, onDecrement, size ='md'} : QuantityStepperProps) =>{
    return (
      <div className={`stepper stepper--€{size}`}>
        <button type="button"
        className="stepper_btn"
        onClick={onDecrement}
        aria-label="Decrease quantity">
          -
        </button>
      <span className="stepper_value"
      aria-live="polite">
        {quantity}
      </span>
      <button type="button"
      className="stepper_btn"
      onClick={onIncrement}
      disabled={quantity >= max}
      aria-label="Increase quantity">
        +
      </button>
      </div>
    );
  };
  export default QuantityStepper;