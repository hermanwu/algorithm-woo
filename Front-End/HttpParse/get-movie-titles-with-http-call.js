function main(substr) {
  let url =
    "https://jsonmock.hackerrank.com/api/movies/search/?Title=" + substr;

  https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      let results = [];

      let totalPages = body.total_pages;

      let responseCount = 0;
      for (let i = 1; i <= totalPages; i++) {
        let pageUrl =
          "https://jsonmock.hackerrank.com/api/movies/search/?Title=" +
          substr +
          "&page=" +
          i;

        https.get(pageUrl, res => {
          res.setEncoding("utf8");
          let body = "";
          res.on("data", data => {
            body += data;
          });
          res.on("end", () => {
            body = JSON.parse(body);

            for (let j = 0; j < body.data.length; j++) {
              results.push(body.data[j].Title);
            }

            responseCount++;

            if (responseCount === totalPages) {
              results.sort();
              console.log(results);
              return results;
            }
          });
        });
      }
    });
  });
}
main("spiderman");
