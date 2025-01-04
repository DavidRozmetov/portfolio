import React, { SetStateAction, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { toast } from "react-toastify";

interface SettingsProps {
  setViewSettings: React.Dispatch<SetStateAction<boolean>>;
  filterBooks: string[];
  filterLevels: string[];
  filterUnits: string[];
  db: {
    word: string;
    definition: string;
    book: string;
    level: string;
    unit: string;
  }[];
}

interface ChallengeSettingsProps {
  filterBooks: string[];
  filterLevels: string[];
  filterUnits: string[];
  setFilterBooks: React.Dispatch<SetStateAction<string[] | undefined>>;
  setFilterLevels: React.Dispatch<SetStateAction<string[] | undefined>>;
  setFilterUnits: React.Dispatch<SetStateAction<string[] | undefined>>;
  db: {
    word: string;
    definition: string;
    book: string;
    level: string;
    unit: string;
  }[];
}
interface OptionProps {
  value: string;
  name: string;
}

interface SelectableDropdownProps {
  label: string;
  options: string[];
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

interface SelectableDropdownProps {
  label: string;
  options: string[];
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

const SelectableDropdown: React.FC<SelectableDropdownProps> = ({
  label,
  options,
  selectedItems,
  setSelectedItems,
}) => {
  const [toggleDropdown, setDropdown] = useState<boolean>(false);

  const helpers = {
    "Business Result": "Business English",
    "Oxford Discover Futures": "English for Teenagers",
    Cambridge: "Basic words for kids",
    "English File": "Everyday English for Adults",
  };
  const handleCheckboxChange = (option: string) => {
    if (option === "All") {
      // Select or deselect all options
      if (selectedItems.length === options.length) {
        setSelectedItems([]); // Deselect all
      } else {
        setSelectedItems(options); // Select all
      }
    } else {
      // Handle individual option

      if (selectedItems.includes(option)) {
        setSelectedItems(selectedItems.filter((item) => item !== option));
      } else {
        setSelectedItems([...selectedItems, option]);
      }
    }
  };

  return (
    <div className="wordle-dropdown-grid">
      <h3 className="dropdown-label">{label}</h3>

      <div>
        <div
          className="wordle-settings-dropdown"
          onClick={() => {
            setDropdown(!toggleDropdown);
          }}
        >
          <FaAngleDown />
        </div>
        {toggleDropdown && (
          <div className="checkbox-group">
            <label className="checkbox-item">
              <input
                type="checkbox"
                checked={selectedItems.length === options.length}
                onChange={() => handleCheckboxChange("All")}
              />
              <span>All</span>
            </label>
            {options.map((option) => (
              <label key={option} className="checkbox-item">
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedItems.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <span className="check-box-option-text">
                  {option}

                  <span className="check-box-option-text-helper">
                    {helpers[option as keyof typeof helpers] && (
                      <p>({helpers[option as keyof typeof helpers]})</p>
                    )}
                  </span>
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectableDropdown;

export const Settings: React.FC<SettingsProps> = ({
  setViewSettings,
  db,
  filterBooks,
  filterLevels,
  filterUnits,
}) => {
  const [bookOptions, setBookOptions] = useState<string[]>([]);
  const [levelOptions, setLevelOptions] = useState<string[]>([]);
  const [unitOptions, setUnitOptions] = useState<string[]>([]);

  const [books, setBooks] = useState<string[]>([]);
  const [levels, setLevels] = useState<string[]>([]);
  const [units, setUnits] = useState<string[]>([]);

  useEffect(() => {
    db?.map((word) => {
      setBookOptions((oldOpt) => {
        if (!oldOpt.includes(word.book)) {
          return [...oldOpt, word.book];
        }

        return oldOpt;
      });

      setLevelOptions((oldOpt) => {
        if (!oldOpt.includes(word.level)) {
          return [...oldOpt, word.level];
        }

        return oldOpt;
      });

      setUnitOptions((oldOpt) => {
        if (!oldOpt.includes(word.unit)) {
          return [...oldOpt, word.unit];
        }

        return oldOpt;
      });
    });

    setBooks(filterBooks);
    setLevels(filterLevels);
    setUnits(filterUnits);
  }, []);

  useEffect(() => {
    let levelArray: string[] = [];
    if (books.length !== 0) {
      db.map((word) => {
        if (books.includes(word.book)) {
          if (!levelArray.includes(word.level)) {
            levelArray.push(word.level);
          }
        }
      });
    } else {
      db.map((word) => {
        if (!levelArray.includes(word.level)) {
          levelArray.push(word.level);
        }
      });
    }
    setLevelOptions(levelArray);
  }, [books]);

  useEffect(() => {
    let unitArray: string[] = [];
    if (levels.length !== 0) {
      db.map((word) => {
        if (books.includes(word.book)) {
          if (levels.includes(word.level)) {
            if (!unitArray.includes(word.unit)) {
              unitArray.push(word.unit);
            }
          }
        }
      });
    } else {
      db.map((word) => {
        if (!unitArray.includes(word.unit)) {
          unitArray.push(word.unit);
        }
      });
    }
    setUnitOptions(unitArray);
  }, [levels]);

  const updateSettings = () => {
    const params = new URLSearchParams();
    setViewSettings(false);

    if (books.length > 0) params.set("books", books.join(","));
    if (levels.length > 0) params.set("levels", levels.join(","));
    if (units.length > 0) params.set("units", units.join(","));

    const queryString = params.toString();
    const newUrl = `${window.location.origin}${window.location.pathname}${
      queryString ? `?${queryString}` : ""
    }`;

    window.history.pushState({}, "", newUrl); // Update URL without refreshing
  };

  return (
    <div className="wordle-settings-container">
      <div
        className="wordle-settings-closer"
        onClick={() => {
          setViewSettings(false);
        }}
      ></div>
      <div className="wordle-settings-main">
        <h3>Settings</h3>

        <SelectableDropdown
          options={bookOptions}
          setSelectedItems={setBooks}
          selectedItems={books}
          label="Books"
        />

        {books.length > 0 && (
          <SelectableDropdown
            options={levelOptions}
            setSelectedItems={setLevels}
            selectedItems={levels}
            label="Levels"
          />
        )}
        {levels.length > 0 && (
          <SelectableDropdown
            options={unitOptions}
            setSelectedItems={setUnits}
            selectedItems={units}
            label="Units"
          />
        )}

        <div className="wordle-setting-buttons">
          <button
            className="wordle-button wordle-settings-button wordle-reset-button "
            onClick={() => {
              window.location.search = "";
            }}
          >
            Reset Settings
          </button>
          <button
            className="wordle-button wordle-settings-button"
            onClick={updateSettings}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export const ChallengeSettings: React.FC<ChallengeSettingsProps> = ({
  db,
  filterBooks,
  filterLevels,
  filterUnits,
  setFilterBooks,
  setFilterLevels,
  setFilterUnits,
}) => {
  const [bookOptions, setBookOptions] = useState<string[]>([]);
  const [levelOptions, setLevelOptions] = useState<string[]>([]);
  const [unitOptions, setUnitOptions] = useState<string[]>([]);

  const [books, setBooks] = useState<string[]>([]);
  const [levels, setLevels] = useState<string[]>([]);
  const [units, setUnits] = useState<string[]>([]);

  useEffect(() => {
    db?.map((word) => {
      setBookOptions((oldOpt) => {
        if (!oldOpt.includes(word.book)) {
          return [...oldOpt, word.book];
        }

        return oldOpt;
      });

      setLevelOptions((oldOpt) => {
        if (!oldOpt.includes(word.level)) {
          return [...oldOpt, word.level];
        }

        return oldOpt;
      });

      setUnitOptions((oldOpt) => {
        if (!oldOpt.includes(word.unit)) {
          return [...oldOpt, word.unit];
        }

        return oldOpt;
      });
    });
  }, []);

  useEffect(() => {
    let levelArray: string[] = [];

    if (books.length !== 0) {
      db.map((word) => {
        if (books.includes(word.book)) {
          if (!levelArray.includes(word.level)) {
            levelArray.push(word.level);
          }
        }
      });
    } else {
      db.map((word) => {
        if (!levelArray.includes(word.level)) {
          levelArray.push(word.level);
        }
      });
    }
    setLevelOptions(levelArray);

    setFilterBooks(books);
  }, [books]);

  const updateFilters = () => {
    const params = new URLSearchParams(window.location.search);

    const tempBooks = params.get("books")?.split(",") || [];
    const tempLevels = params.get("levels")?.split(",") || [];
    const tempUnits = params.get("units")?.split(",") || [];

    setFilterBooks(tempBooks);
    setBooks(tempBooks);

    setFilterLevels(tempLevels);
    setFilterUnits(tempUnits);
  };

  useEffect(() => {
    updateFilters();
  }, []);

  useEffect(() => {
    let unitArray: string[] = [];
    if (levels.length !== 0) {
      db.map((word) => {
        if (books.includes(word.book)) {
          if (levels.includes(word.level)) {
            if (!unitArray.includes(word.unit)) {
              unitArray.push(word.unit);
            }
          }
        }
      });
    } else {
      db.map((word) => {
        if (!unitArray.includes(word.unit)) {
          unitArray.push(word.unit);
        }
      });
    }
    setUnitOptions(unitArray);
    setFilterLevels(levels);
  }, [levels]);

  useEffect(() => {
    setFilterUnits(units);
  }, [units]);

  return (
    <div className="wordle-settings-main">
      <SelectableDropdown
        options={bookOptions}
        setSelectedItems={setBooks}
        selectedItems={books}
        label="Books"
      />

      {books.length > 0 && (
        <SelectableDropdown
          options={levelOptions}
          setSelectedItems={setLevels}
          selectedItems={levels}
          label="Levels"
        />
      )}
      {levels.length > 0 && (
        <SelectableDropdown
          options={unitOptions}
          setSelectedItems={setUnits}
          selectedItems={units}
          label="Units"
        />
      )}
    </div>
  );
};
