import { createContext } from "react"; 

const  ReactContext = createContext({
    count: 1, 
    updateCount: () => {
        this.count = this.count+1
    }
})

export default ReactContext ;