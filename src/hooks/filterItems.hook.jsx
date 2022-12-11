import { useMemo } from "react";
import { useSearchParams } from 'react-router-dom';


const useFilterItems = (menu, isTourist) => {
    const [params] = useSearchParams();
    const searchTerms = params.get('searchTerms') || '';
    const categoryFilters = params.getAll('category') || '';
    const priceMin = Number(params.getAll('priceMin')) || 0;
    const priceMax = Number(params.getAll('priceMax')) || 0;

    const filteredMenu = useMemo(() => {
        console.log('re-filtering');
        const filtered = menu
            .filter(
                item => {
                    let match = (
                        (item.name.toLowerCase().includes(searchTerms.trim().toLowerCase()))
                        || (item.description.toLowerCase().includes(searchTerms.trim().toLowerCase()))
                        || (item.ingredients.some(element => element.toLowerCase().includes(searchTerms.trim().toLowerCase())))
                    );

                    if (categoryFilters.length) {
                        match = match && (categoryFilters.includes(item.category));
                    }
                    if (priceMin && priceMax) {
                        match = match && (item.price >= priceMin && item.price <= priceMax);
                    }
                    else if (priceMin) {
                        match = match && (item.price >= priceMin);
                    }
                    else if (priceMax) {
                        match = match && (item.price <= priceMax);
                    }

                    return match;
                });
        return isTourist? filtered.map(item => ({...item, price: item.price * 2})) : filtered;
}, [params, menu, isTourist]);
return filteredMenu;
};
export default useFilterItems;