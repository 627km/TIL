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
