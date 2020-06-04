import React from 'react';

export default function ItemCategoryList(props) {

  return (
         <div>
              {props.checkedListAll.map((cat) =>{
                  console.log(cat)
            return (
            <p key={cat}>{cat} <span className="float-right">&times;</span></p>
            )
          })}
</div>
  )
}
