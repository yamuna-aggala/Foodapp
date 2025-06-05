//https://api.restful-api.dev/objects
import React, {use, useEffect, useState} from "react";
import axios from "axios";
import { Container,
    Typography,
    CircularProgress,
    ListItem,
    ListItemText,
    Box,
    paper,
    List
        } from "@mui/material";

const  APIGetCall = () => {
const[data, setData] = useState([]);
 const [loading, setLoading] = useState(true);
    useEffect(() => {
        const apiURL = 'https://api.restful-api.dev/objects';
        axios.get(apiURL)
        .then(response => {
            console.log('data fetched successfully:',response.data);
            setData(response.data)
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data:',error)
            setLoading(false);
        });
    },[]);
    return(
        <div>
            <Container
                maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant = 'h1'>API GET CALL</Typography>
            {
                loading ? (
                    <Box display="flex" justifyContent="center" mt={4}
                    >
                        <CircularProgress />
                    </Box>
                ):(
                    <paper elevation={3} sx={{ p: 3}}>
                        <List>{
                            data.map((item) => (
                                <ListItem key={item.id}>
                                    <ListItemText primary={item.name}
                                    //secondary={'Color: ${item.data.color}, Capacity: ${item.data.capacity}'}
                                    >

                                    </ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </paper>
                )
            }
          
            
            </Container>
        </div>
    );
}

export default APIGetCall;