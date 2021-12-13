interface Props {
  index: number;
  disabled: boolean;
  label: string;
  flipped: boolean;
  removed: boolean;
  handleClick: (i: number) => any;
}
// let card: card = { disabled: 0, label: "", flipped: false };
function Card({
  index,
  disabled,
  label,
  flipped,
  removed,
  handleClick,
}: Props) {
  const getClassName = () => {
    let classes = "card";
    if (flipped) {
      classes += " flipped";
    }
    if (removed) {
      classes += " removed";
    }
    return classes;
  };
  return (
    <div
      className={getClassName()}
      key={label}
      onClick={() => {
        if (!disabled) {
          handleClick(index);
        }
      }}
    >
      <div className={"card-back"}></div>
      <div className={"card-front"}>{label}</div>
    </div>
  );
}

// function handleClick() {
//   //   console.log("hello");
//   //   card.flipped = !card.flipped;
// }

export default Card;
