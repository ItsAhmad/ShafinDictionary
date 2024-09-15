import dictionary.json

# Get user input
user_input = input("Enter a word: ")

# Check if the word is in the dictionary
if user_input in word_dict:
  print(f"The definition of {user_input} is: {word_dict[user_input]}")
else:
  print(f"The word {user_input} is not in the dictionary.")