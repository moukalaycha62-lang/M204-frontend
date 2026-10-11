import { useState } from "react"
import StudentCard from "./StudentCard"

export default function Content(){
    const[id,setId]=useState()
    const[prenom,setprenom]=useState()
    const[note,setnote]=useState()
    const [etudiants,setEtudiants]=useState([
        { id:1,prenom:"fadwa",note:9},
        { id:2,prenom:"khadija",note:17},
        { id:3,prenom:"sara",note:19},
        { id:4,prenom:"hiba",note:10},
        { id:5,prenom:"douae",note:13},
    ])

    function ajouter(){
        const newEtudiant={ id:id,prenom:prenom,note:note}
        setEtudiants([...etudiants,newEtudiant])
    }

    function modifier(){
        const nouveauTableau = etudiants.map(function(item){
            if(item.id == id){
                return {id:id, prenom:prenom, note:note}
            }
            return item
        })
        setEtudiants(nouveauTableau)
    }

    function supprimer(){
        const nouveauTableau = etudiants.filter(function(item){
            return item.id != id
        })
        setEtudiants(nouveauTableau)
    }

    return(
        <>
        <h2 className="text-3xl font-bold">
        Liste des étudiants
        </h2>

        <div className="mt-6 grid grid-cols-3 gap-5">
        {etudiants.map(function(item){
            return <StudentCard prenom={item.prenom} note={item.note}/>
        })}
        </div>

        <div>
            <input onChange={(e)=>setId(e.target.value)} type="number" placeholder="Id" />
            <input onChange={(e)=>setprenom(e.target.value)} type="text" placeholder="prenom" />
            <input onChange={(e)=>setnote(e.target.value)} type="number" placeholder="note" />
        </div>

        <div>
            <button onClick={ajouter}>Ajouter</button>
            <button onClick={modifier}>Modifier</button>
            <button onClick={supprimer}>Supprimer</button>
        </div>
        </>
    )
}