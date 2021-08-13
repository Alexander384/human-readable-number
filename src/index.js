module.exports = function toReadable (number) {
  const a = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const b = ['', '', 'twenty ','thirty ','forty ','fifty ', 'sixty ','seventy ','eighty ','ninety '];
  const c = ['', 'thousand'];
  let text = '';

  for (let i = 0; i < c.length; i++) {      
    let tempNumber = number%(100*Math.pow(1000,i));
    if (Math.floor(tempNumber/Math.pow(1000,i)) !== 0) {
      if (Math.floor(tempNumber/Math.pow(1000,i)) < 20) {
        text = a[Math.floor(tempNumber/Math.pow(1000,i))] + c[i] + text;
      } else {
        text = b[Math.floor(tempNumber/(10*Math.pow(1000,i)))] + a[Math.floor(tempNumber/Math.pow(1000,i))%10] + c[i] + text;
      }
    }

    tempNumber = number%(Math.pow(1000,i+1));
    if (Math.floor(tempNumber/(100*Math.pow(1000,i))) !== 0) text = a[Math.floor(tempNumber/(100*Math.pow(1000,i)))] + ' hundred ' + text;

    if (number === 0) return 'zero'
  }
    return text.replace(/^\s+|\s+$/g, "");
}

