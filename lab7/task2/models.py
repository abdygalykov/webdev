class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return "Some generic animal sound"

    def info(self):
        return f"{self.name} is {self.age} years old."

    def __str__(self):
        return f"{self.species}: {self.name}, {self.age} years old"


class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def speak(self):
        return "woof woof"

    def fetch(self):
        return f"{self.name} is fetching the ball!"


class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, "Cat")
        self.color = color

    def speak(self):
        return "meow"

    def climb(self):
        return f"{self.name} climbs the tree!"
    
class Hamster(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, "Hamster")
        self.color = color

    def speak(self):
        return "squeak"

    def run_in_wheel(self):
        return f"{self.name} is running in the wheel!"
    
class Parrot(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, "Parrot")
        self.color = color

    def speak(self):
        return "squawk"

    def fly(self):
        return f"{self.name} is flying in the sky!"