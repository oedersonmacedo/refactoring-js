# What would refactoring be?

- “a change made to the internal structure of software to make it easier to understand and cheaper to modify without changing its observable behavior” ~ Martin Fowler
- Refactoring is an investment, it makes soft sustainable and competitive
- Day after day the lack of refactoring consumes team time
- Refactor with a purpose, avoid refactoring for refactoring's sake
- Refactor when fixing a mistake
- Refactor when you need to understand code
- Many companies need to take on some debt to grow
- It's our responsibility to ensure the quality of our work
- Refactoring is recognizing and dealing with code smells on a daily basis
- A code smell is any characteristic in the source code of a program that possibly indicates a deeper problem
- #### Code smells and refactoring techniques
  - Code smells is a symptom
  - One of the characteristics about a strange code is the name of the variable
  - Have magic numbers. You should have numbers like this as constants
  - Comments in the code, the variable is self-explanatory without the need for a comment
  - Blank lines without a pattern is a problem, making the code difficult to read. Either it has a pattern, or it is completely avoided.
  - Confusing conditions
    - When there is a departure from the margin, there is such a great complexity that it is much greater for understanding, that is why this care
    - abstract to a method with its responsibility
    - For nested conditions switch to guard clauses
    - Consolidate conditional expressions, working with minimal conditions is much clearer
    - Work with a ternary, but in moderation, because when a ternary has another ternary it brings more complications than it facilitates the programmer,
    - Replace switch with polymorphism
    - Extract method, don't have so big methods;
    - Be careful with the amount of values passed, up to 3 is an acceptable value, more than that becomes a mess for understanding
    - Handle an exception, don't silence it
    - Replace exception handling with condition. It will always be better to validate

