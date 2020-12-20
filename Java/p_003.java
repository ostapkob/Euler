// Простые делители числа 13195 - это 5, 7, 13 и 29.
// Каков самый большой делитель числа 600851475143, являющийся простым числом?

class p_003 {
    static boolean isSimple(int n) {
        int x=3;
        while (x*x <= n) {
            x+=2;
            if (n % x == 0) {
                return false;
            }
        }
        return true;
    }


    static int maxSimpleDivider(int n) {
        for (int i=n; i>0; i--) {
            if (isSimple(i)) {
                if (n % i ==0) {
                    return i;
                }
            }
        }
        return n;
    }

    public static void main(String[] args) {
        System.out.println(maxSimpleDivider(13195));
    }
}