import React from 'react'; 

export default function Tag(  { tags } ) {

      return (
        <li className="tag-wrapper__li">
          <p className="tag-wrapper__indi">
            <small className="tag-wrapper__small">{tags}</small>
          </p>
        </li>
      );

}
