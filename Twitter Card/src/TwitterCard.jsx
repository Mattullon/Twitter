import { useState } from "react";
import "./App.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
export const TwitterCard = ({ userName, name, initialIsFollowing }) => {
  const url = `https://unavatar.io/${userName}`;
  const [isFollowing, setIsfollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";

   const hadleClick = ()=>{

    setIsfollowing(!isFollowing)
   }


  return (
    <>
      <article style={{ display: "flex" }}>
        <header>
          <img alt="Usuario" src={url} />
          <div>
            <strong> {name} </strong>
            <span>@{userName}</span>
          </div>
        </header>
        <aside>
          <button onClick={hadleClick} >{text}</button>
        </aside>
      </article>
    </>
  );
};
