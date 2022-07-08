import './App.css';

function App() {
  
  const name = "Jack";
  
  const newName = name.toUpperCase(); // Coloca o conteúdo (String) da variavel 'name' em caixa alta
  
  function soma(n1, n2) {
    return n1 + n2;
  }
  
  const url = "https://via.placeholder.com/150";
  
  /* 
    O JSX renderiza os elementos da página, aqui colocados, 
    somente se eles estiverem dentro de uma tag pai, no caso 
    a 'div', ou seja, se os elementos estiverem soltos na página 
    sem nenhuma tag PAI um erro será detectado e nada será renderizado.
    
    É IMPORTANTE RESSALTAR TAMBÉM QUE AS CLASSES DAS TAGS NO JSX SERÃO 
    IDENTIFICADAS COMO 'className' E NÃO COMO NO HTML, class.
  */
  
  return (
    <div className="App"> 
      <h1>Olá React!</h1>
      <p>Olá, {newName}</p>
      <p>Soma (diretamente): {2 + 2}</p>
      <p>Soma (função): {soma(3, 5)}</p>
      <img src={url} alt="putting image of React" />
    </div>
  );
}

export default App;

