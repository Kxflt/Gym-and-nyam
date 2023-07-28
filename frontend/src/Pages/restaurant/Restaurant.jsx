import React from 'react';
import './restaurant.css';
function Restaurant() {
  const dayOfWeek = new Date().getDay() - 1;

  const menu = [
    {
      day: 'Monday',
      firstDish:
        'Chicken salad with spinach, tomatoes, avocado, and yogurt dressing.',
      secondDish: 'Baked salmon with asparagus and sweet potato.',
      dessert: 'Frozen banana ice cream',
    },
    {
      day: 'Tuesday',
      firstDish: 'Turkey tacos with whole wheat tortillas and guacamole.',
      secondDish: 'Protein Smoothie with Banana, Spinach, and Almond Milk.',
      dessert: 'Sugar-Free Fruit Compote.',
    },
    {
      day: 'Wednesday',
      firstDish: 'Grilled chicken breast with brown rice and steamed broccoli.',
      secondDish:
        'Tuna salad with chickpeas, cucumber, bell pepper, and lemon vinaigrette.',
      dessert: 'Baked apples with cinnamon.',
    },
    {
      day: 'Thursday',
      firstDish: 'Whole wheat toast with avocado, poached egg, and spinach.',
      secondDish: 'Egg white omelette with mushrooms and spinach.',
      dessert: 'Chia seed pudding.',
    },
    {
      day: 'Friday',
      firstDish: 'Lentil soup with vegetables and quinoa.',
      secondDish: 'Lettuce wraps with lean ground beef and vegetables.',
      dessert: 'Avocado brownies.',
    },
    {
      day: 'Saturday',
      firstDish: 'Baked cod with asparagus and mashed sweet potatoes.',
      secondDish:
        'Quinoa salad with grilled chicken, cucumber, and lemon dressing.',
      dessert: 'Oat and banana cookies.',
    },
    {
      day: 'Monday',
      firstDish:
        'Chicken salad with spinach, tomatoes, avocado, and yogurt dressing.',
      secondDish: 'Baked salmon with asparagus and sweet potato.',
      dessert: 'Almond and Date Truffles.',
    },
  ];

  const dayMenu = menu[dayOfWeek];

  return (
    <>
      <div className="container">
        <h2>Today's menu - {dayMenu.day}:</h2>
        <p>First dish: {dayMenu.firstDish}</p>
        <p>Second dish: {dayMenu.secondDish}</p>
        <p>Dessert: {dayMenu.dessert}</p>
      </div>
    </>
  );
}

export default Restaurant;
