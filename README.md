# Order Price Calculator

A modern, TypeScript-powered web application for calculating order totals with tax and discount features. This calculator provides real-time price calculations with a clean, user-friendly interface.

## 🌟 Features

- **Real-time Calculation**: Instant total price calculation as you input values
- **Tax Calculation**: Automatically computes tax amounts based on percentage
- **Discount Support**: Apply percentage-based discounts to orders
- **Detailed Breakdown**: Shows subtotal, tax amount, discount amount, and final total
- **TypeScript Powered**: Built with TypeScript for type safety and better code maintainability
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Clean UI**: Modern, intuitive interface for easy data entry

## 🚀 Live Demo

Check out the live application: [Order Price Calculator](https://sujitbarnawal.github.io/week2-order-price-calculator/)

## 📁 Project Structure

```
week2-order-price-calculator/
├── dist/               # Compiled output files
├── src/                # TypeScript source files
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── .gitignore         # Git ignore rules
```

## 💻 Usage

1. **Enter Item Details**:
   - Input the item name
   - Enter the item price
   - Specify the quantity

2. **Apply Tax and Discount** (Optional):
   - Enter tax percentage (e.g., 10 for 10%)
   - Enter discount percentage (e.g., 15 for 15%)

3. **Calculate**:
   - Click the "Calculate Total" button
   - View the detailed breakdown:
     - Item Name
     - Subtotal (Price × Quantity)
     - Tax Amount
     - Discount Amount
     - **Total Payable** (Final amount)

## 🧮 Calculation Formula

```
Subtotal = Item Price × Quantity
Tax Amount = Subtotal × (Tax% / 100)
Discount Amount = Subtotal × (Discount% / 100)
Total Payable = Subtotal + Tax Amount - Discount Amount
```

## 🎨 Technologies Used

- **TypeScript**: For type-safe JavaScript code
- **HTML5**: Semantic markup
- **CSS3**: Modern styling and responsive design
- **Vite** (likely): For fast development and building
- **Git**: Version control

