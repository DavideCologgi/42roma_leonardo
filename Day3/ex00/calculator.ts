function calculate() {
    const fnumInput: HTMLInputElement = document.getElementById('fnum') as HTMLInputElement;
    const snumInput: HTMLInputElement = document.getElementById('snum') as HTMLInputElement;
    const operationSelect: HTMLSelectElement = document.getElementById('operation') as HTMLSelectElement;
    const resultParagraph: HTMLParagraphElement = document.getElementById('result') as HTMLParagraphElement;
  
    const fnum: number = parseInt(fnumInput.value);
    const snum: number = parseInt(snumInput.value);
    const operation: string = operationSelect.value;
  
    let result: number;
  
    if (operation === '+') {
      result = fnum + snum;
    } else if (operation === '-') {
      result = fnum - snum;
    } else if (operation === '*') {
      result = fnum * snum;
    } else if (operation === '/') {
      result = fnum / snum;
    } else {
      result = NaN;
    }
  
    resultParagraph.textContent = isNaN(result) ? 'Invalid operation' : `Result: ${result}`;
  }