public class p_004 {
    static String revers(String str) {
        for (int i=str.length(); i>0; i--) {
            System.out.println(str(i));
        }
        return "rrr";
    }
    static boolean isPalindrome(int n) {
        String str = String.valueOf(n);
        int center = 1;
        if (str.length() % 2 == 0) {
            center = str.length() / 2;
        }
        else {
            return false;
        }
        String part1 = str.substring(0, center);
        String part2 = str.substring(center, str.length());
        if (part1 == part2) {
            return true;
        }
        return false;
    }

    public static void main(String[] args) {
        isPalindrome(123456);
    }
}
