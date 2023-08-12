import "../style/index.css";
// eslint-disable-next-line react/prop-types
const Square = ({ children, isSelectd, updateBoard, index }) => {
  const className = `square ${isSelectd ? "is-selected" : ""}`;
  const handlerClick = () => {
    updateBoard(index);
  };
  return (
    <>
      <div onClick={handlerClick} className={className}>
        {children}
      </div>
    </>
  );
};

export default Square;
