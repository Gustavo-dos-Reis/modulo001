const TemplateExpressions = () => {
    const name = "Gustavo";
    const data = {
        age: 21,
        job: "desempregado",
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}

export default TemplateExpressions