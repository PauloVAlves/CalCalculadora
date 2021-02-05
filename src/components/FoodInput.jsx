const FoodInput = () => {
    return(        
            <form>
                <label htmlFor="addName">Alimento:</label>
                <input type="text"/>
                <label htmlFor="addQuantity">Quantidade</label>
                <input type="number" name="add-quantity" id="add-quantity"/>
            </form>
    )
}

export default FoodInput;