class Calculator {
    constructor(displayId, containerId) {
        this.displayElement = document.getElementById(displayId)
        this.containerElement = document.getElementById(containerId)
        
        this.currentValue = ''
        this.previousValue = ''
        this.operator = undefined

        this.containerElement.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON') return
            this.handleInput(e.target.innerText)
        });
    }

    handleInput(input) {
        if (!isNaN(input) || input === '.') {
            this.appendNumber(input)
        } else if (['+', '-', '*', '/'].includes(input)) {
            this.setOperator(input)
        } else if (input === '=') {
            this.compute()
        } else if (input === 'C') {
            this.clear()
        } else if (input === 'DEL') {
            this.delete()
        }
    }

    appendNumber(number) {
        if (number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString()
        this.updateDisplay()
    }

    setOperator(op) {
        if (this.currentValue === '') return;
        if (this.previousValue !== '') this.compute()
        this.operator = op;
        this.previousValue = this.currentValue;
        this.currentValue = ''
    }

    compute() {
        let result;
        const prev = parseFloat(this.previousValue)
        const current = parseFloat(this.currentValue)
        if (isNaN(prev) || isNaN(current)) return

        switch (this.operator) {
            case '+': result = prev + current; break;
            case '-': result = prev - current; break;
            case '*': result = prev * current; break;
            case '/': result = current === 0 ? "Error" : prev / current; break
            default: return;
        }

        this.currentValue = result.toString()
        this.operator = undefined;
        this.previousValue = ''
        this.updateDisplay()
    }

    clear() {
        this.currentValue = ''
        this.previousValue = ''
        this.operator = undefined
        this.updateDisplay()
    }

    delete() {
        this.currentValue = this.currentValue.toString().slice(0, -1)
        this.updateDisplay()
    }

    updateDisplay() {
        this.displayElement.innerText = this.currentValue || '0';
    }
}


new Calculator('display', 'buttons');