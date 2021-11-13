function basicOp(a, b, c) {
  switch (a) {
    case "+":
      return b + c;

    case "-":
      return b - c;

    case "*":
      return b * c;

    case "/":
      return b / c;

    default:
      text = "I have never heard of that operator...";
  }
}//2.7
//console.log(basicOp("*",2,5));