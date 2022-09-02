import { useState } from "react";


export const Search = (props) => {

    let races = ["Aqua","Beast","Beast-Warrior",
    "Creator-God","Cyberse","Dinosaur","Divine-Beast","Dragon","Fairy",
    "Fiend","Fish","Insect","Machine","Plant","Psychic","Pyro","Reptile","Rock",
    "Spellcaster","Thunder","Warrior","Wyrm","Zombie","Sea Serpent","Winged Beast",
    "Normal","Field","Equip","Continuous","Quick-Play","Ritual","Counter"];

    let types = ["Effect Monster","Flip Effect Monster","Flip Tuner Effect Monster",
    "Gemini Monster","Normal Monster","Normal Tuner Monster","Pendulum Effect Monster",
    "Pendulum Flip Effect Monster","Pendulum Normal Monster","Pendulum Tuner Effect Monster",
    "Ritual Effect Monster","Ritual Monster","Skill Card","Spell Card","Spirit Monster",
    "Toon Monster","Trap Card","Tuner Monster","Union Effect Monster","Fusion Monster",
    "Link Monster","Pendulum Effect Fusion Monster","Synchro Monster","Synchro Pendulum Effect Monster",
    "Synchro Tuner Monster","XYZ Monster","XYZ Pendulum Effect Monster"];

    let [selectedRace, setSelectedRace] = useState("");
    let [selectedType, setSelectedType] = useState("");

    return (
        <div className="search-container">
            <p className="title-text">Races of cards</p>
            <div>
                {races.map((race) => {
                    return (
                    <div className={(selectedRace === race)? 'selected-card' : 'card-text'}
                        onClick={()=>{setSelectedRace(race)}}>
                        {race}
                    </div>)
                })}
            </div>
            <p className="title-text">Types of cards</p>
            <div>
                {types.map((type) => {
                    return (
                    <div className={(selectedType === type)? 'selected-card' : 'card-text'}
                        onClick={()=>{setSelectedType(type)}}>
                        {type}
                    </div>
                    )
                })}
            </div>
            <button className="login-btn">Start searching</button>
        </div>
    )
}