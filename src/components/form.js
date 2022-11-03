import React, { useState } from "react";
import { Sticky } from "./stickynote";



export function Form() {
  const [stickyList, setStickyList] = useState([]);

  const onAddBtnClick = event => {
    setStickyList(stickyList.concat(<Sticky props = {{text:"new sticky note text"}} key={stickyList.length}/>));
  };

  return (
    <div>
      <button onClick={onAddBtnClick}>Add StickyNote</button>
      {stickyList}
    </div>
  );
};