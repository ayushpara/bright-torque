import { Plus_Jakarta_Sans } from 'next/font/google';
import React from 'react'

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});
const EditorialHtmlContent = ({editorial}) => {
  return (
  <div
  className={`editorial-detail ${jarkata.className}`}
  dangerouslySetInnerHTML={{ __html: editorial?.content||"" }}
></div>
  )
}

export default EditorialHtmlContent