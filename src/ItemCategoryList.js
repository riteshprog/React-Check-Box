import React from 'react';

export default function ItemCategoryList(props) {

  return (
         <div>
              {props.checkedListAll.length===0?<h4 className="child-coponent">No Item Selected</h4>:props.checkedListAll.map((cat) =>{
                  console.log(cat)
            return (
            <p key={cat}>{cat} <span className="float-right">&times;</span></p>
            )
          })}
</div>
  )
}
