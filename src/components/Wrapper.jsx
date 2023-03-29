const Wrapper = (props) => {

  return (
    <div style={{ backgroundColor: "skyblue", height:"88vh" }}>
      <h1 style={{margin:0, textAlign:"center", display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}> {props.title} </h1>
    </div>
  );
};
export default Wrapper;
