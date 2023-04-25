const Counter = ({ reiniciar, sumar, restar, counter }) => {
  return (
    <div>
      <h1>Este es el contador</h1>
      <button onClick={sumar}>Sumar</button>
      <h3>{counter}</h3>
      <button onClick={restar}>Restar</button>
      <button onClick={reiniciar}>Reiniciar contador</button>
    </div>
  );
};

export default Counter;
