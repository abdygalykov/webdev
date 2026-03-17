from model1 import Character, Warrior, Mage, Archer

def main():
    warrior = Warrior("Conan", 100, 20)
    mage = Mage("Gandalf", 80, 20)
    archer = Archer("Legolas", 90, 15)
    characters = [warrior, mage, archer]
    
    for c in characters:
        print(f"{c.name} has {c.health} health.")
        
    print("-- Battle Begins --")
    warrior.attack(mage)
    mage.attack(warrior)
    archer.attack(warrior)

    print(f"{warrior.name} has {warrior.health} health left.")
    print(f"{mage.name} has {mage.health} health left.")
    print(f"{archer.name} has {archer.health} health left.")
    print(f"{mage.name} has {mage.mana} mana left.")
    print(f"{warrior.name} is alive: {warrior.is_alive()}")
    print(f"{mage.name} is alive: {mage.is_alive()}")
    print(f"{archer.name} is alive: {archer.is_alive()}")
    print()
    
    print("-- Battle Ends --")

if __name__ == "__main__":
    main()