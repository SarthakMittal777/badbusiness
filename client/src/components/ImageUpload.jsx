import { useState } from 'react';

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-16 h-16 rounded-full bg-gray-100 border">
      {image ? (
        <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-full" />
      ) : (
        <label htmlFor="fileInput" className="absolute inset-0 flex items-center justify-center cursor-pointer">
          <span className="text-3xl">+</span>
        </label>
      )}
      <input type="file" id="fileInput" className="hidden" onChange={handleImageChange} />
    </div>
  );
}

export default ImageUploader;
