function convertMinutesToHours(minutes: number) {
    if (minutes % 60 === 0) {
        return Math.floor(minutes / 60);
    } else {
        return `${Math.floor(minutes / 60)}:${minutes % 60}`;
    }
}

export default convertMinutesToHours;
