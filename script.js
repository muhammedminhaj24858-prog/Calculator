document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttonsContainer = document.querySelector('.buttons');

    buttonsContainer.addEventListener('click', event => {
        if (!event.target.matches('button')) {
            return;
        }

        const button = event.target;
        const action = button.textContent;

        if (display.value === 'Error') {
            display.value = '';
        }

        switch(action) {
            case 'C':
                display.value = '';
                break;
            case '=':
                try {
                    // Sanitize the input to prevent security issues with eval
                    const sanitizedInput = display.value.replace(/[^-+/*.\d]/g, '');
                    if (sanitizedInput) {
                        display.value = eval(sanitizedInput);
                    } else {
                        display.value = '';
                    }
                } catch (error) {
                    display.value = 'Error';
                }
                break;
            default:
                display.value += action;
                break;
        }
    });
});
