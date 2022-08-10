function solution(number, k) {
const arr = [];

  for (let i = 0; i < number.length; i++) {
    const num = number[i];

    while (k > 0 && arr[arr.length - 1] < num) {
      arr.pop();
      k--;
    }

    arr.push(num);
  }

  arr.splice(arr.length - k, k);

  return arr.join('');
}
