type Greetprops={
    name?:string,
}
  

export const Greet = ({name}:Greetprops) => {
    return (
      <div>
       Hello {name? name:"Guest"}
      </div>
    )
  }
  
  export default Greet
  