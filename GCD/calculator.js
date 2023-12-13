function calculateGCD() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);

  const gcd = findGCD(num1, num2);

  document.getElementById(
    "result"
  ).innerText = `GCD of ${num1} and ${num2} is: ${gcd}`;
}

function findGCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return findGCD(b, a % b);
  }
}
