`(Scanner)` is only used to represent the scanner.

If you want to import the scanner for user input, use:

```java
import java.util.Scanner;
```

Before the `Main` or `Program` class. Then create a new `scanner` in the class.

```java
public class Program {
  public static void main(String[] args) {
    Scanner input /*Or any other name*/ = new Scanner(System.in);
  }
}
```

---

`(Scanner).nextBoolean()`: Reads a boolean value from the user

`(Scanner).nextByte()`: Reads a byte value from the user

`(Scanner).nextDouble()`: Reads a double value from the user

`(Scanner).nextFloat()`: Reads a float value from the user

`(Scanner).nextInt()`: Reads a int value from the user

`(Scanner).nextLine()`: Reads a String value from the user

`(Scanner).nextLong()`: Reads a long value from the user

`(Scanner).nextShort()`: Reads a short value from the user
