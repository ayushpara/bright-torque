import React from 'react'

const EditorialHtmlContent = ({editorial}) => {
  return (
  <div
  className="editorial-detail"
  dangerouslySetInnerHTML={{ __html: editorial?.content||"" }}
></div>
  )
}

export default EditorialHtmlContent