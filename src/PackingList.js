import { useState } from "react";
import Item from "./Item"

export default function PackingList({items,onDeleteItem,onToggleItem,onClearItem})
{
  //use state to render changes in tems of sorting choice
  //setSortBy update the value based on changes
  const[sortBy,setSortBy]=useState("input");

  //variable to store sorting decision
  let sortItem;
 
//default order
  if(sortBy==="input") sortItem=items;

//sort based on description
  if(sortBy==="description") sortItem=items.slice().sort((a,b)=>a.description.localeCompare(b.description));

  //sort based on packed status
  if(sortBy==="packed") sortItem=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed));
  
  
  return (
    <div className="list">
     <ul >
      {sortItem.map((item)=>(

        //Item function which is child of packingList
        <Item
        //itemObj: the actual item data ({id, description, quantity, packed}).
        //from the section form.js
         itemObj={item} 
         onDeleteItem={onDeleteItem}
         onToggleItem={onToggleItem }
         key={item.id}
         />
      ))}
      </ul>

      <div className="actions">

        <select className="sort-method"
        //Jab user dropdown mein se kuch select karega (e.g. "Sort by Description"),toh uska value update hoke sortBy state mein chala jaata hai.
         value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>

          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status </option>
        </select>
         {/* Trigger the handleClearItem function in App */}
        <button className="clear-btn" onClick={onClearItem}>Clear List</button>
        
      </div> 
    </div> 
);
}