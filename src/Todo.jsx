import React from "react";
import { ReactDOM } from "react";
import Buttons from "./Buttons";
import Input from "./Input";
import { Title } from "./Title";







function Todo() {
    const [state, setState] = React.useState('');
    const [array, setStates] = React.useState([]);
    

    return (
        <>


            <div class="container text-center" style={{ backgroundColor: 'white' }}>
                <div class="row row-cols-1">
                    <div class="col" style={{ margin: 5, padding: 10 }}>
                        <h3>TODO LIST</h3>
                    </div>
                    <hr />
                    <div class="container text-center col" style={{ margin: 10 }}>

                        <Input value={state} onChange={(event) => setState(event.target.value)} />
                        <Buttons name={'ADD'} onClick={() => { if (state.length) setStates(array.concat(state), setState('')) }} />
                    </div>
                    <div class="col text-center" style={{ padding: 3 }}>
                        {array.map((arr) =>


                            <Title value={arr} />



                        )}
                    </div>
                </div>
            </div>

        </>);


}
            export default Todo;