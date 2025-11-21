export const formatTime = (time) => {
    const date = new Date(time);

    const formattedTime = date.toLocaleString('en-US', {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    const formattedDate = date.toLocaleDateString('en-GB');

    return `${formattedTime} - ${formattedDate}`;
}