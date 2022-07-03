export default async (req, res) => {
    if (!req.query.todo) {
      return res.status(400).send("todo parameter required.");
    }
    let todo = encodeURI(req.query.todo);
  
    const token = "AZKhASQgMjMyNGJkN2YtZDU5NS00YjJkLWIzNzMtMWRkMDU2M2EwNTlmYzMzYTkzYWYzYzFjNGI4ZWJlZWQ3ZTY4OTA2YmQ0Y2E=";
    const url =
      "https://us1-generous-bug-37537.upstash.io/lpush/todo/" + todo + "?_token=" + token;
  
    return fetch(url)
      .then((r) => r.json())
      .then((data) => {
        let result = JSON.stringify(data.result);
        return res.status(200).json(result);
      });
  };