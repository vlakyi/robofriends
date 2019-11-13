import React, {Fragment} from 'react';
import Card from './Card';
const CardList = ({robots}) => {
    return (        // because everething insight there is java script we can put insight function and it should work
        <Fragment>  
      {
          robots.map((user, i) => {
            return (
            <Card                            // can be in 1 line, we splitted this just to make it look prettier
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
            />  
            // we have to add key elemeent to make React DOM work correctly, so if we would like to delete one element it would know which one we would like to delete
            );
        })
      };
     </Fragment>
    );
}
export default CardList;