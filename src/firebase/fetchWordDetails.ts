export const fetchWordDetails = async (word: string): Promise<any> => {
  const apiKey = process.env.REACT_APP_WORDS_API_KEY || "";
  const apiUrl = `https://wordsapiv1.p.rapidapi.com/words/${word}`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching word details:", error);
    return null; // Return null on error
  }
};
