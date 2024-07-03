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
![Screenshot (107)](https://github.com/Zheena26/rn-assignment6-11328068/assets/169994345/cf82ba63-3734-4994-9325-c33269b399c1)
![Screenshot (108)](https://github.com/Zheena26/rn-assignment6-11328068/assets/169994345/8374141a-f023-4309-83d0-144134cbceb3)
![Screenshot (109)](https://github.com/Zheena26/rn-assignment6-11328068/assets/169994345/73ccc892-6c36-4e9b-a630-cf79947e0f79)
![Screenshot (111)](https://github.com/Zheena26/rn-assignment6-11328068/assets/169994345/f4e80487-0540-4afa-b8c3-fb17b4318ec2)
![Screenshot (112)](https://github.com/Zheena26/rn-assignment6-11328068/assets/169994345/753d3bc5-c44a-48a6-8328-c566bf678f48)
![Screenshot (113)](https://github.com/Zheena26/rn-assignment6-11328068/assets/169994345/629ca3de-f24f-447c-910e-a7477b10227a)
![Screenshot (114)](https://github.com/Zheena26/rn-assignment6-11328068/assets/169994345/e099372c-4f3f-4a85-84c7-f43eec13dff8)

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
