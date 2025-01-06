import { useState } from "react";
import TipTap from "../TipTap"
import ShowPost from "./ShowPost";


const NewPost = () => {
    const [htmlContent, setHtmlContent]=useState('')
    const handleEditorContentSave=(html)=>{
setHtmlContent(html)
    }
  return (
    <div>
     <TipTap onhandleEditorContentSave={handleEditorContentSave}/>
     <hr />
     <ShowPost content={htmlContent}/>
    </div>
  )
}

export default NewPost
