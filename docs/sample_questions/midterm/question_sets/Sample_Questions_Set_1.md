# ABT HYD 182 Midterm Sample Questions - Set 1

---

## Multiple Choice Questions

### Question 1
**What is the output of the following code?**

```python
x = 7
y = 3
print(x % y)
```

A. 2.33  
B. 1  
C. 2  
D. 0

---

### Question 2
**Which of the following correctly removes an element from a list named `data`?**

A. `data.remove(element)`  
B. `data.delete(element)`  
C. `data.pop(element)`  
D. `data.erase(element)`

---

### Question 3
**What will be the result of the following code?**

```python
numbers = [10, 20, 30, 40, 50]
print(numbers[-2])
```

A. 30  
B. 40  
C. 50  
D. IndexError

---

### Question 4
**Which of the following is the correct way to check if a key exists in a dictionary `my_dict`?**

A. `if key in my_dict:`  
B. `if my_dict.has_key(key):`  
C. `if my_dict.contains(key):`  
D. `if my_dict[key] exists:`

---

### Question 5
**What is the output of the following code?**

```python
result = [x*2 for x in range(5) if x % 2 == 0]
print(result)
```

A. `[0, 2, 4, 6, 8]`  
B. `[0, 4, 8]`  
C. `[2, 4, 6, 8]`  
D. `[0, 2, 4]`

---

### Question 6
**Which of the following statements about Python dictionaries is FALSE?**

A. Dictionary keys must be immutable types.  
B. Dictionary values can be of any type.  
C. Dictionaries maintain insertion order (Python 3.7+).  
D. Dictionary keys can be lists.

---

### Question 7
**What will be printed by the following code?**

```python
text = "Python"
print(text[1:4])
```

A. `yth`  
B. `Pyth`  
C. `ytho`  
D. `Pyt`

---

### Question 8
**Which method is used to get the number of elements in a list named `my_list`?**

A. `my_list.count()`  
B. `my_list.length()`  
C. `len(my_list)`  
D. `my_list.size()`

---

### Question 9
**What is the output of the following code?**

```python
def calculate(a, b=5):
    return a * b

result = calculate(3)
print(result)
```

A. 8  
B. 15  
C. Error: missing required argument  
D. 3

---

### Question 10
**Which of the following will create an empty dictionary?**

A. `dict = []`  
B. `dict = {}`  
C. `dict = ()`  
D. `dict = None`

---

### Question 11
**What does the following code output?**

```python
values = [1, 2, 3, 4, 5]
sliced = values[2:4]
print(sliced)
```

A. `[3, 4]`  
B. `[2, 3]`  
C. `[3, 4, 5]`  
D. `[2, 3, 4]`

---

### Question 12
**Which of the following is NOT a valid way to create a tuple?**

A. `t = (1, 2, 3)`  
B. `t = 1, 2, 3`  
C. `t = tuple([1, 2, 3])`  
D. `t = [1, 2, 3]`

---

### Question 13
**What is the result of the following code?**

```python
x = "10"
y = 5
print(x + str(y))
```

A. `15`  
B. `105`  
C. `10 5`  
D. `TypeError`

---

### Question 14
**Which Pandas method is used to get basic statistical information about a DataFrame?**

A. `df.summary()`  
B. `df.describe()`  
C. `df.stats()`  
D. `df.analyze()`

---

### Question 15
**What will be the output of the following code?**

```python
count = 0
for i in range(3):
    count += i
print(count)
```

A. 0  
B. 3  
C. 6  
D. 9

---

### Question 16
**What is the output of the following code?**

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
result = [row[1] for row in matrix]
print(result)
```

A. `[2, 5, 8]`  
B. `[1, 4, 7]`  
C. `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`  
D. `[1, 2, 3, 4, 5, 6, 7, 8, 9]`

---

### Question 17
**What will be printed by the following code?**

```python
data = {'a': 1, 'b': 2, 'c': 3}
result = [k + str(v) for k, v in data.items() if v > 1]
print(result)
```

A. `['b2', 'c3']`  
B. `['a1', 'b2', 'c3']`  
C. `['b', 'c']`  
D. `[2, 3]`

---

### Question 18
**What is the output of the following code?**

```python
def process(x, y=[]):
    y.append(x)
    return y

result1 = process(1)
result2 = process(2)
print(result2)
```

A. `[2]`  
B. `[1, 2]`  
C. `[1]`  
D. `[]`

---

### Question 19
**What does the following code output?**

```python
numbers = [1, 2, 3, 4, 5]
result = [x for x in numbers if x % 2 == 0] + [x*2 for x in numbers if x % 2 != 0]
print(result)
```

A. `[2, 4, 2, 6, 10]`  
B. `[1, 2, 3, 4, 5, 2, 4, 6, 8, 10]`  
C. `[2, 4, 2, 4, 6]`  
D. `[2, 4, 6, 8, 10]`

---

### Question 20
**What will be the result of the following code?**

```python
nested = [[1, 2], [3, 4], [5, 6]]
flattened = [item for sublist in nested for item in sublist]
print(flattened)
```

A. `[[1, 2], [3, 4], [5, 6]]`  
B. `[1, 2, 3, 4, 5, 6]`  
C. `[1, 3, 5]`  
D. `[2, 4, 6]`

---

## Summary

- **Total Questions:** 20
- **Question Type:** Multiple Choice
- **Topics Covered:** Python basics, data structures, control flow, functions, list comprehensions, string operations, Pandas
