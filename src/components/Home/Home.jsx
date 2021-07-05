import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import React from "react";

const Home = (props) =>
{


    return (   <React.Fragment><form onSubmit={props.handleSet}>
        <label>
            Set Number:
            <input
                type="text"
                name="name"
                value={props.number}
                onChange={ e => props.setNumber(e.target.value) } />
        </label>
        <input type="submit" value="Set Number" />
    </form>
        <button
            onClick={props.handleGet}
            type="button" >
            Get Number
        </button>
        { props.getNumber }
        {/*end web3component*/}

        <button
            onClick={props.handleGetSupply}
            type="button" >
            Get Total Supply
        </button>
        { props.getSupply }


        <div>
            <nav>
                <Link to="/">
                    <Button>Generate Citation!</Button>
                </Link>
                {/*lem_help: this button is useless, but it should check if user is signed in, if they are they can cite the paper and transfer the citecoin*/}
            </nav>
        </div></React.Fragment>)
}

export default Home
