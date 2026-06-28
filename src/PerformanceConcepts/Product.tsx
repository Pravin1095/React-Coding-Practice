interface ProductProps{
    changeTheme : ()=> void;
}

const Product = ({changeTheme} : ProductProps)=>{
    return(
<>
<button onClick={changeTheme}></button>
</>
    )
}

export default Product