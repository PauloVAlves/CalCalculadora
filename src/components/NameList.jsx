const NameList = ({foods}) => {
    return(
        <datalist className='name-list' id=''>
            {foods.map((food) => (
                <option data-id={food.id}>{food.description}</option>
            ))}
        </datalist>
    )
}

export default NameList;