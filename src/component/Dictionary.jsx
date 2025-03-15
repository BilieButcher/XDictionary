import react, { useState } from "react";

const Dictionary = () => {



    const [dictionary, setDictionary] = useState(
        [
        
            { word: "React", meaning: "A JavaScript library for building user interfaces." },
        
            { word: "Component", meaning: "A reusable building block in React." },
        
            { word: "State", meaning: "An object that stores data for a component." }
        
        ]
        );

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const [meaning, setMeaning] = useState("");



    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (e) => {
        
        var wordInQuestion = dictionary.find((item) => item.word.toLowerCase() === value.toLowerCase());
        if(wordInQuestion){
            setError(false);
            setMeaning(wordInQuestion.meaning);
        }else{
            setError(true);
        }
        e.preventDefault();
    }

    return (
        <div>
        
        <h1>Dictionary App</h1>
        <form>
            <input required="true" type="text" onChange={(e) => handleChange(e)}></input>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </form>
        <h3>Definition:</h3>
        {error ? <p>Word not found in the dictionary.</p> : <p>{meaning}</p>}
        </div>
    )
}
export default Dictionary;