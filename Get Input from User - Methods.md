`(Scanner)` is only used to represent the scanner.

If you want to import the scanner for user input, use:

```java
import java.util.Scanner;
```

Before the `Main` or `Program` class. Then create a new `Scanner` in the class.

```java
import java.util.Scanner;
public class Program {
  public static void main(String[] args) {
    Scanner input /*Or any other name*/ = new Scanner(System.in);
  }
}
```

If you want to use a template of mine, visit: https://github.com/SuperIden3/My-Snippets/blob/aa9e51df35ce1664c05d685d4e65cc99c38b64b3/Get%20Input%20from%20User%20-%20Template.java.

---

`(Scanner).nextBoolean()`: Reads a boolean value from the user

`(Scanner).nextByte()`: Reads a byte value from the user

`(Scanner).nextDouble()`: Reads a double value from the user

`(Scanner).nextFloat()`: Reads a float value from the user

`(Scanner).nextInt()`: Reads a int value from the user

`(Scanner).nextLine()`: Reads a String value from the user

`(Scanner).nextShort()`: Reads a short value from the user

---

`Float`s and `Double`s are the same thing, so you can use `(Scanner).nextDouble` or `(Scanner).nextFloat`, your choice.

---

`(Scanner).nextLong()`: Reads a long value from the user
