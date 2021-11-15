import axios from "axios"

// Country Code
export const countryCode = (e) => { return { type: 'countryCode', value: e } }

// All Countries together
export const currentAll = (e) => { return { type: 'currentAll', value: e } }

// Specific Country (Current Data)
export const currentCountriesC = (e) => { return { type: 'currentCountriesC', value: e } }

// Specific Coutry (Historical 30days)
export const historyCountriesC = (e) => { return { type: 'historyCountriesC', value: e } }

/* ------------------------------------------------------------------------------------------------------------------------------------- */

// Gets the Country Code
export const getCountryCode = (countryName) => {
    return function (dispatch) {
        axios.get(`https://restcountries.com/v3/name/${countryName}`)

            .then(res => {
                console.log(res.data[0].cca2);
                dispatch(countryCode(res.data[0].cca2));
            })
            .catch(e => {
                console.error(e);
            })
    }
}

// Gets data for all countries
export const getCurrentAll = () => {
    return function (dispatch) {
        axios.get(`https://disease.sh/v3/covid-19/all`)
            .then(res => {
                console.log(res.data);
                dispatch(currentAll(res.data));
            })
            .catch(e => {
                console.error(e);
            })
    }
}

// Gets All current data from a specific country
export const getCurrentCountriesC = (countryCode) => {
    return function (dispatch) {
        axios.get('https://disease.sh/v3/covid-19/countries/' + countryCode)
            .then(res => {
                console.log(res.data);
                dispatch(currentCountriesC(res.data));
            })
            .catch(e => {
                console.error(e);
            })
    }
}

// Gets All historical data for a specific country's 
export const getHistoryCountriesC = (countryCode) => {
    return function (dispatch) {
        axios.get(`https://disease.sh/v3/covid-19/historical/${countryCode}?lastdays=30`)
            .then(res => {

                const obj = {
                    country: '',
                    cases: [],
                    deaths: [],
                    recovered: []
                }

                let timeline = res.data.timeline;

                obj.country = res.data.country;
                obj.cases = Object.entries(timeline.cases).map(entry => `${entry[0]} ${entry[1]}`);
                obj.deaths = Object.entries(timeline.deaths).map(entry => `${entry[0]} ${entry[1]}`);
                obj.recovered = Object.entries(timeline.recovered).map(entry => `${entry[0]} ${entry[1]}`);

                dispatch(historyCountriesC(obj))
            })
            .catch(e => {
                console.error(e);
            })
    }
}