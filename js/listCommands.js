let run = async () => {
  const data = await fetch("../commands.json").then((data) => data.json());
  console.log(data);

  data.commands.forEach((command) => {
    document
      .getElementById("accordion")
      .insertAdjacentHTML("beforeend", generateSkill(command));
  });
};

let generateSkill = (command) => {
  return `
    <div class="accordion-card">
      <div class="accordion-card-header">
        ${command.name}
      </div>
      <div class="accordion-card-body">
        <div class="accordion-card-body-content">
          <div class="command-info">
            <div class="command-info-texts">
                <label>Nome</label>
                <h1 class="command-name">${command.name}</h1>
                <label>Descrição</label>
                <p class="command-description">
                  ${command.description}
                </p>
                <label>Como usar</label>
                <p class="command-usage"><code>b!</code>${command.usage}</p>
                <label>Alternativas</label>
                <p class="command-aliases"><code>${command.aliases}</code></p>
            </div>
            <div class="command-info-image">
              <img
                  class="command-gif"
                  src="${command.gifPath}"
                  alt="Gif mostrando como usar o comando"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
};

run();
