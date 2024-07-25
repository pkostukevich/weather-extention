export const defineSign = (num: number): string => {
    if (num > 0) {
        return `+${num}`;
    }
    return num.toString();
}