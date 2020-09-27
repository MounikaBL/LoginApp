export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`http://localhost:3001/currentUser`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (username === user.username && password === user.password) {
                let currentUser = user;
                delete currentUser.password;
                localStorage.setItem('user', JSON.stringify(currentUser));
                return currentUser;
            } else {
                return null;
            }

        }).
        catch(error => {
            return error.message;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(`http://localhost:3001/allUsers`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    debugger;
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}