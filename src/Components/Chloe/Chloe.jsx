import React from "react";
import {Link} from 'react-router-dom';
import './Chloe.css';
import openAI from "openai";

const ChloeVersionLinguistics=()=> {

//     const openai = new OpenAI({
//         apiKey: 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,
//       });

//       const response =  openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             "role": "user",
//             "content": ""
//           }
//         ],
//         temperature: 1,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//       });

    
      

    return (
        <div className="chloe-navbar-emulated">
         
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
               
                <li>
                    <Link to="/posts">AI Exploit </Link>
                </li>
                <li>
                    <Link to="/users">Exploit Engineer</Link>
                </li>
                <li>
                    <Link to="/chloe">Interact with Chloe</Link>
                </li>
                <h3 className="navbar-heading"> MMAA </h3>

           

            </ul>
            
        </div>
    )
}
export default ChloeVersionLinguistics;