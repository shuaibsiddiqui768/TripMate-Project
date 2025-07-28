import { useState } from "react";
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from "./Stats";
// import Item from "./Item"



export default function App(){
  //global item state
  // items = current array of all packing items (state)
// setItems = usko update karne ka tareeka (function)
  const [items,setItems]=useState([]);
   
  //saare puraane item saare lelo ... ki help se aur newitem form se lele add kar do
  function handleAddItems(newItemArr ){
    setItems((items)=>[...items,newItemArr])
  }
  
  //takes id from form.js agar id mach ho jaaye to packed status ko false ya true kar do vise versa
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
  )
);}

//takes the id compare it and  render only the items whose id is not equal to given id
  function handleDeleteItems(id)
  {
    setItems((items)=>items.filter((item)=>item.id!==id));
  }
  
function handleClearItems()
{
  const confirmed=window.confirm(
    "Are you sure you want to delete all"
  );
  //if confirm is true make clear setItem to empty array
  if(confirmed) setItems([]);

}

return(
  <div className="app">
     <Logo/>
     <Form onAddItems={handleAddItems}/>
   
     <PackingList items={items} //items ek state variable hai App() ka
     onDeleteItem={handleDeleteItems} 
     onToggleItem={handleToggleItem}
     onClearItem={handleClearItems} />
     <Stats items={items}/>
    </div>
  );
}



// Flow of Code
// App ➡️ Form ➡️ handleAddItems ➡️ setItems ➡️ PackingList + Stats

// PackingList ➡️ Item
// Item ➡️ handleToggleItem / handleDeleteItem

// PackingList ➡️ sort logic ➡️ re-render

// Clear button ➡️ handleClearItem ➡️ setItems([])

// Stats ➡️ items info show
