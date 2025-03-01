#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int countSetBits(int n) {
    int count = 0;
    while (n > 0) {
        count += (n & 1);
        n >>= 1;
    }
    return count;
}

int countSameBitNumbers(int n) {
    int setBitsN = countSetBits(n);
    int fN = 0;
    
    // Calculate f(N)
    int tempN = n;
    int bitPos = 0;
    while (tempN > 0) {
        if ((tempN & 1) == 0) {
            fN |= (1 << bitPos);
        }
        tempN >>= 1;
        bitPos++;
    }
    
    // Add remaining set bits to f(N)
    for (int i = bitPos; i < 31; ++i) {
        fN |= (1 << i);
    }
    
    int count = 0;
    for (int i = 1; i < fN; ++i) {
        if (i != n && countSetBits(i) == setBitsN) {
            count++;
        }
    }
    
    return count % (1000000000 + 7);
}

int main() {
    int n;
    cout << "Enter a positive integer N: ";
    cin >> n;
    
    int result = countSameBitNumbers(n);
    cout << "Number of integers with same set bits as N: " << result << endl;
    
    return 0;
}