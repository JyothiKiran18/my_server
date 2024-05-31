function getTimestamp() {
    // Get the current date and time
    const now = new Date();

    // Format the date into a full timestamp string
    const timestamp = `${now.getFullYear()}-${padZero(now.getMonth() + 1)}-${padZero(now.getDate())} ${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}.${now.getMilliseconds()}${getTimezoneOffset()}`;

    return timestamp;
}

// Function to pad single digit numbers with a leading zero
function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}

// Function to get timezone offset
function getTimezoneOffset() {
    const offset = new Date().getTimezoneOffset();
    const sign = offset < 0 ? '+' : '-';
    const absOffset = Math.abs(offset);
    const hours = padZero(Math.floor(absOffset / 60));
    const minutes = padZero(absOffset % 60);
    return `${sign}${hours}:${minutes}`;
}

module.exports = getTimestamp;
