//IMPORT
import { useState } from 'react';
import Question from './data/faqs.json'

function FAQ() {
    //states, data , function or methods
    const [enteredKeywords, setEnteredKeyWords] = useState("");
    // UI rendering

    return(
        <>
         <div style = {{minHeight: '60vh', backgroundColor: 'yellow'}}>
            <h1>Frequently Asked Questions </h1>

            {/*Search Box*/}
            <div className='row'>
                <input type="text" className='col-11 m-3' name="search" placeholder='Keywords'
                    onChange={(e) => {setEnteredKeyWords(e.target.value)}}
                ></input>
            </div>
            {/*Loop through all question in Questions and display them here*/}
            {
                //filter question
                Question.filter(
                    question => question.question.toLowerCase().includes(enteredKeywords.toLowerCase()) ||
                                question.answer.toLowerCase().includes(enteredKeywords.toLowerCase())
                ).map(
                    (question, index) => {
                        return(
                            <div key={index}>
                                <h4>{question.question}</h4>
                                <p>{question.answer}</p>
                            </div>
                        )
                    }
                )
            }

         </div>
        </>
    );
}

export default FAQ;