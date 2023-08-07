const drawInput = (characters) => {
  
    const input$$ = document.querySelector("input");
    input$$.addEventListener("input", () =>
      searchCharacters(input$$.value, characters)
    );
  };
  
  const searchCharacters = (filter, characters) => {
    let filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(filteredCharacters);
    drawCharacters(filteredCharacters);
  };
  
  const drawButton = (characters) => {
    const buttons$$ = document.querySelectorAll("button");
    buttons$$.forEach((button$$) => {
      button$$.addEventListener("click", () => {
        const inputValue = button$$.value;
        if (inputValue === "all") {
          
          drawCharacters(characters); 
        } else {
          searchCharacters2(inputValue, characters);
        }
      });
    });
  };
  
  const searchCharacters2 = (filter, characters) => {
    let filteredCharacters2 = characters.filter(
      (character) =>
        character.type[0].includes(filter) ||
        (character.type[1] && character.type[1].includes(filter))
    );
    console.log(filteredCharacters2);
    drawCharacters(filteredCharacters2);
  };
  