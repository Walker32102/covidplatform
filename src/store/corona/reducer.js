import { coronaAllData } from "./corona";

const reducer = (state = coronaAllData, action) => {
    let time = state;
    switch (action.type) {

        case 'countryCode':
            time.countryCode = action.value;
            break;

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