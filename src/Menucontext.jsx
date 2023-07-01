import React from "react";

const Menucontext = React.createContext()

export default function MenucontextProvider(props) {
   
    const [menuData, setMenuData] = React.useState(null)

    const [itemsInCart, setItemsIncart] = React.useState([])

    const [costOfItemsInCart, setCostOfItemsInCart] = React.useState(0)

    function addItemToCart(itemAdded) {
        setItemsIncart(prevItems => {
            return [
               itemAdded,
                ...prevItems
            ]
        }) 
    }

    function removeItemFromCart(id) {
        setItemsIncart(prevItems => {
            return prevItems.filter(item => item.id !== id)
        })
    }

    React.useEffect(() => {
        let totalCost = 0;
        for (let i = 0; i < itemsInCart.length; i++) {
          totalCost += itemsInCart[i].price;
        }
        setCostOfItemsInCart(totalCost)
    },[itemsInCart])
    
    

    React.useEffect(() => {
        const storedItems = localStorage.getItem("cartItems");
        if (storedItems) {
            setItemsIncart(JSON.parse(storedItems));
        }
      }, []);

    React.useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
      }, [itemsInCart]);
   
    
   

    React.useEffect(() => {
        fetch('http://localhost:3000/menu')
          .then(res => res.json())
          .then(data => setMenuData(data))
          .catch((error) => console.error('Error fetching users:', error))
    }, [])

    return (
      <Menucontext.Provider 
           value={
                  {
                    menuData: menuData, 
                    itemsInCart: itemsInCart,
                    addItemToCart: addItemToCart,
                    removeItemFromCart: removeItemFromCart,
                    costOfItemsInCart: costOfItemsInCart
                  }
                }
      >
        {props.children}
      </Menucontext.Provider>
    )
}

export { Menucontext }