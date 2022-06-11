// https://anilist.github.io/ApiV2-GraphQL-Docs/
// https://anilist.co/graphiql

let Data;

const check = (props) => {
  let query = `
  query ($id: Int) {
    Media(type: ANIME, id:6033) {
      title {
        romaji
        english
      }
      characters(role:MAIN) {
        nodes {
          id
          name {
            first
            last
          }
          description
          image{
            large
            medium
          }
        }
      }
    }
  }
  `;

  let variables = {
    id: 11741,
  };


  const url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

  // Make the HTTP Api request
  fetch(url, options)
    .then((response) => {
      return response.json().then((json) => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((response) => {
      console.log(response);
      Data = response;
    })
    .catch((err) => {
      alert("Error, check console");
      console.error(err);
    });

  return null;
};

export default check;
