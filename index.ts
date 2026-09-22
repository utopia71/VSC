import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1: number = 0;
let num2: number = 0;

function showMenu(): void {
    console.log('\n--- МЕНЮ ---');
    console.log('1. Ввести два числа');
    console.log('2. Выполнить сложение');
    console.log('3. Выполнить вычитание');
    console.log('4. Выполнить деление');
    console.log('5. Возвести число в степень');
    console.log('0. Выход');
    
    rl.question('Выберите пункт меню: ', (choice) => {
        switch (choice.trim()) {
            case '1':
                inputNumbers();
                break;
            case '2':
                console.log('Функция сложения еще не реализована.');
                showMenu();
                break;
            case '3':
                subNumbers();
                break;
            case '4':
                console.log('Функция деления еще не реализована.');
                showMenu();
                break;
            case '5':
                console.log('Функция возведения в степень еще не реализована.');
                showMenu();
                break;
            case '0':
                rl.close();
                break;
            default:
                console.log('Неверный пункт, попробуйте снова.');
                showMenu();
        }
    });
}

function inputNumbers(): void {
    rl.question('Введите первое число: ', (ans1) => {
        rl.question('Введите второе число: ', (ans2) => {
            num1 = parseFloat(ans1);
            num2 = parseFloat(ans2);
            console.log(`Числа сохранены: num1 = ${num1}, num2 = ${num2}`);
            showMenu();
        });
    });
}
function subNumbers(): void {
    console.log(`Разница чисел: ${num1 - num2}`);
    showMenu();
}
showMenu();