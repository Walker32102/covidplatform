import { coronaAllData } from "./corona";

const reducer = (state = coronaAllData, action) => {
    let time = state;
    switch (action.type) {
        case 'countryCode':
            time.countryCode = action.value;
            break;
        case 'currentAll':
            time.currentAll = action.value;
            break;
        case 'currentCountriesC':
            time.currentCountriesC = action.value;
            break;
        case 'historyCountriesC':
            time.historyCountriesC = action.value;
            break;
        default:
            break;
    }
    return time;
}

export default reducer;