import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    return ( 
        <div>
            <h2 className="ItemListTitulo">Tienda de indumentaria de la NBA</h2>
            <h4 className="ItemListTitulo">{greeting}</h4>
        </div>
     );
}
 
export default ItemListContainer;