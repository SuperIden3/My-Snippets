/*
  Got this idea from https://www.geeksforgeeks.org/scanner-class-in-java/, with a few modifications.
*/

import java.util.Scanner;
public class Program {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        float sum = 0, count = 0;
        while (input.hasNextFloat()){
            float num = input.nextFloat();
            sum += num;
            count++;
        }
        System.out.println("Average: " + sum / count);
    }
}
