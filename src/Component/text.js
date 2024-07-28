import React ,{useState} from 'react'




export default function Text(props){   
const [text,settext]=useState('');
const Updatechange=(event)=>{
        settext(event.target.value);
}
const Uphandler=()=>{
    let uppertext=text.toLocaleUpperCase();
    settext(uppertext);
    props.showalert("Converted to upper case","success")
}
const Lohandler=()=>{
    let uppertext=text.toLocaleLowerCase();
    settext(uppertext);
    props.showalert("Converted to lower case","success")
}
const Clearhandle =()=>{
  settext(" ")
  props.showalert("Cleard text","success")
}
return(
    <>
  <div className="container" style={{color:props.mode==='dark'?'white':'#0a0d3a'}} >
    <label htmlFor="exampleFormControlTextarea1">PUT YOUR TEXT HERE</label>
    <textarea className="form-control pl-4 pr-4 mx-2"  id="exampleFormControlTextarea1" rows="8" style={{backgroundColor: props.mode==='dark'? 'grey':'white',color:props.mode==='dark'?'white':'#0a0d3a'}} value={text} onChange={Updatechange}></textarea>
    <button type="submit" className="btn btn-primary" onClick={Uphandler}>
          Convert to Uppercase
        </button>
        <button type="submit" className="btn btn-primary ms-2" onClick={Lohandler}>
          Convert to Lowercase
        </button>
        <button type="submit" className="btn btn-primary ms-2" onClick={Clearhandle}>
          Clear text
        </button>
  </div>
  <div className='container my-2' style={{color:props.mode==='dark'?'white':'#0a0d3a'}} >
<h2>Your text summery</h2>
Number of text {text.length} and number of char {text.split(" ").length} ,{0.008*text.split(" ").length} minutes to read.
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in above text box to preview here"}</p>
  </div>

    </>
)
}