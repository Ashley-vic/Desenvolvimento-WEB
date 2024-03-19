const PlacaMae = ({nome, preco}) => {
    return <div>
        <h2>Placa Mae</h2>
        <h4>Nome: {nome}</h4>
        <h4>Preço: {preco}</h4>
    </div>
}

const Memoria = ({nome, preco}) => {
    return <div>
        <h2>Memoria</h2>
        <h4>Nome: {nome}</h4>
        <h4>Preço: {preco}</h4>
    </div>
}

const PlacaDeVideo = ({nome, preco}) => {
    return <div>
        <h2>Placa De Video</h2>
        <h4>Nome: {nome}</h4>
        <h4>Preço: {preco}</h4>
    </div>
}

export {PlacaMae, Memoria, PlacaDeVideo}