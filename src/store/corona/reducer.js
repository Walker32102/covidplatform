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
    let time = state;
    switch (action.type) {

/*         case 'countryCode':
            time.countryCode = action.value;
            break;
 */
        // All Countries -------------------------------------
        case 'currentAll':
            time.currentAll = action.value;
            break;
        case 'allVaccineCoverage':
            time.allVaccineCoverage = action.value;
            break;

        // Specific Country -------------------------------------
        case 'currentCountriesC':
            time.currentCountriesC = action.value;
            break;
        case 'historyCountriesC':
            time.historyCountriesC = action.value;
            break;


        // Specific Country Vaccine Coverage -------------------------------------
        case 'countryVaccineCoverage':
            time.countryVaccineCoverage = action.value;
            break;
        case 'historicalCountryVaccineCoverage':
            time.historicalCountryVaccineCoverage = action.value;
            break;
        default:
            break;
    }
    return time;
}
export default reducer;