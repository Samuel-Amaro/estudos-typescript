export function twoFer(name: string = "you"): string {
    if(name.toLowerCase() !== "you")
        return `One for ${name}, one for me.`;
    return "One for you, one for me.";
}