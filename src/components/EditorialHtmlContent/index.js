import React from 'react'

const EditorialHtmlContent = ({editorial}) => {
  return (
    <div>
         <div dangerouslySetInnerHTML={{__html:editorial.content}} className='editorial-detail'/>
    </div>
  )
}

export default EditorialHtmlContent