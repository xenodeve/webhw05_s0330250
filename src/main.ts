import { initTheme } from './theme';
import { toast } from './toast'; // Import toast for notifications

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = document.getElementById('num2') as HTMLInputElement;
const calcBtn = document.getElementById('calculate') as HTMLButtonElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;

// Initialize theme functionality
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
});

calcBtn.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    const op = (document.querySelector('input[name="op"]:checked') as HTMLInputElement)?.value;

    let result: number;

    if (isNaN(num1) || isNaN(num2)) {
        toast.warning('กรุณาระบุตัวเลข');
        return;
    }

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
                toast.warning('ไม่สามารถหารด้วยศูนย์ได้');
                return;
            }
            break;
        default:
            toast.warning('กรุณาเลือกการดำเนินการ');
            return;
    }

    resultDiv.textContent = result.toString();
    
    // Show success notification
    const operations = {
        'add': 'บวก',
        'sub': 'ลบ', 
        'mul': 'คูณ',
        'div': 'หาร'
    };
    const opName = operations[op as keyof typeof operations] || 'คำนวณ';
    toast.success(`✅ ${opName} เรียบร้อยแล้ว! ผลลัพธ์: ${result}`);
});