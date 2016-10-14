# [Factory Method](https://en.wikipedia.org/wiki/Factory_method_pattern)

> "Define an interface for creating an object, but let subclasses decide which class to instantiate. The Factory method lets a class defer instantiation it uses to subclasses." [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/)

The `Factory Method`, while very simple, is extremely powerful. In this case it just provides a shortcut for making a 3x3 matrix, but in more complex applications it allows us to easily [decouple](https://en.wikipedia.org/wiki/Coupling_(computer_programming)) the [interface](https://en.wikipedia.org/wiki/Interface_(computing)#Software_interfaces_in_object-oriented_languages) from the [implementation](https://en.wikipedia.org/wiki/Implementation#Computer_science).
 
The benefits of this pattern are better seen in class-based languages, but consider you want to make a 5x5 board. without this `Factory` you would have to go through your code changing the size of the board **everywhere** you **create** one. With this method, it's just a matter of overwriting the function declaration like so:

```javascript
function createBoard() {
   return [
       [0,0,0,0,0],
       [0,0,0,0,0],
       [0,0,0,0,0],
       [0,0,0,0,0],
       [0,0,0,0,0]
   ];
}
```

Since the interface wasn't modified (i.e. you still create the matrix by calling `createBoard()`), you don't need to change anything else in your code to create a 5x5 matrix.
