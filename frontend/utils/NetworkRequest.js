export default class NetworkRequest {
    /**
     * Sends GET request to url
     *
     * @param url to request
     * @param queryParams dictionary of query parameters
     * @returns {Promise<Response>}
     */
    static async get(url, queryParams) {
        if (queryParams) {
            url += "?";
            for (const key in queryParams) {
                if (queryParams.hasOwnProperty(key)) {
                    url += `&${key}=${queryParams[key]}`;
                }
            }
        }

        return await NetworkRequest.makeRequest(url, "GET");
    }

    /**
     * Sends DELETE request to url
     *
     * @param url to request
     * @param body dictionary of data to send
     * @returns {Promise<Response>}
     */
    static async delete(url, body) {
        return await NetworkRequest.makeRequest(url, "DELETE", body);
    }

    /**
     * Sends POST request to url
     *
     * @param url to request
     * @param body dictionary of data to send
     * @returns {Promise<Response>}
     */
    static async post(url, body) {
        return await NetworkRequest.makeRequest(url, "POST", body);
    }

    /**
     * Sends PUT request to url
     *
     * @param url to request
     * @param body dictionary of data to send
     * @param queryParams dictionary of query parameters
     * @returns {Promise<Response>}
     */
    static async put(url, body, queryParams) {
        if (queryParams) {
            url += "?";
            for (const key in queryParams) {
                if (queryParams.hasOwnProperty(key)) {
                    url += `&${key}=${queryParams[key]}`;
                }
            }
        }

        return await NetworkRequest.makeRequest(url, "PUT", body);
    }

    /**
     * Sends request to url using fetch()
     *
     * @param url to request
     * @param method http method
     * @param body valid JSON
     * @returns {Promise<Response>}
     */
    static async makeRequest(url, method, body = null) {
        const headers = new Headers({
            "Content-Type": "application/json",
            "Authorization": window.localStorage.getItem("token")
        });
        body = body ? JSON.stringify(body) : null;

        return await fetch(url, {method, headers, body});
    }
}