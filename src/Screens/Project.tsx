import '../App.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from '@mui/material';




export default function Project() {

    const [listData, setListData] = useState<any>([]);

    const navigate = useNavigate();

    const deletePost = (id: any) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(() => {
                console.log("Post Deleted Successfully");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let getData = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                setListData([...res.data]);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return <>
        <div >

            <div >
                <h1> Comments </h1>

                <button className="my-4 px-4 py-2 rounded-pill ms-5 bg-info " onClick={() => {
                    navigate("/add")
                }}>
                    Click To ADD ▶
                </button>
            </div>
            {listData && Array.isArray(listData) && listData.length > 0
                && listData.map((x: any, i: any) => (
                    <div className="p-2 m-4 border border-dark rounded" key={i}>

                        <h3>NAME :    {x.name}</h3>
                        <p> <b>EMAIL :   </b>{x.email}</p>
                        <p><b>BODY :   </b>{x.body}</p>
                        <p> <b>POST ID :   </b>{x.postId}</p>

                        <Button 
                        variant='outlined' 
                        color='secondary'
                        className=' mx-5'>
                            <IconButton
                                onClick={() => deletePost(x.id)}
                                color="error"
                                aria-label="delete"

                            >
                                <DeleteIcon />
                            </IconButton>
                        </Button>
                        <Button 
                        variant='outlined' 
                        color='secondary'
                        className=' mx-3'>
                        <IconButton
                            onClick={() => {
                                navigate(`/add/${x.id}`);
                            }}
                            color="primary"
                            aria-label="delete"
                        >
                            <EditIcon />
                        </IconButton>
                        </Button>

                    </div>
                ))}


        </div>
    </>



}
