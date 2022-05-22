export const copy = async (text : string) : void => {
    await navigator.clipboard.writeText(text);
}
