function getElementWidth(content, padding, border) {
  let boxsize = ` ${content} + (${padding} + ${border}) * 2 `;
  console.log((message = boxsize));
  return message;
}
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
