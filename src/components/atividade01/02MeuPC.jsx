const PlacaMae = ({nome, preco}) => {
    return <div>
        <p>Placa Mae</p>
        <h4>Nome: {nome}</h4>
        <h4>Preço: {preco}</h4>
    </div>
}

const Memoria = ({nome, preco}) => {
    return <div>
        <p>Memoria</p>
        <h4>Nome: {nome}</h4>
        <h4>Preço: {preco}</h4>
    </div>
}

const PlacaDeVideo = ({nome, preco}) => {
    return <div>
        <p>Placa De Video</p>
        <h4>Nome: {nome}</h4>
        <h4>Preço: {preco}</h4>
    </div>
}

export {PlacaMae, Memoria, PlacaDeVideo}