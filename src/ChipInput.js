import React, { useState, useRef, useEffect } from "react";

const ChipInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([
    {
      name: "Marina Augustine",
      email: "a.marina@example.com",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAMAAAAIR25wAAAABlBMVEX///+s2IwoT/dmAAABRUlEQVR4nO3PgQ0DAQgDse/+S3eFSgTU6H0DEPw8kiRJkqSf+nSF1BBSQ0gNITWE1BBSQ0gNITWE1BBSQ0gNITWE1BBSQ0gNITWE1NAd6Z+GkAZLZ0NIg6WzIaTB0tkQ0mDpbAhpsHQ2hDRYOhtCGiydDSENls6GkAZLZ0NIg6WzIaTB0tkQ0mDpbAhpsHQ2hDRYOhtCGiydDSENls6GkAZLZ0Oh/uqZTEgNITWE1BBSQ0gNITWE1BBSQ0gNITWE1BBSQ0gNITWE1BBSQ0jveSb0C9JqSMtnIiEtn4mEtHwmEtLymUhIy2ciIS2fiYS0fCYS0vKZSEjLZyIhLZ+JhLR8JhLS8plISMtnIiEtn4mEtHwmEtLymUh3v/ywlCn0LxISEhISEhISEhISEhISEhISEhISEhISEhIS0gtJkiRJkiRpqS+JcEfIQXj9pAAAAABJRU5ErkJggg==",
    },
    {
      name: "Nick Giannopoulos",
      email: "g.nick@example.com",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAATlBMVEX///8GVZcAQo4AUJWWq8gATJMbW5oAU5b7/P1dga4ARpDZ4OqQpsVlh7Le5O0ASZG6xtkAPYwAK4UAN4pQeKnEz9+Mo8Lp7fJZfq1NdqhWB6bwAAAB0ElEQVR4nO3dwVIaQRRAUQMiBtQEVMT//9FU6bq7UlyCSThn/3q6b81yavrmBgAA4N90eF6cYn8/XvJ+f9KSz4fLnfpsblffTrGY5VuctOTq9nKnPhv5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+ZJZvvVyaDdbczeeW19PvvXL96GX7dPQdjY37ve/5ds8TeaWm6HlZOxpcz35tpO5u+FrtL6bjG3l+yDfB/kS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+ZKHzWpk9yfy7YaP2zyc+2wX8Hp4GDm8TeZOzPc2edzruc/2FzsxH5/kS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS5abHwPTP2nw6efEV+8NAAAAAAAAAIDrcTgO7xx6n92U9T4cOx4ut/sv97ga35Q1yze+KWv1eLndf7nH5egbvlPvaVvKJ99vki+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RLznuFiP7Wb79cGx3vNzuAQAALuYX0dpA35sR2R8AAAAASUVORK5CYII=",
    },
    {
      name: "Narayana Garner",
      email: "g.narayana@example.com",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEXw8PB3xdTX5en69PL08vGTzNhyw9Ntw9Kd0NvT4+d5xtRvwtPa5+pxxNP08vCPy9jq7u5jwNG/3OOm0tz+9vSFyNa72+Ku1d7kOy6EAAADxElEQVR4nO2djXKiQBCE/YFdZUFOo3fv/6ZHBD1RU/ZeDUu7didUIGWG+bZnQCvrulhIkiRJkiRJkiRJ0qeqgESZ1Q4K9WuFqE6MaJhVsQqueaXlvl1PDhWflYeyKlZu+Vq+TE1ol9U7E4bsCVEPG0pCu6w+wUMRvj+h+nAeQnkYQ5i/hyIU4RQSoQinimUnEcYR6o4/D6GqVIS3sdSH8xDKwxjC/D0UoQinkG0fcl5p8vdQhCK8jcXZh4nv+FVD6SH6H1LfK4RuO3+fd/u9bjd0O2FfHq/zH7C5G1HaPRzWfTKhTyAMKfrr4XnDZhcUdVsCOm3SqjwBSbVf0AyRYg3ouNm/nhvxk0L0X3jn6yOSFwKIqdggfWGoZpt4Ak+x8UkBK5eeMCQlXM5AiNyf7CQPpyBM62H+hKrSKQjz91B9aCv14RSE+VepPLSV+nAKQnlorOw9nOM1vjy0lZ6XTkGoKhVhnPLvQ93xpyDMvw/loa3Uh1MQykNjzUCY9v+HHaFl9og2rqq64um+q5s8qqe7r1SdH3yJNfwcH1bd68PRBIbn8yMMV42oS+9eC+zVJ394v9v4Q228aoQbvr73mn+/uBz6U719rQPE10KhHtmHwz6l82a7asTxaZmMVScPlXheG2coyxlktISGaZkN1o6VkDEUaVq2HqoPI9JiHCzSgae9W5B6yJiWqpSaEJp+TluljAVPWloiFOE4FmPz0HrIOFikAy/COELG0iJ9Pz7nYJGWFm2VMoYiLS3aPmQMRZqW+jCOkHHgVaUiHMfS3WKOtFSlIhzHYiwt9eFshIyhaD3Uq6cYQsbSoq1SxlCkadESMrY06cCLMI6QsbTk4WyEjOVAOvCf0Iekz9oYB4u0tGirlDEUaWnR9iFjKNK01IdxhIwDryoVIX9an3ClIfWQcbBoCfP3UH0YQ5i/hyKch1DX0hhCLC3oTfT9ihD917AWxMOh43w/ftMCizjUh/slEJ7Jn6BQQFKmhEt3XUziusBEv3LDzaFzv4H1IFalH0K5m+3+EMnJlhBSs0U+osVuIRjLPoSELQxkuFxRcg9pCe08hJZVlYcREuHnEKoPYdF6KEJcIKHZ8n20hG98pcneQ/Xh+xPSeqhXT7BoCfWsDRath7qWwqL1UNdSWPkTqg9FGC1daS6E6kNY+XtIS6g+hEVLKA9xgYRmJ4QWe+0IfafQb+H753/L7THCfdM/fjhb8E9PHH7cvW576NMfFnVbWqmtkSH9Y3bC9gv6MJpibafkJ0TOJ0mSJEmSJEmSJEk56i+zk7G+y6HSlQAAAABJRU5ErkJggg==",
    },
    {
      name: "Anita Gros",
      email: "g.anita@example.com",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7xKyQKGB4EbE5EtXg4BjXu6JThLSdi5YwA&usqp=CAU",
    },
    {
      name: "Megan Smith",
      email: "s.megan@example.com",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5p7DHTqZzAzOiJWj_j9csR2Kn-HBe9pmQA&usqp=CAU",
    },
    {
      name: "Thanmai Gowducheruvu",
      email: "g.thanmai@example.com",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjj9khUxToBXIM3UnNUYSjZqH1djQilcRKw&usqp=CAU",
    },
  ]);
  const [selectedChips, setSelectedChips] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const inputRef = useRef(null);
  const selectedItemsRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      const inputLength = inputRef.current.value.length;
      inputRef.current.setSelectionRange(inputLength, inputLength);
    }
  }, [selectedChips]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter items based on whether the item's name includes the input value or not
    const filtered = isInputFocused
      ? items.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      : [];
    setFilteredItems(filtered);
    setIsDropdownVisible(true);
  };
  const handleInputClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleItemClick = (item) => {
    setSelectedChips([...selectedChips, item]);
    setItems(items.filter((i) => i !== item));
    setInputValue("");
    setFilteredItems([]);
    setIsDropdownVisible(false); // Clear the filtered list when an item is selected
  };

  const handleChipRemove = (chip) => {
    setSelectedChips(selectedChips.filter((c) => c !== chip));
    setItems([...items, chip]);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      inputValue === "" &&
      selectedChips.length > 0
    ) {
      const lastChip = selectedChips[selectedChips.length - 1];
      handleChipRemove(lastChip);
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const highlightMatchedLetters = (name, searchValue) => {
    const regex = new RegExp(`(${searchValue})`, "gi");
    const parts = name.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-white text-gray-300">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="p-4 mx-auto flex flex-col min-h-screen">
      <h1 className="text-5xl text-center pb-3 mb-3 text-blue-500">
        Pick Users
      </h1>
      <div className="flex gap-2 mb-4" ref={selectedItemsRef}>
        {selectedChips.map((chip) => (
          <div
            key={chip.name}
            className="bg-gray-300 text-black p-2 rounded-full flex items-center"
          >
            <img
              src={chip.logo}
              alt={chip.name}
              className="w-6 h-6 rounded-full mr-2"
            />
            {chip.name}{" "}
            <span
              onClick={() => handleChipRemove(chip)}
              className="ml-2 cursor-pointer text-xl" // Use text-xl class for larger X mark
            >
              ×
            </span>
          </div>
        ))}
      </div>

      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onClick={handleInputClick}
          className="border-b-2 border-blue-400 focus:outline-none px-2 bg-neutral-100"
          style={{ width: "100%" }} // Set initial width to 200px
        />

        {isDropdownVisible && filteredItems.length > 0 && (
          <ul className="absolute bg-white w-full border rounded-md mt-1 shadow-md">
            {filteredItems.map((item) => (
              <li
                key={item.name}
                onClick={() => handleItemClick(item)}
                className="p-3 cursor-pointer hover:bg-gray-100 flex items-center"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <div>
                  <div className="text-gray-800">
                    {highlightMatchedLetters(item.name, inputValue)}
                  </div>
                  <div className="text-gray-500 text-sm">{item.email}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <footer class="mt-auto">
        <hr className="border-y border-neutral-300 mx-auto" />
      </footer>
    </div>
  );
};

export default ChipInput;
