import '../App.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Paper, Typography, TextField, Button, TextareaAutosize } from '@mui/material';


export default function AddProject() {

  const [model, setModel] = useState<any>({});
  const Api = "https://jsonplaceholder.typicode.com/comments";
  const params = useParams();

  const getPostById = () => {
    axios
      .get(`${Api}/${params.id}`)
      .then((res) => {
        console.log(res);
        setModel({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePost = () => {
    axios
      .put(`${Api}/${params.id}`, model)
      .then((res) => {
        console.log("Post Updated Successfully", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitPost = () => {
    model.userId = 11;
    axios
      .post(Api, model)
      .then((res) => {
        console.log("Post Added Successfully", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (params.id) {
      getPostById();
    }
  }, []);




  return (

    <>


      <div className="container">

        <Paper elevation={3} className="box">
          <Typography variant="h5">Add Project</Typography>
          <form className="form">
            <TextField
              value={model.name}
              onChange={(e) => setModel({ ...model, name: e.target.value })}
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              value={model.email}
              onChange={(e) => setModel({ ...model, email: e.target.value })}
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              margin="normal"
            />

            <TextareaAutosize
            value={model.body}
              onChange={(e) => setModel({ ...model, body: e.target.value })}
              minRows={2} 
              maxRows={5} 
              placeholder="Body"
              style={{ width: '100%', padding: '8px',marginTop:'12px', border: '1px solid #ccc' }}
            />

            <div>
              {params.id ? (
                <Button className='mt-3' variant="outlined" onClick={updatePost}>Update</Button>
              ) : (
                <Button className='mt-3' variant="outlined" onClick={submitPost}>Submit</Button>
              )}
            </div>
          </form>
        </Paper>
      </div>



    </>
  )

}