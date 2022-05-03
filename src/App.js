import Menu from ".menu/Menu"


const menuItems = [
  {
    id: 1,
    type: 'Bourbon, Neat',
    price: 12,
    qty: 0
  },
  {
    id: 2,
    type: 'Old Fashioned',
    price: 15,
    qty: 0
  },
  {
    id: 3,
    type: 'Mint Julep',
    price: 16,
    qty: 0
  }
];


function App() {
  return (
    <div>
      <Menu startingItems={menuItems}/>
    </div>
  );
}

export default App;
