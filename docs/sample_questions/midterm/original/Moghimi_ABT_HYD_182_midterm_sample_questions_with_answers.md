# ABT HYD 182 Midterm Sample Questions with Answers

---

## Short Answer Questions

### Question 1
**What are the advantages of Python compared to other GIS software?**

- Python is a free scripting language
- Automating repetitive tasks
- Simple development environment
- Scalability (Writing python scripts is relatively simple)
- Integrated modules and packages
- Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
- Python can be used to handle big data and perform complex mathematics.

---

### Question 2
**Give one example of a data type, statement, and function. (2 points)**

- **Data type:** list, tuple
- **Statement:** IF ELSE statements
- **Function:** PRINT(), INPUT()

---

### Question 3
**Python integrates modules and packages to provide numerous tools for working with data. Provide the name of a few packages in Python used for spatial analysis.**

- ArcPy
- GeoPandas
- Rasterio
- Fiona
- Shapely

---

## Multiple Choice Questions

### Question 4
**Which of the following is NOT a useful command when you want to explore your dataframe (named df)?**

A. `df.unique()`  
B. `df.info()`  
C. `df.describe()`  
D. `df.shape()`  
E. `df.head()`

---

### Question 5
**Which one of these yields a list of length 3?**

A. `var = [[1,2],[3,4],[5]]`  
B. `var = list(3)`  
C. `var = {my_list : [1, 2, 3]}`  
D. `var = (1, 2, 3)`

---

### Question 6
**Which keyword is NOT used in decision making?**

A. `for`  
B. `if`  
C. `else`  
D. `elif`

---

### Question 7
**Which option best describes a tuple?**

A. they are mutable immutable  
B. a list of numbers  
C. they are mutable  
D. contains no duplicates

---

### Question 8
**Which of the following statements is NOT valid?**

A. `if a = b:`  
B. `elif a > b:`  
C. `else:`  
D. `if a % 2 == 0:`  
E. `if False:`

---

### Question 9
**Which of the following data types is not among sequence types?**

A. List  
B. Tuple  
C. Range  
D. Dictionary (dict)

---

### Question 10
**If a=10 and b=5, then which of the following conditional statements is False?**

A. `a%b == 0`  
B. `a!=b`  
C. `a>=b`  
D. `a//b==0`

---

### Question 11
**If my_list = [24, 19, 27, 41, 34], which of the following returns the third element of the list (27)?**

A. `my_list[0]`  
B. `my_list[1]`  
C. `my_list[2]`  
D. `my_list[3]`

---

### Question 12
**You can concatenate the number 100 with the string literal "meters" with the following code: `100 + "meters"`**

A. True  
B. False

---

### Question 13
**Choose the correct syntax to return the first row in a Pandas DataFrame:**

A. `df.loc[0]`  
B. `df.loc(0, 1)`  
C. `df[0]`  
D. `df.get[0]`

---

### Question 14
**What is the output of the following code?**

```python
var = "ABT182 " * 1 * 3
print(var)
```

A. `ABT182 ABT182 ABT182 ABT182`  
B. `ABT182`  
C. `ABT182 ABT182 ABT182`  
D. `NameError: name 'var' is not defined`

---

### Question 15
**What is the output of the following code?**

```python
Color_List = ["blue", "green", "black", "yellow"]
Color_List.append("red")
print(Color_List)
```

A. `['blue', 'green', 'black', 'yellow', 'red']`  
B. `['blue', 'green', 'black', 'red']`  
C. `['red', 'green', 'black', 'yellow']`  
D. `['red', 'green', 'black', 'blue']`

---

### Question 16
**What is the correct way to declare a variable x with the integer value 10?**

A. `x = 10`  
B. `int x = 10`  
C. `x := 10`  
D. `x -> 10`

**Answer:** A) `x = 10`

---

### Question 17
**Which of the following is the correct syntax for an if statement in Python?**

A. 
```python
if x > 10
print(x)
```

B. 
```python
if (x > 10):
print(x)
```

C. 
```python
if x > 10:
print(x)
```

D. 
```python
if x > 10 then
print(x)
```

---

### Question 18
**How do you iterate over the items of a list, my_list, using a for loop?**

A. 
```python
for i in my_list:
    print(i)
```

B. 
```python
for i in range(my_list):
    print(i)
```

C. 
```python
for i in len(my_list):
    print(my_list[i])
```

D. 
```python
for each i in my_list:
    print(i)
```

---

### Question 19
**How do you define a function add_numbers that takes two numbers and returns their sum?**

A. 
```python
function add_numbers(a, b):
    return a + b
```

B. 
```python
def add_numbers(a, b)
    return a + b
```

C. 
```python
def add_numbers(a, b):
    return a + b
```

D. 
```python
function add_numbers(a, b)
    {return a + b}
```

---

### Question 20
**What is the correct way to write a while loop that prints numbers from 1 to 5?**

A. 
```python
while i <= 5:
    print(i)
    i += 1
```

B. 
```python
i = 1
while i <= 5
    print(i)
    i = i + 1
```

C. 
```python
i = 1
while i <= 5:
    print(i)
    i += 1
```

D. 
```python
i = 1
while i <= 5:
    print(i)
    i += 1
```

---

### Question 21
**How do you add an element 'Python' to an existing list languages?**

A. `languages.add('Python')`  
B. `languages.append('Python')`  
C. `add(languages, 'Python')`  
D. `languages += 'Python'`

---

### Question 22
**Which of the following is true about tuples in Python?**

A. Tuples are mutable.  
B. Tuples can contain multiple data types, such as string and float.  
C. Tuples are defined using square brackets [].  
D. You can add elements to a tuple after it is created.

---

### Question 23
**How do you access the value associated with the key 'Python' in a dictionary d?**

A. `d['Python']`  
B. `d.get('Python')`  
C. `d(Python)`  
D. Both A and B are correct.

---

### Question 24
**Which function is used to read a CSV file into a DataFrame in Pandas?**

A. `pandas.read_csv('filename.csv')`  
B. `pandas.csv('filename.csv')`  
C. `pandas_csv('filename.csv')`  
D. `pandas.open_csv(filename.csv)`

---

### Question 25
**What is the output of `print(8 ** (1/3))`?**

A. 16  
B. 2.0  
C. 4  
D. 8

---

### Question 26
**Consider the following code snippet, what will it print?**

```python
c = [x**3 for x in range(1, 12) if x % 3 == 0]
print(c)
```

A. `[3, 6, 9]`  
B. `[27, 216, 729]`  
C. `[8, 27, 64]`  
D. `[27, 216]`  
E. `[27, 125, 343]`

---

### Question 27
**Consider the following code snippet, what will it print?**

```python
x = 5
if x > 10:
    message = "Greater than 10."
else:
message = "Less than or equal to 10."

print(message)
```

A. Greater than 10.  
B. Less than or equal to 10.  
C. SyntaxError: invalid syntax due to missing colon  
D. IndentationError: expected an indented block

---

### Question 28
**What does the following Python code print?**

```python
my_list = [1, 2, 3, 4, 5]
print(my_list[1:3])
```

A. `[2, 3]`  
B. `[1, 2]`  
C. `[2, 3, 4]`  
D. `[1, 3]`

---

### Question 29
**Which of the following statements about Python is true?**

A. Python is a compiled language.  
B. Python code must be written within curly braces {}.  
C. Python uses indentation to define blocks of code.  
D. Python does not support object-oriented programming.

---

### Question 30
**What will be the output of the following code?**

```python
x = 5
y = 2
print(x // y)
```

A. 2.5  
B. 1  
C. 2.0  
D. 2.2

---

### Question 31
**Which of the following statements is true regarding Python lists?**

A. Lists are immutable.  
B. Lists can only store elements of the same data type.  
C. Lists are indexed starting from 1.  
D. Lists can contain elements of different data types.

---

### Question 32
**What is the output of the following code?**

```python
my_dict = {'a': 1, 'b': 2, 'c': 3}
del my_dict['b']
print(my_dict)
```

A. `{'a': 1, 'c': 3}`  
B. `{'b': 2}`  
C. `{'a': 1, 'b': 2, 'c': 3}`  
D. `{'a': 1, 'b': None, 'c': 3}`

---

### Question 33
**Which of the following is the correct way to define a function in Python?**

A. 
```python
def myFunction:
    print("Hello")
```

B. 
```python
def myFunction():
    print("Hello")
```

C. 
```python
function myFunction():
    print("Hello")
```

D. 
```python
function myFunction:
    print("Hello")
```

---

### Question 34
**What does the range() function in Python return?**

A. A list of integers.  
B. A generator object that produces integers on-the-fly.  
C. A tuple of integers.  
D. A dictionary of integers.

---

### Question 35
**What will be the output of the following code?**

```python
a = [1, 2, 3]
b = a
b.append(4)
print(a)
```

A. `[1, 2, 3]`  
B. `[1, 2, 3, 4]`  
C. `[1, 2, 3, 4, 4]`  
D. `[1, 2, 3, 4, 4, 4]`

---

### Question 36
**Consider the below code snippet to answer the following question.**

```python
output = []
for number in range(1, 10):
    if number % 3 == 0:
        continue
    elif number == 7:
        break
    else:
        output.append(number)
```

**What will be the contents of the output list after executing the code above?**

A. `[1, 2, 4, 5, 7, 8, 9]`  
B. `[1, 2, 4, 5]`  
C. `[1, 2, 4, 5, 7]`  
D. `[1, 2, 4, 5, 6, 7, 8]`

---

### Question 37
**What is the output of the following code?**

```python
def my_func(x, y = 2):
    return x + y

result = my_func(3)
print(result)
```

A. 3  
B. 5  
C. 6  
D. Error: Incorrect number of arguments

---

### Question 38
**Which of the following is the correct way to define x and y both as default parameters in a Python function?**

A. `def my_function(x = 2, y):`  
B. `def my_function(x, y = 2):`  
C. `def my_function(x = 2, y = 2):`  
D. `def my_function(x = 2, y =):`

---

### Question 39
**What will be the output of the following code?**

```python
for i in range(1, 5):
    print(i)
else:
    print("Loop is finished")
```

A. `1 2 3 4`  
B. `1 2 3 4 Loop is finished`  
C. `Loop is finished 1 2 3 4`  
D. `0 1 2 3 Loop is finished`

---

### Question 40
**Which of the following is the correct way to write a while loop that prints numbers from 1 to 5?**

A. 
```python
i = 1
while i < 6:
 print(i)
 i += 1
```

B. 
```python
while i <= 5:
 print(i)
 i += 1
```

C. 
```python
while i = 1 to 5:
 print(i)
 i += 1
```

D. 
```python
for i in range(1, 6):
 print(i)
```

---

### Question 41
**What is the output of the following code?**

```python
def my_func(x, y):
    return x * y

result = my_func(3, 4)
print(result)
```

A. 7  
B. 12  
C. 1  
D. 16

---

### Question 42
**Which of the following is true about Python variables?**

A. Variables need to be declared with a specific type.  
B. Variables in Python can change type after they have been set.  
C. A variable cannot store string values.  
D. Variables are used to store code.

---

### Question 43
**Why is NumPy preferred over traditional Python lists for scientific computing?**

A. NumPy provides support for complex numbers only.  
B. NumPy arrays have a fixed size.  
C. NumPy arrays are more memory efficient and faster for operations.  
D. NumPy does not support multi-dimensional arrays.

---

### Question 44
**Which of the following is true about Python functions?**

A. Functions in Python do not support default argument values.  
B. Functions can only return one value.  
C. A function is defined using the `def` keyword.  
D. Anonymous functions are defined using the `func` keyword.

---

### Question 45
**What data type would you use to store a sequence of characters in Python?**

A. Integer  
B. Float  
C. String  
D. Boolean

---

### Question 46
**Which Python keyword is used for looping over a sequence?**

A. `if`  
B. `for`  
C. `while`  
D. `elif`

---

### Question 47
**What feature allows you to create lists in a single line in Python?**

A. For loops  
B. List comprehension  
C. Tuples  
D. Dictionaries

---

### Question 48
**To import a module named numpy, what is the correct syntax?**

A. `import 'numpy'`  
B. `import (numpy)`  
C. `import numpy`  
D. `module numpy`

---

### Question 49
**How do you select the first three items of a list named myList?**

A. `myList(0:3)`  
B. `myList[1:3]`  
C. `myList[0:3]`  
D. `myList[3]`

---

## Summary

- **Total Questions:** 49
- **Short Answer Questions:** 3 (Questions 1-3)
- **Multiple Choice Questions:** 46 (Questions 4-49)
