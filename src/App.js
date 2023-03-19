import React, { useState } from 'react'


const App = () => {
const [studentdata,setstudentdata]=useState({
  sname:'',
  sroll:'',
  sadd:'',
  sclass:'',
});
const [record,setrecord]=useState([]);

  const inputevent=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setstudentdata({...studentdata,[name]:value});
    console.log(studentdata);
  }
  const save = (event) => {
    event.preventDefault();
    const newrecord={...studentdata}
    setrecord([...record,newrecord]);
    setstudentdata({sname:'',sroll:'',sadd:"",sclass:''});

      }

//   const [name, setname] = useState();
//   const [fullname, setfullname] = useState();
//   const [rolno, setrolno] = useState();
//   const [Rollno, setRollno] = useState();
//   const [add, setadd] = useState();
//   const [Add, setAdd] = useState();
//   const [clas, setclas] = useState();
//   const [Clas, setClas] = useState();

//   const inputname = (event) => { setname(event.target.value) }
//   const inputroll = (event) => { setrolno(event.target.value) }
//   const inputadd = (event) => { setadd(event.target.value) }
//   const inputclass = (event) => { setclas(event.target.value) }


//   const save = (event) => {
//     event.preventDefault();
//     setfullname(name);
//     setRollno(rolno);
//     setAdd(add);
//     setClas(clas);
//   }
// const reset=()=>{
//   setname('');
//   setrolno('');
//   setadd('');
//   setclas('');
//   setfullname('');
//     setRollno('');
//     setAdd('');
//     setClas('');

// }
  return (

    <>
      <div className='main'>
        <h1>Student Form</h1>
        <div className='std_info'>

          <form onSubmit={save} >
            <label>Name</label><br></br>
            <input type="text" autoComplete='off' onChange={inputevent} value={studentdata.sname} name='sname' ></input><br></br><br></br>
            <label>Roll No</label><br></br>
            <input type="number" autoComplete='off' onChange={inputevent} value={studentdata.sroll} name='sroll' ></input><br></br><br></br>
            <label>Address</label><br></br>
            <input type="text" autoComplete='off' onChange={inputevent} value={studentdata.sadd} name='sadd' ></input><br></br><br></br>
            <label>Class</label><br></br>
            <input type="text" autoComplete='off' onChange={inputevent} value={studentdata.sclass} name='sclass' ></input><br></br><br></br>
            <button type="submit">Save</button>
          </form>
        </div>
        </div><br></br><br></br>

        <div >
          {
            record.map((val)=>{
              return(
                <>
                <div className='result'>
                <p>NAME:{val.sname}</p>
                <p>ROLL NO:{val.sroll}</p>
                <p>ADDRESS:{val.sadd}</p>
                <p>CLASS:{val.sclass}</p>
                </div>
                </>
              )
            })
          }
        
        </div>

      
    </>


  );


};

export default App;
