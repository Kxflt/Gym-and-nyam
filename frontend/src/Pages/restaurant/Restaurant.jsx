import React from 'react';

function Restaurant() {
  const dayOfWeek = new Date().getDay() - 1;

  const menu = [
    {
      day: 'Monday',
      firstDish:
        'Chicken Salad with Spinach, Tomatoes, Avocado, and Yogurt Dressing.',
      secondDish: 'Baked Salmon with Asparagus and Sweet Potato.',
      dessert: 'Frozen Banana Ice Cream',
    },
    {
      day: 'Tuesday',
      firstDish: 'Turkey Tacos with Whole Wheat Tortillas and Guacamole.',
      secondDish: 'Protein Smoothie with Banana, Spinach, and Almond Milk.',
      dessert: 'Sugar-Free Fruit Compote.',
    },
    {
      day: 'Wednesday',
      firstDish: 'Grilled Chicken Breast with Brown Rice and Steamed Broccoli.',
      secondDish:
        'Tuna Salad with Chickpeas, Cucumber, Bell Pepper, and Lemon Vinaigrette.',
      dessert: 'Baked Apples with Cinnamon.',
    },
    {
      day: 'Thursday',
      firstDish: 'Whole Wheat Toast with Avocado, Poached Egg, and Spinach.',
      secondDish: 'Egg White Omelette with Mushrooms and Spinach.',
      dessert: 'Chia Seed Pudding.',
    },
    {
      day: 'Friday',
      firstDish: 'Lentil Soup with Vegetables and Quinoa.',
      secondDish: 'Lettuce Wraps with Lean Ground Beef and Vegetables.',
      dessert: 'Avocado Brownies.',
    },
    {
      day: 'Saturday',
      firstDish: 'Baked Cod with Asparagus and Mashed Sweet Potatoes.',
      secondDish:
        'Quinoa Salad with Grilled Chicken, Cucumber, and Lemon Dressing.',
      dessert: 'Oat and Banana Cookies.',
    },
    {
      day: 'Monday',
      firstDish:
        'Chicken Salad with Spinach, Tomatoes, Avocado, and Yogurt Dressing.',
      secondDish: 'Baked Salmon with Asparagus and Sweet Potato.',
      dessert: 'Almond and Date Truffles.',
    },
  ];

  const dayMenu = menu[dayOfWeek];
  console.log(new Date());
  return (
    <div>
      <h2>Today's menu - {dayMenu.day}:</h2>
      <p>First dish: {dayMenu.firstDish}</p>
      <p>Second dish: {dayMenu.secondDish}</p>
      <p>Dessert: {dayMenu.dessert}</p>
    </div>
  );
}

export default Restaurant;
