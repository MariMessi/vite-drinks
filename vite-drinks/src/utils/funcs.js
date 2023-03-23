

export const valuesExtractor = (obj, key) => {
    const objEntries = Object.entries(obj);
    const filteredObjEntries = objEntries.filter(
        (value) => value[0].includes(key) && value [1]
    );
    const values = filteredObjEntries.map((item) => item[1]);
    
    return values;
};