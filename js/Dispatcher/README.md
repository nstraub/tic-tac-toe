 Dispatcher
 
Patterns:

- [Mediator](https://en.wikipedia.org/wiki/Mediator_pattern)
> "Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently." [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/)
 
- [Observer](https://en.wikipedia.org/wiki/Observer_pattern)
> "Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically." [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/)
 
The dispatcher is an implementation of the Mediator pattern combined with the Observer pattern, which allows different objects to interact without knowing about each other.
 
A Mediator allows two or more objects with the same interface (called `Colleagues`) to interact without knowing about each other. Each Colleague is passed a reference to the Mediator and registers one or more callbacks on it. Then, when it requires operations from other Colleagues, it calls a method on the Mediator which coordinates communication with the rest of the Colleagues.
 
The Observer pattern behaves in a similar way, except it focuses on the relationship between the callbacks themselves (called `Observers`) and the object they are observing (called the `Subject`). Whenever a particular aspect of the Subject changes, the Observers are "notified" and perform operations that have to do with this change.
 
Though quite subtle, the difference between these two patterns is very important, and has to do with [indirection](https://en.wikipedia.org/wiki/Indirection) and [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)). In the case of the Mediator, Colleagues communicate amongst themselves indirectly by asking the Mediator to invoke behaviours on other Colleagues on their behalf. In the case of the Observer, a change in the Subject's "notification" triggers an arbitrary amount of operations that perform tasks unknown to the Subject. Thus, one can say this change in the Subject's state causes a series of `side effects`, executed by the Observers.
 
Another difference between these patterns is the fact that they have inverse cardinality. In the Mediator pattern the relationship is one main actor with many secondary actors. In the case of the Observer it's one secondary actor with many main actors. This difference is crucial to understanding the role of the Dispatcher, because it's objective is to allow n amount of indirect requests to cause n amount of side effects.
 
The Dispatcher is a Mediator that provides two main methods. The first allows Colleagues to register callbacks on a particular Subject. Said callbacks become Observers of the given Subject. The second method allows Colleagues to ask the Dispatcher to coordinate communication with other Colleagues by "triggering" a notification from a particular Subject.
 
This allows great precision as to what `side effects` are `indirectly` triggered. It essentially creates a list of Subjects and coordinates Notification and execution of a specific subset of the registered callbacks from other Colleagues, relative to the Subject in question
 
Since JavaScript borrows some constructs from the functional paradigm (specifically, functions as first-class citizens), the operations need not conform to a specific interface. They're simply functions.
 