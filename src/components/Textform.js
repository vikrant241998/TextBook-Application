import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('')

    const handleUpCase = ()=>{
        console.log("handleUpCase" + text);
        const newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoCase = ()=>{
        console.log("handleLoCase");
        const newText = text.toLowerCase();
        setText(newText);
    }
    
    const handleRmvCase = ()=>{
        console.log("handleRmvCase");
        const newText = text.split(/[ ] + /);
        setText(newText.join(' '));
    }
    
    const handleCpyCase = ()=>{
        let copyText = document.getElementById("textBox");
        copyText.select();
        document.execCommand("copy");
        document.getSelection().removeAllRanges()
    }  
    
    const handleClrCase = ()=>{
        console.log("handleClrCase");
        const newText = " ";
        setText(newText);
    }

    const handleOnchange = (event)=>{
        // console.log("handleOnchange");
        setText(event.target.value);
    }


  return (
      <>
      <div className="container my-3">
          <h4 className='my-3' style={{color : props.mode === 'light'?'black':'white'}}>{props.heading}</h4>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} id="textBox" rows="8" placeholder='Enter the text here' style={{backgroundColor : props.mode === 'light'?'#a5939317':'rgb(8 63 95)' , color : props.mode === 'light'?'black':'white'}}></textarea>
        </div>

        <button disabled = {text.length === 0} type="button" className="btn btn-secondary btn-sm mx-1 my-1" onClick={handleUpCase}  style={{backgroundColor : props.mode === 'light'?'#6c757d':'black', borderRadius: '5px'}}>Upper Case</button>
        <button disabled = {text.length === 0} type="button" className="btn btn-secondary btn-sm mx-1 my-1" onClick={handleLoCase}  style={{backgroundColor : props.mode === 'light'?'#6c757d':'black', borderRadius: '5px'}}>Lower Case</button>
        <button disabled = {text.length === 0} type="button" className="btn btn-secondary btn-sm mx-1 my-1" onClick={handleRmvCase} style={{backgroundColor : props.mode === 'light'?'#6c757d':'black', borderRadius: '5px'}}>Remove spaces</button>
        <button disabled = {text.length === 0} type="button" className="btn btn-secondary btn-sm mx-1 my-1" onClick={handleCpyCase} style={{backgroundColor : props.mode === 'light'?'#6c757d':'black', borderRadius: '5px'}}>Copy text</button>
        <button disabled = {text.length === 0} type="button" className="btn btn-danger btn-sm mx-1 my-1"    onClick={handleClrCase} style={{backgroundColor : props.mode === 'light'?'#red':'red', borderRadius: '5px'}}>Clear text</button>
    </div>

    <div className="container my-4">
        <h4 style={{color : props.mode === 'light'?'black':'white'}}>your text summary</h4>
        <p style={{color : props.mode === 'light'?'black':'white'}}> <b style={{color : props.mode === 'light'?'red':'yellow'}}>{text.split(' ').filter((element)=>{return element.length!==0}).length}</b> words and <b style={{color : props.mode === 'light'?'red':'yellow'}}>{text.length}</b> characters</p>

        <p style={{color : props.mode === 'light'?'black':'white'}}> <b style={{color : props.mode === 'light'?'red':'yellow'}}>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length}</b> minutes </p>

        <h4 style={{color : props.mode === 'light'?'black':'yellow'}}>Preview</h4>
        <p style={{color : props.mode === 'light'?'#0145ec':'white'}}>{text.length>0 ? text : "No text preview here"}</p>

    </div>
      </>
  )
}
