import React from "react"
import FileUploadComponent from "./FileUploadComponent";
import PuzzleSizeComponent from "./PuzzleSizeComponent";
import TileComponent from "./TileComponent";
const App = () =>{    
    return(
        <React.Fragment>
            <FileUploadComponent/>
            <PuzzleSizeComponent/>
            <TileComponent/>
        </React.Fragment>
    )
}

export default App;