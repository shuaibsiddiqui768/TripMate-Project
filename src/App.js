import { useState } from "react";
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from "./Stats";
// import Item from "./Item"



export default function App(){
  const [items,setItems]=useState([]);
   
  function handleAddItems(newItemArr ){
    setItems((items)=>[...items,newItemArr])
  }
  
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
  )
);}

  function handleDeleteItems(id)
  {
    setItems((items)=>items.filter((item)=>item.id!==id));
  }
  
function handleClearItems()
{
  const confirmed=window.confirm(
    "Are you sure you want to delete all"
  );
  if(confirmed) setItems([]);

}

return(
  <div className="app">
     <Logo/>
     <Form onAddItems={handleAddItems}/>
   
     <PackingList items={items} 
     onDeleteItem={handleDeleteItems} 
     onToggleItem={handleToggleItem}
     onClearItem={handleClearItems} />
     <Stats items={items}/>
    </div>
  );
}



