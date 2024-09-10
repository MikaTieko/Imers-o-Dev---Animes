function pesquisar() {
  const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  const section = document.getElementById("resultados-pesquisa");

  if (!campoPesquisa) {
    section.innerHTML = "<p>Anime não encontrado</p>";
    return;
  }

  let resultados = "";
  dados.forEach(dado => {
    if (
      dado.titulo.toLowerCase().includes(campoPesquisa) ||
      dado.descricao.toLowerCase().includes(campoPesquisa) ||
      dado.tags.some(tag => tag.toLowerCase() === campoPesquisa)
    ) {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">mais informações</a>
        </div>
      `;
    }
  });

  section.innerHTML = resultados || "<p> Nada foi encontrado </p>";
}
