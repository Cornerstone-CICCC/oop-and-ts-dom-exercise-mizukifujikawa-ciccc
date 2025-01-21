class Calculator {
    constructor() {
        this.num1InputElement = document.querySelector('#num1');
        this.num2InputElement = document.querySelector('#num2');
        this.operationElement = document.querySelector('#operation');
        this.calculateBtnElement = document.querySelector('#calculateBtn');
        this.resultElement = document.querySelector('#result');

        this.calculateBtnElement.addEventListener('click', () => this.compute());
    }

    add(num1, num2) {
        this.result = Number(num1) + Number(num2);
    }
    subtract(num1, num2) {
        this.result = num1 - num2;
    }
    multiply(num1, num2) {
        this.result = num1 * num2;
    }
    divide(num1, num2) {
        this.result = num1 / num2;
    }
    compute() {
        const num1 = this.num1InputElement.value;
        const num2 = this.num2InputElement.value;
        const operation = this.operationElement.value;
        if (operation === 'add') {
            this.add(num1, num2);
        }
        else if (operation === 'subtract') {
            this.subtract(num1, num2);
        }
        else if (operation === 'multiply') {
            this.multiply(num1, num2);
        }
        else if (operation === 'divide') {
            this.divide(num1, num2);
        }
        this.render();
    }
    render() {
        this.resultElement.innerHTML = '';
        this.resultElement.innerHTML = `${this.result}`
    }
}
  document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator()
  })