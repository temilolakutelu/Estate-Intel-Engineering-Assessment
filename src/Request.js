import axios from "axios";

export default {
    name: "Request",
    makeGetRequest: request => {
        var request_urls = {
            tabledata: 'https://244b8df3-7491-4cfd-a48b-267f19446372.mock.pstmn.io/'
        };
        var request_url = request_urls[request.what];
        console.log(
            "%cSending get request to: " + "%c" + request_url,
            "color:#00ff00;font-size:14px;background:#000;",
            "color:#ff0000;font-size:14px;background:#000;"
        );
        return new Promise((resolve, reject) => {
            axios
                .get(request_url)
                .then(response => {
                    if (
                        response.status == 200 ||
                        response.status == true ||
                        response.status == "true"
                    ) {
                        var response = {
                            data: response.data.data,
                            type: request.what,
                            status: "true",
                            url: URL
                        };

                        resolve(response);
                    } else {
                        reject(response.data);
                    }
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
};