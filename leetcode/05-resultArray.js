// Problems LeetCode
// Title: Distribute Elements Into Two Arrays I
// Difficulty: Easy
// Url: https://leetcode.com/problems/distribute-elements-into-two-arrays-i

const resultArray = (nums) => {
  // Anda diberikan sebuah array berindeks 1 dari bilangan bulat berbeda nums dengan panjang n.

  // Anda perlu mendistribusikan semua elemen dari nums antara dua array arr1 dan arr2 menggunakan n operasi.

  // Pada operasi pertama, buat variabel arr1 dan tambahkan nums[0] ke arr1:
  let arr1 = [nums[0]];
  // Pada operasi kedua, buat variabel arr2 dan tambahkan nums[1] ke arr2:
  let arr2 = [nums[1]];

  // Selanjutnya, pada operasi ke-i, menggunakan perulangan pada array nums:
  for (let i = 2; i < nums.length; i++) {
    // Jika elemen terakhir dari arr1 lebih besar dari elemen terakhir dari arr2,
    if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
      // jika benar, tambahkan nums[i] ke arr1.
      arr1.push(nums[i]);
    } else {
      // Jika tidak, tambahkan nums[i] ke arr2.
      arr2.push(nums[i]);
    }
  }
  // Array hasil terbentuk dengan menggabungkan array arr1 dan arr2.
  // Sebagai contoh, jika arr1 == [1,2,3] dan arr2 == [4,5,6], maka hasil = [1,2,3,4,5,6].

  // Kembalikan array hasil.
  return [...arr1, ...arr2];
};

console.log(resultArray([2, 1, 3]));
