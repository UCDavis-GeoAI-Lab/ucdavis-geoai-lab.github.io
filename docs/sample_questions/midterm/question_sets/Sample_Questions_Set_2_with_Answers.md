# ABT HYD 182 Midterm Sample Questions - Set 2 (With Answers)

---

## Multiple Choice Questions

### Question 1
**What is the output of the following code?**

```python
a = 15
b = 4
print(a // b)
```

A. 3.75  
**B. 3 ✓**  
C. 4  
D. 3.0

---

### Question 2
**Which of the following correctly inserts an element at a specific index in a list named `items`?**

**A. `items.insert(index, element)` ✓**  
B. `items.add(index, element)`  
C. `items.put(index, element)`  
D. `items[index] = element`

---

### Question 3
**What will be printed by the following code?**

```python
data = ['a', 'b', 'c', 'd', 'e']
print(data[1:-1])
```

**A. `['b', 'c', 'd']` ✓**  
B. `['a', 'b', 'c', 'd']`  
C. `['b', 'c', 'd', 'e']`  
D. `['a', 'b', 'c']`

---

### Question 4
**Which of the following methods returns a default value if a key is not found in a dictionary?**

A. `dict[key]`  
**B. `dict.get(key, default)` ✓**  
C. `dict.find(key, default)`  
D. `dict.retrieve(key, default)`

---

### Question 5
**What is the output of the following list comprehension?**

```python
squares = [x**2 for x in range(1, 6) if x > 2]
print(squares)
```

A. `[1, 4, 9, 16, 25]`  
**B. `[9, 16, 25]` ✓**  
C. `[4, 9, 16, 25]`  
D. `[1, 4, 9, 16]`

---

### Question 6
**Which of the following is TRUE about Python sets?**

A. Sets are ordered collections.  
B. Sets can contain duplicate elements.  
**C. Sets are mutable and can contain only immutable elements. ✓**  
D. Sets use square brackets for definition.

---

### Question 7
**What will be the result of the following code?**

```python
word = "GIS"
print(word * 2)
```

**A. `GISGIS` ✓**  
B. `GIS GIS`  
C. `GIS2`  
D. `TypeError`

---

### Question 8
**Which function is used to find the maximum value in a list named `numbers`?**

A. `numbers.max()`  
**B. `max(numbers)` ✓**  
C. `numbers.maximum()`  
D. `maximum(numbers)`

---

### Question 9
**What is the output of the following code?**

```python
def multiply(x, y=2, z=3):
    return x * y * z

result = multiply(2)
print(result)
```

A. 6  
B. 12  
**C. 18 ✓**  
D. Error: missing required argument

---

### Question 10
**Which of the following creates a list with 5 zeros?**

**A. `[0] * 5` ✓**  
B. `list(5)`  
C. `[0 for i in 5]`  
D. `zeros(5)`

---

### Question 11
**What does the following code output?**

```python
nums = [10, 20, 30, 40]
result = nums[::2]
print(result)
```

**A. `[10, 30]` ✓**  
B. `[20, 40]`  
C. `[10, 20, 30, 40]`  
D. `[10, 40]`

---

### Question 12
**Which statement is TRUE about tuples in Python?**

A. You can modify tuple elements after creation.  
B. Tuples use curly braces for definition.  
**C. Tuples can contain duplicate values. ✓**  
D. Tuples are faster than lists for all operations.

---

### Question 13
**What is the result of the following code?**

```python
num = 25
text = "The number is: "
print(text + str(num))
```

**A. `The number is: 25` ✓**  
B. `The number is:25`  
C. `TypeError`  
D. `25`

---

### Question 14
**Which Pandas method is used to display the first few rows of a DataFrame?**

A. `df.first()`  
**B. `df.head()` ✓**  
C. `df.preview()`  
D. `df.show()`

---

### Question 15
**What will be the output of the following code?**

```python
total = 0
i = 1
while i < 5:
    total += i
    i += 1
print(total)
```

**A. 10 ✓**  
B. 6  
C. 15  
D. 4

---

### Question 16
**What is the output of the following code?**

```python
data = [1, 2, 3, 4, 5]
result = [x**2 if x % 2 == 0 else x*3 for x in data]
print(result)
```

**A. `[3, 4, 9, 16, 15]` ✓**  
B. `[1, 4, 9, 16, 25]`  
C. `[3, 4, 9, 16, 25]`  
D. `[1, 2, 3, 4, 5]`

---

### Question 17
**What will be printed by the following code?**

```python
my_dict = {'x': [1, 2], 'y': [3, 4], 'z': [5, 6]}
result = [my_dict[key][0] for key in sorted(my_dict.keys())]
print(result)
```

**A. `[1, 3, 5]` ✓**  
B. `[1, 2, 3, 4, 5, 6]`  
C. `['x', 'y', 'z']`  
D. `[0, 0, 0]`

---

### Question 18
**What is the output of the following code?**

```python
def modify_list(lst, value):
    lst.append(value)
    return lst

original = [1, 2, 3]
new_list = modify_list(original, 4)
print(original)
```

A. `[1, 2, 3]`  
**B. `[1, 2, 3, 4]` ✓**  
C. `[4]`  
D. `[]`

---

### Question 19
**What does the following code output?**

```python
text = "PythonGIS"
result = [char.upper() if i % 2 == 0 else char.lower() for i, char in enumerate(text)]
print(''.join(result))
```

A. `PYTHONGIS`  
B. `pythonGIS`  
C. `PyThOnGiS`  
**D. `pYtHoNgIs` ✓**

---

### Question 20
**What will be the result of the following code?**

```python
numbers = [10, 20, 30, 40, 50]
filtered = [x for x in numbers if x > 25]
doubled = [x*2 for x in filtered]
print(doubled)
```

A. `[30, 40, 50]`  
**B. `[60, 80, 100]` ✓**  
C. `[20, 40, 60, 80, 100]`  
D. `[10, 20, 30, 40, 50]`

---

## Summary

- **Total Questions:** 20
- **Question Type:** Multiple Choice
- **Topics Covered:** Python basics, data structures, control flow, functions, list comprehensions, string operations, Pandas
