import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 72121ec121d0203b111c4221e51352b7692573b82212cf3cc87fdf5ecfb15507'
    }
});