export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const addThousandsSeparator = (num) => {
    if(num == null || isNaN(num))
        return "";
    const [int,fract] = num.toString().split(".");
    const format = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return fract ? `${format}.${fract}` : format;
}