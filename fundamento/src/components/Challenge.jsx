const Challenge = () => {

    const number1 = 20;
    const number2 = 1;
   

    return(
        <div>
            <p>Primeiro número: {number1}</p>
            <p>Segundo número: {number2}</p>
            <button onClick={() => {console.log(number1 + number2)}}>
                    deve ser mais ou menos isso
                </button>
        </div>
    );
}

export default Challenge;