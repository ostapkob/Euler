class p_002 {
  static double fib(int n) {
    double x = 0;
    double y = 1;
    double tmp;
    for (int i = 0; i < n; i++) {
      tmp = x;
      x = y;
      y += tmp;
    }
    return y;
  }

  public static void main(String[] args) {
    double[] arr = new double[1000];
    for (int i = 1; i < arr.length; i++) {
      arr[i] = fib(i);
    }

    double total = 0;
    for (double el : arr) {
      if (el % 2 == 0) {
        total += el;
        // System.out.println(el);
      }
    }

    System.out.println(total);
  }
}
