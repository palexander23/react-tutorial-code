# Calculator Example App

This project is a demonstration app for the React framework. It is a GUI calculator 

## Structure

At the top of the Hierarchy there will be a `Calculator` component. This is rendered in the root div `index.html`.

The `Calculator` Component is populated with many `Button` components to generate input and a single `Display` component to display that input. 

### Calculator

The calculator contains the line of characters entered in its state. The onClick function for all but the '=' and '<-' buttons append the character they contain to the line of characters.
The '=' calls the calculator to parse the contents of the line of characters and compute an answer. The backspace character removes the right most character from the line of characters. 

The line of characters is be a string as the characters can be pushed and popped off the end at will.

### Button 

The buttons have no state and their onClick functions passed down to them as props from the calculator. The Calculator assigns the character to display through a prop and the onClick function passed to the button has that character as an argument.

### Display

The display has a single line of text passed down to it as a prop and it displays it in a text box in its render function.