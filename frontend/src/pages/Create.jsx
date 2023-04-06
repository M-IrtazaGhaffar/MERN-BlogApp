import React from "react";
import JoiditEditor from "jodit-react";
import { useRef, useState } from "react";

function Create() {
  const editorRef = useRef(null);
  const [Content, setContent] = useState("");

  const [Img, setImg] = useState("");
  const inputRef = useRef(null);

  const [Title, setTitle] = useState("");

  const [Category, setCategory] = useState('')

  const convert = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImg(reader.result.toString());
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-5">
      <p className="text-red-500">All the feilds are required*</p>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Enter Title here"
          maxLength={150}
          className="w-full rounded-md"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className={`text-xs p-2`}>{Title.length}/150 characters</p>
      </div>
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-red-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
        onChange={(e) => setCategory(e.target.value)}
      >
        <option selected>Choose a Category</option>
        <option value="Tech">Tech</option>
        <option value="Nature">Nature</option>
        <option value="Beauty">Beauty</option>
        <option value="Politics">Politics</option>
      </select>

      <input type="file" onChange={convert} required />
      {Img ? <img src={Img} alt="Image" width={400} /> : ""}

      <div>
        <JoiditEditor
          ref={editorRef}
          value={Content}
          onChange={(newData) => setContent(newData)}
        />
        <p className={`text-xs p-2`}>{Content.length} characters</p>
      </div>
    </div>
  );
}

export default Create;
