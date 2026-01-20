import {rules, createComparison} from "../lib/compare.js";

export function initSearching(searchField) {
    const skipEmptyRule = rules.skipEmptyTargetValues();
    
    const searchRule = rules.searchMultipleFields(
        searchField,
        ['date', 'customer', 'seller'],
        false
    );
    
    const compare = createComparison([], [skipEmptyRule, searchRule]);
    
    return (data, state, action) => {
        return data.filter(row => compare(row, state));
    };
}