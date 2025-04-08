export const truncateText = (text, numWords=20) => {
    const textArray = text.split(" ");
    if (textArray.length <= numWords){
        return text
    } else {
        return textArray.splice(0, numWords).join(" ") + "...";
    }
};