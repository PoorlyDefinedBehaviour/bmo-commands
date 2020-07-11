const generateSkill = (command) =>
  `
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

const loadCommands = async () => {
  const { commands } = await fetch("../commands.json").then((data) =>
    data.json()
  );

  const accordion = document.getElementById("accordion");

  commands.forEach((command) =>
    accordion.insertAdjacentHTML("beforeend", generateSkill(command))
  );
};
