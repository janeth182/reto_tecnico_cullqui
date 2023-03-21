import { Detail } from './dto/data-lcr.dto';
import { LctDataAccess } from '../builds/data-access';
const lctDataAccess = new LctDataAccess();
export class LcrService {
    async playLCR(detail: Detail): Promise<string> {
        console.log("Service");
        console.log(detail);
        const input = detail.input.trim().split('\n');
        let result = '';
        let j = 0;
        for (let i = 0; i < input.length; i++) {
            const [n, rolls] = input[i].trim().split(' ');

            if (n === '0') {
                break;
            }

            const chips = new Array(Number(n)).fill(3); // Initialize chips for each player
            let centerChips = 0;
            let currentPlayer = 0;
            let done = false;

            while (j < rolls.length && !done) {
                let diceToRoll = 3;
                if (chips[currentPlayer] < 3) {
                    diceToRoll = chips[currentPlayer];
                }

                for (let k = 0; k < diceToRoll; k++) {
                    const roll = rolls[j];

                    switch (roll) {
                        case 'L':
                            chips[currentPlayer]--;
                            chips[(currentPlayer + 1) % chips.length]++;
                            break;
                        case 'C':
                            chips[currentPlayer]--;
                            centerChips++;
                            break;
                        case 'R':
                            chips[currentPlayer]--;
                            chips[(currentPlayer + chips.length - 1) % chips.length]++;
                            break;
                        default:
                            break;
                    }
                    j++;
                }

                const remainingPlayers = chips.filter((chipCount) => chipCount > 0).length;
                if (remainingPlayers === 1) {
                    done = true;
                } else {
                    currentPlayer = (currentPlayer + 1) % chips.length;
                }
                if (remainingPlayers === 1) {
                    done = true;
                    result += `Game ${i + 1}:\n`;
                    for (let k = 0; k < chips.length; k++) {
                        const playerName = `Player ${k + 1}:`;
                        const chipCount = chips[k];
                        const isWinner = chipCount > 0 ? '(W)' : '';
                        result += `${playerName.padEnd(10, ' ')}${chipCount}${isWinner}\n`;
                    }
                    result += `Center:${centerChips}\n\n`;
                } else if (j === rolls.length) {
                    result += `Game ${i + 1}:\n`;
                    for (let k = 0; k < chips.length; k++) {
                        const playerName = `Player ${k + 1}:`;
                        const chipCount = chips[k];
                        const isCurrentPlayer = k === currentPlayer ? '(*)' : '';
                        result += `${playerName.padEnd(10, ' ')}${chipCount}${isCurrentPlayer}\n`;
                    }
                    result += `Center:${centerChips}\n\n`;
                }
            }
            console.log(result);
            await lctDataAccess.saveResult(detail, result);
            return result;
        }
    }
}