export default function Stats({items}){
  if(!items.length)
   return( 
   <p className="stats">
    <em>Start adding some items to your packing list</em>
    </p>
    )

  const newItem=items.length;
  const numPacked=items.filter((item)=>item.packed).length;
  const percent=Math.round((numPacked/newItem)*100);
  return(
    <footer className="stats">
    <em>
  {percent === 100
    ? "You got everything! Ready to go 🎉"
    : `You have ${newItem} items on the list, and you already packed ${numPacked} (${percent}%)`
    } 
</em>

  </footer>
);
}