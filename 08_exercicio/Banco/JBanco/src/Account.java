import exceptions.AccountException;
import exceptions.InsufficientFundsException;
import exceptions.InvalidValueException;

public class Account {
    public int id;
    private String name;
    private double balance;

    public Account(Integer id, String name, double balance) throws InvalidValueException {
        this.id = id;
        this.name = name;
        if (balance < 0)
            throw new InvalidValueException("Saldo deve ser positivo!");
        this.balance = balance;
    }

    public Account(Integer id, String name) {
        this.id = id;
        this.name = name;
        this.balance = 0;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getBalance() {
        return this.balance;
    }

    public void setBalance(double balance) throws AccountException {
        this.balance = balance;
    }

    private boolean _canWithdraw(double amount) {
        double result = this.balance - amount;
        return result >= 0;
    }

    public void withdraw(double amount) throws InsufficientFundsException {
        if (!_canWithdraw(amount)) {
            throw new InsufficientFundsException("ERRO: Saldo Insuficiente");
        }
        this.balance -= amount;
    }

    public void deposit(double amount) {
        this.balance += amount;
    }

    public void transfer(Account destinAcc, double amount) throws InsufficientFundsException {
        this.withdraw(amount);
        destinAcc.deposit(amount);
    }

}
