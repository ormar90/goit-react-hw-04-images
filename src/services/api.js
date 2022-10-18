import axios from "axios";

axios.defaults.baseURL = `https://pixabay.com/api/`

export const getImages = async (value, page) => {
    const response = await axios.get('', {
        params: {
            q: value,
            key: '29585981-4b31f207c2d4bfdf8784d9dec',
            page: page,
            per_page: 12,
            img_type: 'photo',
            orientation: 'horizontal',
        }            
    });  
    
    return response.data;
}