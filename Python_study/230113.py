import json

# dict -> DataFrame -> csv
users = [{
        'name':'John',
        'age':25,
        'locale':'LA'
    },
    {
        'name':'Jane',
        'age':21,
        'locale':'London'
    },
    {
        'name':'Tom',
        'age':20,
        'locale':'CA'
    },
]

df = df.from_dict(users)

df.to_csv('./user.csv')

with open('./user.csv') as f:
  for line in f.readlines():
    print(line)

with open('user.json','w') as f:
  user_dict = {}
  user_dict.setdefault('users', []).append({
      'name': 'John Doe',
      'age': 40, 
      'locale': 'CA, USA'
  })
  json.dump(user_dict, f)