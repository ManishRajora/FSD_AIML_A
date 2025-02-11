import React from "react"
import Child1 from './Child1'

const Parent = () => {
    const stu = {name: "XYZ", age: 25};
    return (
        <StudentContext.Provider value={stu}>
            <div>
                <h1>Parent Component</h1>
                <Child1/>
            </div>
        </StudentContext.Provider>
    )
}
export {StudentContext}
export default Parent