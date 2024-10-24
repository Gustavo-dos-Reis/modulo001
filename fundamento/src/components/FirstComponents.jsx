//arquivos de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {

    return (
        
        <div>
            {/*Algum comentário*/}
            <h1>Meu primeiro componente</h1>
            <p className="teste">meu texto</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;