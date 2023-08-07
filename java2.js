const main$$ = document.querySelector(".main");
const drawCharacters = (characters) => {
  main$$.innerHTML = "";
  for (const character of characters) {
    let characterFigure$$ = document.createElement("figure");
    characterFigure$$.setAttribute("class", "figure");
    characterFigure$$.setAttribute("id", character.type[0]);
  
    characterFigure$$.innerHTML = `
    <div class="figurebox-1">  
    <img src="${character.image}" alt="${character.name}" class = "sprite"> 
    <p class="id">Nº${character.id}</p>
      <h2 class="name">${character.name
        .toUpperCase()
        .charAt(0)}${character.name.substring(1)}</h2>
      <div class = type>
      <p class="type${character.type[0]}">${character.type[0].toUpperCase()}</p>
      ${
        character.type[1]
          ? `<p class="type${
              character.type[1]
            }">${character.type[1].toUpperCase()}</p>`
          : ""
      }
      </div>
    </div> 
  `;
    characterFigure$$.addEventListener("click", () => {
      
      let detailsDiv$$ = document.createElement("div");
      detailsDiv$$.classList.add("details");
      detailsDiv$$.innerHTML = ` 
    <div class ="detailbx">
    <button class="close-btn">RETURN</button>
    <img class="image2" src="${character.image2}" alt="${character.name}">
    <p class="iddet">Nº${character.id}</p> 
    <h2 class="namedetail">${character.name
      .toUpperCase()
      .charAt(0)}${character.name.substring(1)}</h2>
      <div class = detailtypes>
      <p class="type${character.type[0]}">${character.type[0].toUpperCase()}</p>
      ${
        character.type[1]
          ? `<p class="type${
              character.type[1]
            }">${character.type[1].toUpperCase()}</p>`
          : ""
      }
      </div>
      <div class="info">
      <p class ="infodat">HEIGHT: ${character.height}cm</p>
      <p class ="infodat">WEIGHT: ${character.weight}kg</p>
      </div>
      <div class="stats">
      <p class = "stat">${character.stats[0].stat.name.toUpperCase()}</p>
      <div class = "linebx"><hr class="type${character.type[0]}stat" style="width:${character.stats[0].base_stat}px"></div>
      <p class = "stat">${character.stats[0].base_stat}</p>
      </div>
      <div class="stats">
      <p class = "stat">${character.stats[1].stat.name.toUpperCase()}</p>
      <div class = "linebx"><hr class="type${character.type[0]}stat" style="width:${character.stats[1].base_stat}px"></div>
      <p class = "stat">${character.stats[1].base_stat}</p>
      </div>
      <div class="stats">
      <p class = "stat">${character.stats[2].stat.name.toUpperCase()}</p>
      <div class = "linebx"><hr class="type${character.type[0]}stat" style="width:${character.stats[2].base_stat}px"></div>
      <p class = "stat">${character.stats[2].base_stat}</p>
      </div>
      <div class="stats">
      <p class = "stat">${character.stats[3].stat.name.toUpperCase()}</p>
      <div class = "linebx"><hr class="type${character.type[0]}stat" style="width:${character.stats[3].base_stat}px"></div>
      <p class = "stat">${character.stats[3].base_stat}</p>
      </div>
      <div class="stats">
      <p class = "stat">${character.stats[4].stat.name.toUpperCase()}</p>
      <div class = "linebx"><hr class="type${character.type[0]}stat" style="width:${character.stats[4].base_stat}px"></div>
      <p class = "stat">${character.stats[4].base_stat}</p>
      </div>
      <div class="stats">
      <p class = "stat">${character.stats[5].stat.name.toUpperCase()}</p>
      <div class = "linebx"><hr class="type${character.type[0]}stat" style="width:${character.stats[5].base_stat}px"></div>
      <p class = "stat">${character.stats[5].base_stat}</p>
      </div>
    `;

     
      main$$.appendChild(detailsDiv$$);
   
      const closeBtn$$ = detailsDiv$$.querySelector(".close-btn");
      closeBtn$$.addEventListener("click", () => {
        main$$.removeChild(detailsDiv$$);
        document.body.style.overflow = "auto";
      });
    });

    main$$.appendChild(characterFigure$$);
  }
};