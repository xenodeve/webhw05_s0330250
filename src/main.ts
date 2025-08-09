import { initTheme } from './theme';

const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const calcBtn = document.getElementById("calculate") as HTMLButtonElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

// Initialize theme functionality
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
});

calcBtn.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    const op = (document.querySelector('input[name="op"]:checked') as HTMLInputElement)?.value;

    let result: number;

    switch (op) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "mul":
            result = num1 * num2;
            break;
        case "div":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("ไม่สามารถหารด้วยศูนย์ได้");
                return;
            }
            break;
        default:
            alert("กรุณาเลือกการดำเนินการ");
            return;
    }

    resultDiv.textContent = result.toString();
});