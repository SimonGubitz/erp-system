export const validateIDLink = (id, referenceArray : any[]) => {
    return referenceArray.some(item => item.id === id);
};

export const validateDate = (dateString : string) => {
    return !isNaN(Date.parse(dateString));
};