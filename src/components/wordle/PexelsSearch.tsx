import React, { useState, useEffect } from "react";

const PexelsSearch: React.FC<{ query: string; query2: string }> = ({
  query,
  query2,
}) => {
  const [image, setImage] = useState<string | null>(null);
  const [image2, setImage2] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [error2, setError2] = useState<string | null>(null);

  const fetchPexelsImage = async () => {
    const apiKey = process.env.REACT_APP_PEXELS_KEY || "";
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
      query
    )}&per_page=1`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.photos && data.photos.length > 0) {
        setImage(data.photos[0].src.medium); // Use "src.medium" for a medium-sized image
      } else {
        setError("No results found.");
        setImage(null);
      }
    } catch (err: any) {
      setError(err.message || "Error fetching data.");
      setImage(null);
    }
  };

  const fetchPexelsImage2 = async () => {
    const apiKey = process.env.REACT_APP_PEXELS_KEY || "";
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
      query2
    )}&per_page=1`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.photos && data.photos.length > 0) {
        setImage2(data.photos[0].src.medium); // Use "src.medium" for a medium-sized image
      } else {
        setError2("No results found.");
        setImage2(null);
      }
    } catch (err: any) {
      setError2(err.message || "Error fetching data.");
      setImage2(null);
    }
  };

  useEffect(() => {
    fetchPexelsImage();
    fetchPexelsImage2();
  }, [query]);

  return (
    <div className="pexels-container">
      {image && (
        <div className="pexels-image-div">
          <img
            src={image}
            alt={`Pexels result for ${query}`}
            style={{ marginTop: "20px", maxWidth: "100%" }}
          />
          <img
            src={image2 || ""}
            alt={`Pexels result for ${query2}`}
            style={{ marginTop: "20px", maxWidth: "100%" }}
          />
          <p className="p-thanks-pexels">
            {" "}
            Special thanks to{" "}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pexels
            </a>{" "}
            for generously providing the images.
          </p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default PexelsSearch;
