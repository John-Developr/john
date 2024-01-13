// stringUtils.ts

// Capitalizes the first letter of a string
export const capitalizeFirstLetter = (str: string): string => {
    return ( `${str.charAt(0).toUpperCase()}${str.slice(1)}` );
};

export const stringReplacer = (toReplace: string, newStr: string, inputString: string): string => {
    const regex = new RegExp(toReplace, 'g'); // Create a regex pattern from 'toReplace' string with 'g' flag for global replacement
    return inputString.replace(regex, newStr); // Perform the replacement and return the modified string
};

// Other string-related utility functions can be added here
// For instance: truncateString, formatString, etc.