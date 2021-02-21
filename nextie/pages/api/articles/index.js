//http://localhost:3000/api/articles

import { data } from '../../../localData/data.js';

export default function getData(req, res) {
    res.status(200).json(data);
}