import { useState } from "react";

export default function Form({onAddItems})
{
  const [description,setDescription]=useState("");
  const [quantity,setQuantity]=useState(1);
 //4. Form Submit Logic 
function handleSubmit(e){
    //prevent reload
    e.preventDefault();
    
    //prevent adding item with empty description
    if(!description) return ;
    
    
    // creating a new object,id:Date.now()-gives unique timestamp
    const newItem={
      description,
      quantity,
      packed:false
      ,id:Date.now()
    };
   
    //calling  parent function onAddItem and sending item to parent component
    onAddItems(newItem);
    
    //clearing input fields
    setDescription("");
    setQuantity(1);
 }
  
  return(
    //3.onSubmit-connect the form submit action to function
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      

      <select
      
      //2.User selects quantity
      value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>


        {/* <option value={1}> 1 </option> */}


       {/* Dynamically creates 20 <option> elements: 1 to 20 */}
       {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
         <option value={num} key={num}>
             {num}
          </option>
        ))}

      </select>


     {/* 1.Controlled input field bound to description state. */}
      <input type="text" 
      placeholder="Item.."
      value={description}onChange={
        (e)=>setDescription(e.target.value)}//updates the description state
        />
      <button>Add</button>
    </form>
  ); 
}


//Data flow visual
// User Input (description + quantity)
//           ⬇
//   Stored in useState in Form
//           ⬇
//   User clicks "Add" ➝ handleSubmit()
//           ⬇
//   Creates newItem object
//           ⬇
//   onAddItems(newItem) ➝ sends to parent
//           ⬇
//   Parent’s setItems([...items, newItem])
//           ⬇
//   App component rerenders with new item in list ✅

