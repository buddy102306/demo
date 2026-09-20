// 1. ENCAPSULATION
class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    console.log(`[Encapsulation] Balance: $${this.#balance}`);
  }
}

// 2. ABSTRACTION
class EmailService {
  send() {
    this.#connect();
    console.log('[Abstraction] Email Sent!');
  }
  #connect() { console.log('[Abstraction] Connecting...'); }
}

// 3. INHERITANCE
class Vehicle {
  drive() { console.log('[Inheritance] Driving...'); }
}
class Car extends Vehicle {}

// 4. POLYMORPHISM
class Notification {
  send() { console.log('[Polymorphism] Generic notification'); }
}
class SMS extends Notification {
  send() { console.log('[Polymorphism] SMS alert'); }
}

// EXECUTION TEST
console.log('--- RUNNING ALL 4 ---');

const acc = new BankAccount();
acc.deposit(100);

const mailer = new EmailService();
mailer.send();

const car = new Car();
car.drive();

const alert = new SMS();
alert.send();