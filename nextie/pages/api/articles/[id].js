//http://localhost:3000/api/articles[:id]

import { data } from '../../../localData/data.js';

export default function getData({ query: { id } }, res) {

    //create empty array
    let filtered = [];

    //loop through array of objects and match query id to data id and push to array
    data.forEach(item => {
        if (item.id == id) {
            filtered.push(item);
        } else {
            //console.log('no matches');
        }
    });

    if (filtered.length > 0) {
        res.status(200).json(filtered[0]);
    } else {
        res.status(404).json({ message: `Article ${id} not found` });
    }

}
