const filters = {
    searchtext: '',
    hideCompleted: false
}

const getFilters = () => filters

const setFilters = (updates) => {
    if (typeof updates.searchtext === 'string') {
        filters.searchtext = updates.searchtext     
    }
    if (typeof updates.hideCompleted === 'boolean') {
        filters.hideCompleted = updates.hideCompleted
    }
} 

export { getFilters, setFilters }
