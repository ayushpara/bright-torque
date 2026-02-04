import { Plus_Jakarta_Sans } from 'next/font/google';
import React from 'react'

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});
const EditorialHtmlContent = ({content, style, className, id}) => {
  return (
  <div
  className={`editorial-detail ${jarkata.className} ${className}`}
  dangerouslySetInnerHTML={{ __html: content||"" }}
  style={style}
  id={id}
></div>
  )
}

export default EditorialHtmlContent