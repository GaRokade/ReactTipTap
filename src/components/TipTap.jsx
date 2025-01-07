import '../App.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link';

import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';



const extensions = [
  StarterKit,
  Underline,
  Link.configure({
    openOnClick: true,
    autolink: true,
    linkOnPaste: true,
  }),
  
  Table.configure({
    resizable: true,
  }),
  TableRow,
  TableHeader,
  TableCell,
  Highlight.configure({
    multicolor: true,
  }),
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  Placeholder.configure({
    placeholder: 'Start typing...',
  }),
  
  
  
];


const content=` `


const TipTap = ({onhandleEditorContentSave}) => {
  const [wordCount, setWordCount] = useState(0);
    const editor = useEditor({
        extensions,
        content,
        onUpdate: ({ editor }) => {
          const text = editor.getText();
          const count = text.trim().split(/\s+/).filter(Boolean).length;
          setWordCount(count);
        },
    })
    if(!editor){
        return null
    }
    const handleEditorContent=()=>{
        const html =editor.getHTML();
        onhandleEditorContentSave(html);
    }
  return (
    <div className='container'>
        
      <div className='toolbar'>
        <button onClick={()=>editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()} className={editor.isActive('bold')?'is-active':''}><strong><i className="fa-solid fa-bold"></i></strong></button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
         <i className="fa-solid fa-italic"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleUnderline()
              .run()
          }
          className={editor.isActive('underline') ? 'is-active' : ''}
        >
        <u>U</u>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <s>S</s>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={editor.isActive('code') ? 'is-active' : ''}
        >
        <i className="fa-solid fa-code"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
         <i className="fa-solid fa-paragraph"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
        >
          H4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
        >
          H5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
         <i className="fa-solid fa-list"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <i className="fa-solid fa-list-ol"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >
          Code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          bq
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          Hr
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          Hardbreak
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          <i className="fa-solid fa-arrow-rotate-left"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
         <i className="fa-solid fa-arrow-rotate-right"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().setLink({ href: 'https://example.com' }).run()}
          className={editor.isActive('link') ? 'is-active' : ''}
        >
          <i className="fa-solid fa-link"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
        >
          <i className="fa-solid fa-unlink"></i>
        </button>
        

        <button
          onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3 }).run()}
        >
          Table
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive('highlight') ? 'is-active' : ''}
        >
          <i className="fa-solid fa-highlighter"></i>
        </button>
        

  {/* Text Alignment Button */}
  <button
    onClick={() => editor.chain().focus().setTextAlign('left').run()}
    className={editor.isActive('textAlign') ? 'is-active' : ''}
  >
    LeftAlign
  </button>
  <button
    onClick={() => editor.chain().focus().setTextAlign('center').run()}
    className={editor.isActive('textAlign') ? 'is-active' : ''}
  >
    CenterAlign
  </button>
  <button
    onClick={() => editor.chain().focus().setTextAlign('right').run()}
    className={editor.isActive('textAlign') ? 'is-active' : ''}
  >
    RightAlign
  </button>

  
      </div>
      <div className='editor-container'>
        <EditorContent editor={editor}   />
      </div>
      <button onClick={handleEditorContent} className='save-button'>Save</button>
      <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
        Word Count: {wordCount}
      </div>
    </div>
  )
}
TipTap.propTypes = {
  onhandleEditorContentSave: PropTypes.func.isRequired, // Validate it as a required function
};
export default TipTap
