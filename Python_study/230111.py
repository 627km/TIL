# Fibonacci Sequence with Recursion
def fibonacci(i:int) -> int:
  if i < 2:
    return i
  else:
    return fibonacci(i-1) + fibonacci(i-2)

# Binet's Fibonacci formula
from math import sqrt

def binet(n:int) -> int:
  result = int(((1+sqrt(5))**n-(1-sqrt(5))**n)/(2**n*sqrt(5)))
  return result

# run time check
# Recursion
s_time = time()
fibonacci(35)
e_time = time()
fibo_time = e_time - s_time
print(fibo_time)

# Binet
s_time = time()
binet(35)
e_time = time()
fibo_time = e_time - s_time
print(fibo_time)

# Fizzbuzz use comprehension
## fizzbuzz list
num_range = [i for i in range(1,30+1)]

## List Comprehension
fb_list = []
fb_list = [
    'fizzbuzz' if i%15==0 else
    'fizz' if i%3==0 else
    'buzz' if i%5==0 else
    i for i in num_range
    ]
fb_list
