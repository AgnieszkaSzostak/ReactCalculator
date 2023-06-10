# Calculator

<img src="./public/screenshot.png" alt="">

<!-- ### :arrow_forward: View live version: **[DEMO]()** -->
## :cd: How to run a project:

### Prerequisites:
* npm 

  ```sh
  npm install npm@latest -g
  ```

### Installation

At first install all dependencies:
```sh
npm install
```

1. Clone the repo
   ```sh
   git clone 
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3.  Enter
   ```sh
   npm run start
   ```
 Project runs at port 3000.



Here are the assumptions I have made:
* The result is calculated according to the order of operations in mathematics, using the built-in eval() function in JavaScript. I understand that using this function is not the best solution, but for the purpose of this particular calculator, it works, especially when it comes to floating-point numbers.
* The result appears after clicking the '=' sign and after that, further operations cannot be performed on the evaluation
* The operations must be displayed on the calculator screen in real-time - due to this requirement, I decided to take approach using an array.
* The entered number cannot exceed 10 characters.

The problems I encountered seem to have roots in limitations of the JavaScript language. Many times, it was necessary to manipulate data of type string. Regular expressions seemed to be helpful in some cases. I was unable to implement the functionality of entering negative numbers, yet!


 
I have also tried to approach this in other ways:

1. Lines 99-105  

The result is calculated according to the order of operations, without using the eval() function, and appears in real-time regardless of clicking the '=' button. It does not work with '%' and floating-point numbers.

2. Lines 107-111

The result is calculated based on the created evaluation function. It only works for two numbers and, similar to the previous solution, does not consider '%' and floating-point numbers.
 
The task was quite challenging. I would try to implement it in a different language next time. As for the order of operations, one can consider using Reverse Polish Notation, but this solution seems very labor-intensive. In a commercial project, one can of course use a ready-made library like mathjs that performs the calculations, but I decided to try implementing the logic by myself as a part of the training.

Useful links
https://color.adobe.com/create/image

https://blog.devgenius.io/create-a-percentage-calculator-with-react-and-javascript-a1be96451ca4

https://www.sitepoint.com/react-tutorial-build-calculator-app/
https://codepen.io/Anastasiia_Dev/pen/KgrPWM

https://dev.to/subinedge/evaluate-reverse-polish-notation-expressions-using-javascript-algorithms-jmb

## Credits:
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/agnieszkaszostak/)


