const https = require("https");

function main(substr) {
    let pageNum = 1;
    let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + "&page=" + pageNum;

    https.get(url, res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            body = JSON.parse(body);
            console.log(body);


            let movies = body.data;
            let totPages = body.total_pages;
            let sortArray = [];
            for(let i=0; i<movies.length;i++){
                sortArray.push(body.data[i].Title);
            }

            for(let i=2; i<=totPages; i++){
                let newPage = i;
                let url1 = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + "&page=" + newPage;

                https.get(url1, res => {
                    res.setEncoding("utf8");
                    let body = "";
                    res.on("data", data => {
                        body += data;
                    });
                    res.on("end", () => {
                        body = JSON.parse(body);

                        for(let i=0; i<body.data.length;i++){
                            sortArray.push(body.data[i].Title);
                        }

                        if(i==totPages)console.log(sortArray.sort());
                    });
                });
            }
        });
    });
}

main('spiderman');
