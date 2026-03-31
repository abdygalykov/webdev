from models import Animal, Dog, Cat, Hamster, Parrot

def main():
    dog = Dog("Bobik", 5, "ALabai")
    cat = Cat("Kotik", 2, "Grey")
    hamster = Hamster("Hammy", 1, "Golden")
    parrot = Parrot("Polly", 3, "Green")
    animal = Animal("Generic", 5, "Unknown")

    animals = [dog, cat, hamster, parrot, animal]

    for method in animals:
        print(method)             
        print(method.info())       
        print(method.speak())    
        print()

    print(hamster.speak())
    print(hamster.run_in_wheel())

if __name__ == "__main__":
    main()