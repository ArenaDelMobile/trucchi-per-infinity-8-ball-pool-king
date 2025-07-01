/**
 * stringFormatter - Utility for String Formatting and Manipulation
 * Author: ArenaDelMobile
 * License: Custom
 */

const stringFormatter = {
    /**
     * Capitalizes the first letter of each word in a string.
     * @param {string} str - The string to format.
     * @returns {string}
     */
    toTitleCase(str) {
        if (typeof str !== 'string') return '';
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    },

    /**
     * Truncates a string to a maximum length and adds ellipsis if necessary.
     * @param {string} str - The string to truncate.
     * @param {number} maxLength - Maximum allowed length.
     * @returns {string}
     */
    truncate(str, maxLength) {
        if (typeof str !== 'string' || typeof maxLength !== 'number' || maxLength <= 0) {
            console.error('[stringFormatter] Invalid parameters.');
            return '';
        }
        return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
    },

    /**
     * Removes all extra spaces from a string.
     * @param {string} str - The string to clean.
     * @returns {string}
     */
    cleanSpaces(str) {
        if (typeof str !== 'string') return '';
        return str.replace(/\s+/g, ' ').trim();
    }
};

// Example usage:
// console.log(stringFormatter.toTitleCase('hello world from arenadelmobile')); // 'Hello World From Arenadelmobile'
// console.log(stringFormatter.truncate('This is a long sentence.', 10)); // 'This is a ...'
// console.log(stringFormatter.cleanSpaces('  Hello   world    ')); // 'Hello world'

module.exports = stringFormatter;
