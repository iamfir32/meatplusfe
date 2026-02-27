import { getSession } from 'next-auth/react';

export default async function upload(url, method = 'GET', body = null, token = null) {
    const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL_PUBLIC;
    const baseUrl = apiUrl;

    if (!token) {
        const session = await getSession();
        if (!session || !session.user?.data || !session.user?.data?.accessToken) {
            throw new Error('Unauthorized');
        }
        token = session.user?.data?.accessToken;
    }

    const headers = {
        'Authorization': `Bearer ${token}`,
    };

    if (body instanceof FormData) {
        delete headers['Content-Type'];
    } else {
        headers['Content-Type'] = 'application/json';
    }

    const options = {
        method,
        headers,
        cache: 'reload',
    };

    if (body) {
        if (body instanceof FormData) {
            options.body = body;
        } else {
            options.body = JSON.stringify(body);
        }
    }

    const response = await fetch(baseUrl + url, options);

    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const contentType = response.headers.get('Content-Type');

    if (contentType && contentType.includes('application/json')) {
        return await response.json();
    }

    return response;
}
