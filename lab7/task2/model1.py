class Character:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def attack(self, other):
        damage = 10
        other.health -= damage
        print(f"{self.name} attacks {other.name} for {damage} damage!")

    def is_alive(self):
        return self.health > 0

class Warrior(Character):
    def __init__(self, name, health, strength):
        super().__init__(name, health)
        self.strength = strength

    def attack(self, other):
        damage = self.strength * 2
        other.health -= damage
        print(f"{self.name} attacks {other.name} with a mighty strike for {damage} damage!")
    
class Mage(Character):
    def __init__(self, name, health, mana):
        super().__init__(name, health)
        self.mana = mana

    def attack(self, other):
        if self.mana >= 5:
            damage = 15
            other.health -= damage
            self.mana -= 5
            print(f"{self.name} casts a spell on {other.name} for {damage} damage!")
        else:
            print(f"{self.name} does not have enough mana to attack!")

class Archer(Character):
    def __init__(self, name, health, agility):
        super().__init__(name, health)
        self.agility = agility

    def attack(self, other):
        damage = self.agility * 1.5
        other.health -= damage
        print(f"{self.name} shoots an arrow at {other.name} for {damage} damage!")