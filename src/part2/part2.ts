import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels: (s: string) => number = (s) => {
    const lowerArr: string[] = stringToArray(s.toLowerCase());
    const vowelsArr: string[] = lowerArr.filter((ch: string): boolean => (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'));
    return vowelsArr.length;
};

/* Question 2 */
export const runLengthEncoding = undefined;

/* Question 3 */
export const isPaired = undefined;