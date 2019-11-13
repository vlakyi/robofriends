import React from 'react';
//const Card = (props) => {
//const {name, email, id} = props;    // using destructurs from ES6. But instead of this we can use this one below
const Card = ({name, email, id}) => {       // we are using destructure insight parameters bracket, we are receiving props and making destructure insight brackets
    return(     // we can return only 1 element in this case we are returning one div and adding elements insight this div
        <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>  // in src ?200x200 means that we need picture 200px width and 200px height
    );
}       
export default Card;
// we have to import rect to use jsx syntax
// All js expresions like properties insight jsx has to use {} brackets