import axios from "axios";

// Usage
const sendWordToLongdo = async (word) => {
  try {
    const response = await axios.post(
      "https://us-central1-portfolio-davranbek-rozmetov.cloudfunctions.net/longdoRequest", // Replace with your function URL
      { word },
      { headers: { "Content-Type": "application/json" } }
    );

    // console.log(
    //   response.data.result
    //     .split("English-Thai: HOPE Dictionary [with local updates]")[1]
    //     .split("English-Thai: Nontri Dictionary")[0]
    //     ?.split("meaning meaning-right")[1]
    //     ?.split("<span")[1]
    //     ?.split(".")[1]
    //     ?.split("</span>")[0]
    //     ?.split(", ") || ["error"]
    // );

    return (
      response.data.result
        .split("English-Thai: HOPE Dictionary [with local updates]")[1]
        .split("English-Thai: Nontri Dictionary")[0]
        ?.split("meaning meaning-right")[1]
        ?.split("<span")[1]
        ?.split(".")[1]
        ?.split("</span>")[0]
        ?.split(", ") || ["error"]
    );
  } catch (error) {
    console.error("Error calling Firebase function:", error);
    throw error;
  }
};

export default sendWordToLongdo;
