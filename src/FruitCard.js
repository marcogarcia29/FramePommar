import { Link } from "react-router-dom"

const FruitCard = (props) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
    }

    return (
        <Link to={`${props.id}`}> <div className='itens' key={props.id}>
            <img src={props.pictureUrl}></img>
            <h3>{props.name}</h3>
            <p>{formatPrice(props.unitPrice)}</p>
        </div>
        </Link>

    )
}

export default FruitCard;