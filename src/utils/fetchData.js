export const exerciseOptions = {
    method: 'GET',

    headers: {
        'X-RapidAPI-Key': 'd2c99ba0c2msh1b7ec6d1bd2ff33p179f2cjsn7595654e19bd',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};




export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}