import { createContext } from "react"; 

export default ReactContext = createContext({
    count: 1, 
    updateCount: () => {
        this.count = this.count+1
    }
})