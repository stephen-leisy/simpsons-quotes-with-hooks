const URL = `https://thesimpsonsquoteapi.glitch.me/quotes`;

export const getSimpsonsQuote = async () => {
  const res = await fetch(URL);

  const json = await res.json();
  return {
    quote: json[0].quote,
    image: json[0].image,
    character: json[0].character,
  };
};
