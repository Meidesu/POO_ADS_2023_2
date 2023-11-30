import exceptions.InsufficientFundsException;
import exceptions.InvalidValueException;

public class App {
  public void run() throws InvalidValueException {
    Account mei = new Account(1, "Mei", -10);
  }
}

class Runner {
  public static void main(String[] args) throws InvalidValueException {
    App app = new App();
    app.run();
  }
}