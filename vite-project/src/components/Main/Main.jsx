import Welcome from "../Welcome/welcome"

const Main = () => {

    const names = ["Gunnar", "Marlene", "Jannick", "HC", "Heinz"]

    const randomIndex = Math.floor(Math.random() * names.length);

    const randomName = names[randomIndex];



    return(
        
        <Welcome name={randomName} />
        
        
    )
}

export default Main