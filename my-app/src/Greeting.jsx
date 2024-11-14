const Greeting=({name,age})=>{
    return(
     <div>
        <h1>{name} age is {age}</h1>
     </div>
    );
}
Greeting.defaultProps={
    name: "XYZ",
    age: 20
}
export default Greeting;