import IdxPage from "./IdxPage";
export const bages = 
[

  {
    img : "img/1.jpg",
    main : "Mindful breathing & meditation", 
    p : "A refershing delightful, and distraction-free mindful breathing companion to get you through the day, and more." , 
    btn1 : "Try Now",
    btn2 : "Sign Up",
  },
  {
    img : "img/3.jpg",
    main : "Have great meetings effortlessly.", 
    p : "Get all your meetings minutes. tasks and decisions in one place, Share them with anyone instanly. Export them to all the tools you already use." , 
    btn1 : "Try Now",
    btn2 : "See Demo",
  },
  {
    img : "img/2.jpg",
    main : "Your adventure travel expert in Iceland", 
    p : "When so mush to see and do n iceland. it can be hard to choose and active. Our diverse selection includes hiking, walks mountain climbing. hunting for Northern Lights and more!" , 
    btn1 : "Find Tours",
    btn2 : "See Prices",
  }

];


export  default function Page({ idx, onClickArrow }) {

  document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7) , rgba(0,0,0,0.7) ),url(${bages[idx]["img"]})`;

  return (
    <>
      <div className="page">
        <img src="/img/arrowLeft.png" alt="left" onClick={() => { idx === 0 ? onClickArrow(2) : onClickArrow(idx - 1); }} />
        <div className="content">
          <main>
            {bages[idx]["main"]}
          </main>
          <p>
            {bages[idx]["p"]}
          </p>
          <div className="buttons">
            <button className="active-btn">{bages[idx]["btn1"]}</button>
            <button>{bages[idx]["btn2"]}</button>
          </div>
        </div>
        <img src="img/arrowRight.png" alt="right" onClick={() => { idx === 2 ? onClickArrow(0) : onClickArrow(idx + 1); }} />
      </div>
      <IdxPage idx = {idx} onClickArrow={onClickArrow} />
    </>
  );
}
