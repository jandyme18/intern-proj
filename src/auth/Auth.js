// import decodeJWT from 'jwt-decode';

class Auth {
    login = async (email, password) => {
        if (!(email.length > 0)) {
            throw new Error('Email was not provided');
        }
        if (!(password.length > 0)) {
            throw new Error('Password was not provided');
        }

        const formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);

        const request = new Request('http://103.122.112.32:8000/api/token', {
            method: 'POST',
            body: formData,
        });
        const response = await fetch(request);
        // 500 error handling
        if (response.status === 500) {
            throw new Error('Internal server error');
        }

        const data = await response.json();
        // 400 error handling
        if (response.status >= 400 && response.status < 500) {
            if (data.detail) {
                throw data.detail;
            }
            throw data;
        }
        // Successful login handling
        if ('access_token' in data) {
            // const decodedToken = decodeJwt(data['access_token']);
            // console.log(decodedToken)
            localStorage.setItem('token', data['access_token']);
            localStorage.setItem('permissions', 'user');
        }
        return data

    };

    logout = (callback) => {
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        // Using a callback to load '/' when logout is called
        callback();
    };

    getUser = async () => {
        const token = localStorage.getItem('token');
        // Create request
        const request = new Request('http://103.122.112.32:8000/api/v1/users/me', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        // Fetch request
        const response = await fetch(request);
        const data = await response.json();
        return data
    };

    isAuthenticated = () => {
        const permissions = localStorage.getItem('permissions');
        if (!permissions) {
            return false;
        }
        return permissions === 'user' ? true : false;
    };
}

export default new Auth();