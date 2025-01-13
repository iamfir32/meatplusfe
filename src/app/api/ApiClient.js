import { getSession } from 'next-auth/react';

export default async function fetchData(url, method = 'GET', body = null) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const session = await getSession();
    const baseUrl = apiUrl;

    if (!session || !session.user?.data || !session.user?.data?.accessToken) {
        throw new Error('Unauthorized');
    }

    const headers = {
        'Authorization': `Bearer ${session.user?.data?.accessToken}`,
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
