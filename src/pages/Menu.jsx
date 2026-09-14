import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuCategories = [
    {
      category: "Beverages",
      items: [
        { name: "Signature Espresso", description: "Rich and bold single origin coffee", price: "₹180" },
        { name: "Caramel Macchiato", description: "Espresso with vanilla and caramel drizzle", price: "₹220" },
        { name: "Hazelnut Latte", description: "Smooth latte with hazelnut syrup", price: "₹200" },
        { name: "Iced Americano", description: "Chilled espresso over ice", price: "₹170" },
        { name: "Cappuccino", description: "Classic Italian coffee with frothy milk", price: "₹190" },
        { name: "Mocha Frappe", description: "Chocolate blended coffee delight", price: "₹240" },
        { name: "Green Tea Latte", description: "Premium matcha with steamed milk", price: "₹210" },
        { name: "Fresh Lime Soda", description: "Refreshing citrus beverage", price: "₹120" }
      ]
    },
    {
      category: "Sandwiches & Wraps",
      items: [
        { name: "Grilled Chicken Sandwich", description: "Tender chicken with herbs and cheese", price: "₹280" },
        { name: "Veg Club Sandwich", description: "Layered vegetables with special sauce", price: "₹220" },
        { name: "Paneer Tikka Wrap", description: "Spiced paneer in tortilla wrap", price: "₹240" },
        { name: "Chicken Caesar Wrap", description: "Classic caesar flavors in a wrap", price: "₹290" },
        { name: "Cheese Melt Sandwich", description: "Triple cheese goodness grilled to perfection", price: "₹230" },
        { name: "Hummus Veg Wrap", description: "Mediterranean style vegetable wrap", price: "₹210" }
      ]
    },
    {
      category: "Main Course",
      items: [
        { name: "Pasta Alfredo", description: "Creamy white sauce pasta with herbs", price: "₹320" },
        { name: "Pasta Arrabiata", description: "Spicy tomato based Italian pasta", price: "₹300" },
        { name: "Chicken Steak", description: "Grilled chicken with pepper sauce", price: "₹450" },
        { name: "Mushroom Risotto", description: "Creamy Italian rice with mushrooms", price: "₹340" },
        { name: "BBQ Chicken Pizza", description: "12 inch pizza with BBQ chicken topping", price: "₹420" },
        { name: "Veg Supreme Pizza", description: "Loaded with fresh vegetables", price: "₹360" }
      ]
    },
    {
      category: "Desserts",
      items: [
        { name: "Chocolate Lava Cake", description: "Warm cake with molten chocolate center", price: "₹280" },
        { name: "Cheesecake", description: "New York style classic cheesecake", price: "₹320" },
        { name: "Tiramisu", description: "Italian coffee-flavored dessert", price: "₹340" },
        { name: "Brownie Sundae", description: "Warm brownie with vanilla ice cream", price: "₹300" },
        { name: "Fruit Tart", description: "Fresh seasonal fruits on custard tart", price: "₹260" },
        { name: "Gulab Jamun Ice Cream", description: "Traditional sweet with ice cream", price: "₹240" }
      ]
    },
    {
      category: "Smoothies & Shakes",
      items: [
        { name: "Berry Blast Smoothie", description: "Mixed berries with yogurt", price: "₹220" },
        { name: "Mango Smoothie", description: "Fresh mangoes with honey", price: "₹200" },
        { name: "Chocolate Shake", description: "Rich chocolate with ice cream", price: "₹240" },
        { name: "Strawberry Shake", description: "Fresh strawberries blended smooth", price: "₹240" },
        { name: "Oreo Shake", description: "Cookies and cream delight", price: "₹250" },
        { name: "Detox Green Smoothie", description: "Healthy greens and fruits blend", price: "₹210" }
      ]
    }
  ];

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <div className="menu-hero-overlay"></div>
        <div className="menu-hero-content container">
          <h1>Our Menu</h1>
          <p>Discover our carefully curated selection of premium dishes and beverages</p>
        </div>
      </div>

      <div className="menu-content section">
        <div className="container">
          {menuCategories.map((category, index) => (
            <div key={index} className="menu-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="menu-items-grid">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item">
                    <div className="menu-item-header">
                      <h3 className="menu-item-name">{item.name}</h3>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="menu-note">
            <p>* Prices are inclusive of all taxes. Menu items and prices subject to change.</p>
            <p>** Please inform our staff about any food allergies or dietary requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
