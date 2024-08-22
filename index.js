exports.handler = async (event) => {
  const jokesArr = [
    " Where does bad light end up? - In prism",
    "Vad har bara manliga snögubbar - Snöbollar",
    "Vilken klassisk musik bör spelas för bästa sportfiskeupplevelse - Bete Håven!",
  ];

  const randomIndex = Math.floor(Math.random() * jokesArr.length);
  const randomJoke = jokesArr[randomIndex];

  const route = event.rawPath;
  let responseText = randomJoke;

  if (route === "/joke") {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: responseText }),
    };
  }

  return {
    statusCode: 404,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "URL not found" }),
  };
};
