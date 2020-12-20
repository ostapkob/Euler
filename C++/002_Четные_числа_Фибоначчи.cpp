#include<iostream>  
#include <time.h>
#include <math.h>  

using namespace std; 
  
double fib(int n) {
  double x = 0;
  double y = 1;
  double tmp = 0;
  for (int i=0; i<n; i++) {
    tmp = x;
    x = y;
    y += tmp;
  }
  return y;
}


int main() 
{ 
  clock_t start, end;
  start = clock();

  int len = 1000;
  int ls[len];
  for (int i=0; i<len; i++) {
    ls[i] = i;
  }
  long double total = 0;
  long double res;
  for (int i=0; i<len; i++) {
    res = fib(i);
    if (!fmod(res, 2)) {
      total += res;
      /* cout<< i << " " << res << endl; */ 
    }
  }
  end = clock();
  cout << total << endl;
  cout << (end - start) / ((double) CLOCKS_PER_SEC) ;


  return 0; 
} 
