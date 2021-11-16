const FruitCard = (props) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
    }
    return (
        <div className='itens' key={props.id}>
            <img src={props.pictureUrl}></img>
            <h3>{props.name}</h3>
            <p>{formatPrice(props.unitPrice)}</p>
        </div>


    )
}

export default FruitCard;