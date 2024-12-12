import {getSession} from 'next-auth/react';

export default async function fetchData(url, method = 'GET', body = null) {
    const session = await getSession();
    const baseUrl = "http://localhost:8080"
    if (!session || !session.user?.token) {
        throw new Error('Unauthorized');
    }

    const headers = {
        'Authorization': `Bearer ${session.user.token}`,
    };

    if (body instanceof FormData) {
        delete headers['Content-Type'];
    } else {
        headers['Content-Type'] = 'application/json';
    }

    const options = {
        method,
        headers,
        cache:'reload'
    };

    if (body) {
        if (body instanceof FormData) {
            options.body = body;
        } else {
            options.body = JSON.stringify(body);
        }
    }

    const response = await fetch(baseUrl+url, options,);

    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return await response.json();
}
