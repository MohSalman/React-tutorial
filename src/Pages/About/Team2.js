const Team2 = ({itemsProps}) => {
    return (
        <>
        {
            itemsProps.map((item)=>(
                <li>{item.name}</li>
            ))
        }
        </>
    )
}

export default Team2