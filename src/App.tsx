import React,{useState} from 'react';
import './App.css';
import{ DndContext} from "@dnd-kit/core"
import Droppable from './Droppable';
import Draggable from './Draggable';

function App() {

  const [parent, setParent] = useState(null);
  const containers = ['React', 'Redux', 'TypeScript'];

//per ta bere dinamike
  // type Skill ={
  //   [skill : string] : {
  //     text: string,
  //     image: string
  //   }
  // }

  const logoMap : any = {

    React: { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
             text: "React is dope"
            },

    Redux : { image:"http://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png",
            text: "Redux is state management tool "
          },
    
    TypeScript:{ image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
                 text: " Make JS strongly typed"
               }
  }

  function handleDragEnd(event: any){
      const {over, active} = event;
      setParent(over ? active.id: null);
      }

 const draggableMarkup =(id: string) => (
          <Draggable id={id}> 
           
               <img className="app__logo" src={logoMap[id].image} alt=""/>
           
          </Draggable>
       );


  return (
    <div className="app">
    <DndContext onDragEnd={handleDragEnd}>  
      
      <div className="app__skills">
       {containers.map((id) => (id !== parent ? draggableMarkup(id) : null))}
      </div>

      {parent ? <h3 className="app__skillInstruction"> Click a logo to reset or drag another to view the animation</h3> : null}

        <Droppable key="abcdef" id="abcdef">
          {parent ===null ? (

            <div className="app__infoBox">
            <h3> Click & Drag a logo here to display more info... </h3>
            </div>
           
          ) : (
            <div className="app__infoBox"> 
              <img className="app__logo" 
                   src={logoMap[parent!].image }
                   alt=""
                />
              <h2> {parent} </h2>
              <h5>{logoMap[parent!].text}</h5>
            </div> 
          )} 

        </Droppable>
    </DndContext> 

    </div>
  );
}

export default App;
