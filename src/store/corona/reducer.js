// Object
export const coronaAllData = {

    // All Countries
    currentAll: {},                         // GET - /v3/covid-19/all
    allVaccineCoverage: {},                 // GET - /v3/covid-19/vaccine/coverage?lastdays=1

    // Specific Country
    currentCountriesC: {},                  // GET - /v3/covid-19/countries/{Coutry name}
    historyCountriesC: {},                  // GET - /v3/covid-19/historical/{Country name}?lastdays=30

    // Specific Country Vaccine Coverage
    countryVaccineCoverage: {},             // GET - /v3/covid-19/vaccine/coverage/countries/{Country name}?lastdays=1
    historicalCountryVaccineCoverage: {}    // GET - /v3/covid-19/vaccine/coverage/countries/{Country name}?lastdays=30
}
// --------------------------------------------------

// Reducer
const reducer = (state = coronaAllData, action) => {
    switch (action.type) {

        // All Countries -------------------------------------
        case 'currentAll':
            return { ...state, currentAll: action.value };
        case 'allVaccineCoverage':
            return { ...state, allVaccineCoverage: action.value };

        // Specific Country -------------------------------------
        case 'currentCountriesC':
            return { ...state, currentCountriesC: action.value };
        case 'historyCountriesC':
            return { ...state, historyCountriesC: action.value };

        // Specific Country Vaccine Coverage -------------------------------------
        case 'countryVaccineCoverage':
            return {...state, countryVaccineCoverage: action.value};
        case 'historicalCountryVaccineCoverage':
            return {...state, historicalCountryVaccineCoverage: action.value};
        default:
            return state;
        
    }
}
export default reducer;