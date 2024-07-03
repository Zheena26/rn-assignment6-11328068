# rn-assignment6-11328068

# MyStore App
MyStore is a React Native application designed for managing product listings and cart functionality, utilizing local storage for data persistence.

# Design Choices

# User Interface:
* HomeScreen: Displays a grid of available products with "Add to Cart" buttons.
* CartScreen: Shows selected items with "Remove" buttons for each item in the cart.
* Navigation: Utilizes react-navigation for seamless navigation between screens.
# Functionality:
* Adding/Removing Items: Users can add products to the cart and remove them as needed.
* Local Storage: AsyncStorage is used to store cart items locally on the device for offline access.
* Implementation Details
# Dependencies:
* React Native: Framework for building native apps using React.
* AsyncStorage: Provides asynchronous storage for persisting selected cart items.
react-navigation: Enables navigation between HomeScreen and CartScreen.
* Code Structure:
HomeScreen: Renders product grid, handles adding products to cart.
CartScreen: Displays selected items from cart, supports item removal.
* Context API: Manages cart state with CartContext to share data across components.
# Screenshots

# Installation
To run the app locally:

Clone the repository:

bash
Copy code
git clone https://github.com/Zheena26/rn-assignment6-11328068.git
cd MyStore 
# Install dependencies:

bash
Copy code
npm install
Run on iOS:

bash
Copy code
npx react-native run-ios
Run on Android:

bash
Copy code
npx react-native run-android
Contributing
Contributions are welcome! Fork the repository and submit a pull request with your changes.

# License
This project is licensed under the MIT License - see the LICENSE file for details.