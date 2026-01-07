const readline = require('readline');

//1. Data types (Boolean & Arrays)
const isVipMember = true; // Boolean data type
const cart = [ 
{
    name: "Laptop",
    price: 1000,
    quantity: 1,
    inStock: true
},
{
    name: "Headphones",
    price: 200,
    quantity: 2,
    inStock: true
},
{
    name: "Mouse",
    price: 50,
    quantity: 1,
    inStock: false // out of stock
},
{
    name: "HDMI Cable",
    price: 30,
    quantity: 1,
    inStock: true
}];

//2. Function (Arrow Function expression)
const applyDiscount = (price, discountRate) => price - (price * discountRate / 100);

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("--- Available Items ---");
for (let i = 0; i < cart.length; i++) {
    console.log(`${i}: ${cart[i].name} - $${cart[i].price}`);
}

// Ask user for item selection
rl.question("\nEnter item numbers separated by commas (e.g., 0,1,3): ", (userInput) => {
    const selectedIndices = userInput.split(',').map(num => parseInt(num.trim()));
    
    //3. LOGIC & LOOPS
    let finalTotal = 0;
    
    console.log("\n--- Processing Cart Items ---");
    for (let i = 0; i < selectedIndices.length; i++) {
        let item = cart[selectedIndices[i]];
        
        //Logical Check & Continue
        if (!item.inStock) {
            console.log(`Skipping ${item.name}: out of stock.`);
            continue; //Skip this item and goes to next
        }

        //Logical Check & Break
        if (finalTotal > 2000) {
            console.log("Final total exceeded $2000, stopping further processing.");
            break; //Exit the loop
        }

        //if-else condition
        let itemPrice = item.price;
        if (isVipMember && itemPrice > 100) {
            itemPrice = applyDiscount(itemPrice, 10); //10% discount for VIP members on items over $100
            console.log(`Applied VIP discount on ${item.name}. New price: $${itemPrice}`);
        }
        finalTotal += itemPrice * item.quantity; // Multiply by quantity

        //switch (finalizing payment method)
        let paymentMethod = "Credit Card"; // Example payment method
        switch (paymentMethod) {
            case "paypal":
                console.log("Processing payment through PayPal.");
                break;
            case "Credit Card":
                console.log("Processing payment through Credit Card.");
                break;
            case "Debit Card":
                console.log("Processing payment through Debit Card.");
                break;
            default:
                console.log("Unknown payment method. Please select a valid option.");
        }

        console.log(`Final total to pay: $${finalTotal}`);
    }

    console.log(`\n--- Final Invoice ---`);
    console.log(`Total Amount: $${finalTotal}`);
    
    rl.close();
});