/* ============================================================
   RECIPES DATA
   Add a new recipe by copying an object below and editing it.
   - id: unique, lowercase, hyphenated — used in the URL
   - number: catalog number, just increment from the last one
   - category: "Breakfast" | "Mains" | "Sweets" | "Sides"
     (pick one of these four, or add a new one AND a matching
     color in CATEGORY_COLORS below)
   - servingsBase: the serving count the ingredient amounts below match
   - ingredients: amount is a number (use decimals, e.g. 0.5)
   ============================================================ */

const CATEGORY_COLORS = {
  Breakfast: "var(--amber)",
  Mains: "var(--blue)",
  Sweets: "var(--pink)",
  Sides: "var(--green)",
};

const RECIPES = [
  {
    id: "skillet-cornbread",
    number: 1,
    title: "Skillet Cornbread",
    tagline: "Crisp buttery edges, tender crumb, no sugar needed.",
    category: "Sides",
    time: "35 min",
    difficulty: "Easy",
    servingsBase: 8,
    ingredients: [
      { amount: 1.5, unit: "cup", name: "cornmeal" },
      { amount: 1, unit: "cup", name: "flour" },
      { amount: 1, unit: "tbsp", name: "baking powder" },
      { amount: 0.75, unit: "tsp", name: "salt" },
      { amount: 1.75, unit: "cup", name: "buttermilk" },
      { amount: 2, unit: null, name: "large eggs" },
      { amount: 4, unit: "tbsp", name: "butter, melted, plus extra for the skillet" },
    ],
    steps: [
      "Preheat the oven to 425°F (220°C) with a 10-inch cast-iron skillet inside.",
      "Whisk the cornmeal, flour, baking powder, and salt together in a large bowl.",
      "In a separate bowl, whisk the buttermilk, eggs, and melted butter until smooth.",
      "Pour the wet ingredients into the dry and stir just until combined — a few lumps are fine.",
      "Carefully remove the hot skillet, add a pat of butter to coat the bottom, then pour in the batter.",
      "Bake for 20–22 minutes, until the top is golden and a toothpick comes out clean.",
      "Let it rest 5 minutes in the skillet before slicing.",
    ],
    notes: "Sample recipe — swap in one of your own! Great with honey butter or alongside chili.",
  },
  {
    id: "weeknight-chicken-tikka-masala",
    number: 2,
    title: "Weeknight Chicken Tikka Masala",
    tagline: "A shortcut version that still tastes like it simmered all day.",
    category: "Mains",
    time: "40 min",
    difficulty: "Medium",
    servingsBase: 4,
    ingredients: [
      { amount: 1.5, unit: "lb", name: "boneless chicken thighs, cubed" },
      { amount: 1, unit: "cup", name: "plain yogurt" },
      { amount: 2, unit: "tbsp", name: "garam masala" },
      { amount: 3, unit: null, name: "garlic cloves, minced" },
      { amount: 1, unit: "tbsp", name: "ginger, grated" },
      { amount: 2, unit: "tbsp", name: "butter" },
      { amount: 1, unit: null, name: "medium onion, diced" },
      { amount: 14, unit: "oz", name: "crushed tomatoes (1 can)" },
      { amount: 0.75, unit: "cup", name: "heavy cream" },
    ],
    steps: [
      "Toss the chicken with the yogurt, half the garam masala, garlic, and ginger. Marinate 20 minutes (or overnight).",
      "Sear the marinated chicken in a hot pan until charred at the edges, about 6 minutes. Set aside.",
      "In the same pan, melt the butter and cook the onion until soft, about 5 minutes.",
      "Stir in the remaining garam masala and cook 1 minute until fragrant.",
      "Add the crushed tomatoes and simmer 10 minutes, then stir in the cream.",
      "Return the chicken to the pan and simmer 8–10 minutes until cooked through.",
      "Serve over rice with warm naan.",
    ],
    notes: "Sample recipe — swap in one of your own! Freezes well for up to 3 months.",
  },
  {
    id: "brown-butter-chocolate-chip-cookies",
    number: 3,
    title: "Brown Butter Chocolate Chip Cookies",
    tagline: "Nutty, deep, and chewy in the middle.",
    category: "Sweets",
    time: "45 min",
    difficulty: "Easy",
    servingsBase: 24,
    ingredients: [
      { amount: 1, unit: "cup", name: "butter" },
      { amount: 1, unit: "cup", name: "brown sugar, packed" },
      { amount: 0.5, unit: "cup", name: "granulated sugar" },
      { amount: 2, unit: null, name: "large eggs" },
      { amount: 1, unit: "tsp", name: "vanilla extract" },
      { amount: 2.25, unit: "cup", name: "flour" },
      { amount: 1, unit: "tsp", name: "baking soda" },
      { amount: 1, unit: "tsp", name: "salt" },
      { amount: 2, unit: "cup", name: "chocolate chips" },
    ],
    steps: [
      "Brown the butter in a light-colored pan over medium heat until golden and nutty-smelling, about 5 minutes. Cool slightly.",
      "Whisk the browned butter with both sugars until glossy.",
      "Beat in the eggs and vanilla.",
      "Fold in the flour, baking soda, and salt just until no dry streaks remain, then fold in the chocolate chips.",
      "Chill the dough for at least 30 minutes (or up to 3 days).",
      "Scoop onto a lined baking sheet and bake at 375°F (190°C) for 10–12 minutes, until the edges are set.",
      "Cool on the sheet for 5 minutes before moving to a rack.",
    ],
    notes: "Sample recipe — swap in one of your own! Dough freezes well as pre-scooped balls.",
  },
  {
    id: "cuban-pollo-a-la-plancha",
    number: 4,
    title: "Cuban-Style Pollo a la Plancha",
    tagline: "Garlicky citrus-marinated chicken, seared golden and topped with sweet browned onions.",
    category: "Mains",
    time: "50 min",
    difficulty: "Medium",
    servingsBase: 4,
    ingredients: [
      { amount: 6, unit: null, name: "garlic cloves" },
      { amount: 0.25, unit: "cup", name: "fresh orange juice (about 1 orange)" },
      { amount: 0.25, unit: "cup", name: "fresh lime juice (about 2 limes)" },
      { amount: 1.5, unit: "tsp", name: "ground cumin" },
      { amount: 1.5, unit: "tsp", name: "dried oregano" },
      { amount: 1, unit: "tsp", name: "freshly ground black pepper" },
      { amount: 0.5, unit: "tsp", name: "ground allspice (optional)" },
      { amount: null, unit: null, name: "kosher salt, to taste" },
      { amount: 4, unit: null, name: "boneless, skinless chicken breasts (about 10 oz each), pounded into cutlets" },
      { amount: 1, unit: "tbsp", name: "neutral oil (canola or vegetable), plus more as needed" },
      { amount: 1, unit: null, name: "large white or yellow onion, sliced into 1/4-inch rings" },
      { amount: null, unit: null, name: "cooked rice and black beans, for serving" },
      { amount: null, unit: null, name: "cilantro leaves, for serving" },
      { amount: null, unit: null, name: "lime wedges, for serving" },
    ],
    steps: [
      "Blend the garlic, orange juice, lime juice, cumin, oregano, black pepper, allspice, and 2 teaspoons of salt into a smooth marinade.",
      "Pound the chicken breasts to an even 1/4-inch thickness (slicing into cutlets first if needed).",
      "Combine the chicken and marinade in a zip-top bag or shallow dish, coating well. Refrigerate 30 minutes, turning once if using a dish.",
      "Wipe excess marinade off the chicken. Heat the oil in a skillet over medium-high until shimmering, then sear the cutlets in batches, 2–3 minutes per side, until golden brown. Keep warm.",
      "In the same skillet, sauté the onion rings with a pinch of salt over medium-high heat until softened and browned, 7–10 minutes, adding a splash of water if they start to catch.",
      "Plate the chicken, top with the browned onions, and serve with rice, black beans, cilantro, and lime wedges.",
    ],
    notes: "Adapted from Serious Eats' Cuban-style pollo a la plancha. 30 minutes is plenty of marinating time — much longer and the citrus starts to firm up the chicken.",
  },
];
