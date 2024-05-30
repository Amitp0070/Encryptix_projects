document.addEventListener('DOMContentLoaded', function () {
    const screen = document.getElementById('screen');
    const keys = document.querySelector('.calculator-key');

    keys.addEventListener('click', function (event) {
        const { target } = event;
        const { value } = target;

        if (!target.matches('button')) {
            return;
        }

        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                screen.value += ` ${value} `;
                break;
            case '=':
                try {
                    screen.value = eval(screen.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '*0.01'));
                } catch {
                    screen.value = 'Error';
                }
                break;
            case 'all-clear':
                screen.value = '';
                break;
            case 'cut':
                screen.value = screen.value.slice(0, -1);
                break;
            default:
                screen.value += value;
                break;
        }
    });
});
