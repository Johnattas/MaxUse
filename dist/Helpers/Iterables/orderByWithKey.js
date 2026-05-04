import { keyBy } from './keyBy';
import { orderBy } from './orderBy';
export function orderByWithKey(collection, criteria, object_keyBy, order = 'asc', defaultOrder = 'asc') {
    const in_order = orderBy(collection, criteria, defaultOrder);
    return keyBy(in_order, object_keyBy);
}
