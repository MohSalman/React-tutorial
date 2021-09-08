const Team2 = ({items}) => {
    return (
        <>
        {
            items.map((item)=>(
                <li>{item.name}</li>
            ))
        }
        </>
    )
}

export default Team2