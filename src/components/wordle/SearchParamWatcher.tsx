import React, { useState, useEffect, SetStateAction } from "react";
import { toast } from "react-toastify";

interface FilterProps {
  setFilterBooks: React.Dispatch<SetStateAction<string[] | undefined>>;
  setFilterLevels: React.Dispatch<SetStateAction<string[] | undefined>>;
  setFilterUnits: React.Dispatch<SetStateAction<string[] | undefined>>;
}

const SearchParamWatcher: React.FC<FilterProps> = ({
  setFilterBooks,
  setFilterLevels,
  setFilterUnits,
}) => {
  const [searchParams, setSearchParams] = useState(window.location.search);

  const updateFilters = () => {
    const params = new URLSearchParams(window.location.search);

    const books = params.get("books")?.split(",") || [];
    const levels = params.get("levels")?.split(",") || [];
    const units = params.get("units")?.split(",") || [];

    setFilterBooks(books);
    setFilterLevels(levels);
    setFilterUnits(units);
  };
  useEffect(() => {
    const handlePopState = () => {
      setSearchParams(window.location.search);
    };

    // Listen for changes in browser history (back/forward)
    window.addEventListener("popstate", handlePopState);

    // Optional: Update state if search params are changed programmatically
    const handlePushState = () => {
      setSearchParams(window.location.search);
    };
    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handlePushState();
    };

    updateFilters();
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (searchParams) {
      updateFilters();
    }
  }, [searchParams]);

  return <div> </div>;
};

export default SearchParamWatcher;
