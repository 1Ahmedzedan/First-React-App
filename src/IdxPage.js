export default function IdxPage({ idx , onClickArrow }) {
  return (
    <div className="idx-page">
      <div className={idx === 0 ? "cur-page" : ""} onClick={()=>onClickArrow(0)}></div>
      <div className={idx === 1 ? "cur-page" : ""} onClick={()=>onClickArrow(1)}></div>
      <div className={idx === 2 ? "cur-page" : ""} onClick={()=>onClickArrow(2)}></div>
    </div>
  );
}
