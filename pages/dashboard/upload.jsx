import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

export default function Upload() {
  const imageFileRef = useRef(null)
  const [uploadData, setUploadData] = useState({
    image: null,
    categories: [],
    content: '',
  })

  const categories = [
    { id: 1, value: 'News' },
    { id: 2, value: 'Sports' },
    { id: 3, value: 'Entertainment' },
    { id: 4, value: 'Technology' },
    { id: 5, value: 'Business' },
  ]
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ]

  function handelImageSelect() {
    const reader = new FileReader()
    if (!imageFileRef.current.files[0]) return
    const file = imageFileRef.current.files[0]
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setUploadData((ps) => ({ ...ps, image: reader.result }))
    }
  }

  return (
    <form className="p-4 rounded-sm grid grid-cols-1 lg:grid-cols-2 gap-4 bg-sepia-300 bg-opacity-50">
      {/* Image */}
      <h3 className=" text-3xl lg:col-span-2 mb-3">Upload New Article</h3>
      <div className="lg:row-span-3">
        <h5 className="text-xl mb-1">
          Featured Image{' '}
          <span className=" text-sm">(suggested ratio is 2x1)</span>
        </h5>
        <div>
          <div className="w-full overflow-hidden rounded-sm">
            {uploadData.image ? (
              <img
                src={uploadData.image}
                alt="selected image"
                className=" rounded-md bg-cover w-full"
              />
            ) : (
              <img
                src="/assets/images/news-image-2x1.svg"
                alt="upload image"
                className="bg-cover object-cover w-full h-full sepia-25"
              />
            )}
          </div>
          <label htmlFor="f_image" className="sepia-btn mt-2">
            Select featured image
          </label>
          <input
            onChange={handelImageSelect}
            ref={imageFileRef}
            className="hidden"
            type="file"
            id="f_image"
            accept="image/png, image/jpeg, image/jpg"
          />
        </div>
      </div>
      {/* Title */}
      <div className="">
        <h5 className=" text-xl mb-1">Title</h5>
        <div>
          <label htmlFor="Title"></label>
          <textarea
            name=""
            className="form-none w-full rounded-sm bg-sepia-50"
            id="Title"
            rows="3"
          ></textarea>
        </div>
      </div>
      {/* Description */}
      <div className="">
        <h5 className=" text-xl mb-1">Description</h5>
        <div>
          <label htmlFor="Description"></label>
          <textarea
            name=""
            className="form-none w-full bg-sepia-50"
            id="Description"
            rows="5"
          ></textarea>
        </div>
      </div>
      {/* Tags */}
      <div className="">
        <h5 className=" text-xl mb-1">Categories</h5>
        <div>
          <label htmlFor="Categories"></label>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => {
              return (
                <div key={category.id} className="flex gap-2 items-center">
                  <input
                    className="form-none accent-sepia-800"
                    type="checkbox"
                    id={category.id}
                    name={category.value}
                  />
                  <label htmlFor={category.id}>{category.value}</label>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* Quill */}
      <div className=" bg-sepia-50 p-2 rounded-sm text-center lg:col-span-2">
        <h5 className=" text-xl mb-1">Article</h5>
        <QuillNoSSRWrapper
          className=" min-h-screen form-none"
          modules={modules}
          formats={formats}
          theme="snow"
        />
      </div>
      {/* Save */}
      {/* Submit */}
    </form>
  )
}
