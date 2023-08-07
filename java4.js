const sortCharactersDescending = (characters) => {
    const sortedCharacters = characters.slice().sort((a, b) => b.id - a.id);
    drawCharacters(sortedCharacters);
  };
  
  const sortCharactersAscending = (characters) => {
    const sortedCharacters = characters.slice().sort((a, b) => a.id - b.id);
    drawCharacters(sortedCharacters);
  };
  
  const init = async () => {
    const characters = await getCharacters();
    const mappeCharacter = mappedCharacters(characters);
    drawCharacters(mappeCharacter);
    drawInput(mappeCharacter);
    drawButton(mappeCharacter);
  
    const sortDescendingButton = document.getElementById("sortDescending");
    const sortAscendingButton = document.getElementById("sortAscending");
  
    sortDescendingButton.addEventListener("click", () =>
      sortCharactersDescending(mappeCharacter)
    );
    sortAscendingButton.addEventListener("click", () =>
      sortCharactersAscending(mappeCharacter)
    );
  };
  init();
