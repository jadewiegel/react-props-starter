// function CreatureList(props)
function CreatureList({creatureListProp}) {

    return (
    <>
        {/* stringify splats on DOM to show data  */}
        {/* {JSON.stringify(props)}     */}
        <h2>All Creatures</h2>  
        <ul>
            {creatureListProp.map(creature => 
            (<li key={creature.id}>{creature.name} is from {creature.origin}</li>)
            )}
        </ul>         
    </>
    )
}

export default CreatureList;