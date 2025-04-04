function generateLottoNumbers() {
    let result = '';
    for (let i = 0; i < 5; i++) {
        let numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        let sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        result += `<div>게임 ${i + 1}: ` + sortedNumbers.map(num => `<span class="lotto-item">${num}</span>`).join(' ') + `</div>`;
    }
    document.querySelector('.numbers').innerHTML = result;
}