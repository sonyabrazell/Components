import React from 'react';

const NamesList = (props) => {
    let returnedName = props.name.map(name => {
        return {name}
    })
   return(
       <div>
           <ul>
               {returnedName}
           </ul>
       </div>
   );
}

export default NamesList;