import axios from 'axios';

const LoaderAllItems = async (detail, link) => {
    try {
        const res = await axios.get(link)
        console.log(res.data.setup)
        console.log(res.data.punchline)
        detail(res)
        
    } catch (error) {
        console.error(error);
        detail('null');
    }
    return detail
}

export default LoaderAllItems