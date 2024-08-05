import React, { useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import facilities from '../addItems/data.js'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';
import app from '../../../FireBase/fire.config.js';

const AddItems = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [amenities, setAmenities] = useState([]);
  const [type, setType] = useState("");
  const [files, setFiles] = useState([]);
  const [formdata, setFormdata] = useState({
    imageUrl: []
  });

  const handleUploadImage = () => {
    if (files.length > 0 && files.length < 7) {
      const promises = [];
      for (let i = 0; i < files.length && i < 7; i++) {
        promises.push(storageImage(files[i]));
      }
      return Promise.all(promises)
        .then((urls) => {
          setFormdata((prevFormdata) => ({
            ...prevFormdata,
            imageUrl: prevFormdata.imageUrl.concat(urls)
          }));
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Image Upload Failed',
            text: 'Please make sure each image is less than 2MB.',
          });
          throw new Error('Image upload failed');
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Image Selection',
        text: 'Please select between 1 and 6 images to upload.',
      });
      return Promise.reject('Invalid image selection');
    }
  };

  const storageImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (error) => {
          reject('Error uploading file:', error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadUrl) => {
              resolve(downloadUrl);
            });
        }
      );
    });
  };

  const handleSelectAmenities = (facility) => {
    if (amenities.includes(facility)) {
      setAmenities((prevAmenities) => prevAmenities.filter((option) => option !== facility));
    } else {
      setAmenities((prev) => [...prev, facility]);
    }
  };

  const onSubmit = async (data) => {
    try {
      await handleUploadImage();

      data.amenities = amenities;
      data.image = formdata.imageUrl;

      const response = await fetch(`http://localhost:3000/carpost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();

      if (responseData.acknowledged === true) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Data is submitted',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: 'An error occurred while submitting the data.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message,
      });
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Add Car Items</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Row 1 */}
          <div className="flex gap-2">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[20px]">Car **</span>
              </label>
              <input
                {...register("carName", { required: true })}
                type="text"
                placeholder="Car Name"
                className="input input-bordered w-full"
              />
              {errors.carName && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[20px]">Location**</span>
              </label>
              <input
                {...register("location", { required: true })}
                type="text"
                placeholder="Location*"
                className="input input-bordered w-full"
              />
              {errors.location && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[20px]">Country **</span>
              </label>
              <input
                {...register("country", { required: true })}
                type="text"
                placeholder="Country *"
                className="input input-bordered w-full"
              />
              {errors.country && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-[20px]">Title**</span>
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="Title*"
                className="input input-bordered w-full"
              />
              {errors.title && <span className="text-red-500">This field is required</span>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-3">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[20px]">City**</span>
              </label>
              <input
                {...register("city", { required: true })}
                type="text"
                placeholder="City*"
                className="input input-bordered w-full"
              />
              {errors.city && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[20px]">Mileage**</span>
              </label>
              <input
                {...register("mileage", { required: true })}
                type="text"
                placeholder="Mileage*"
                className="input input-bordered w-full"
              />
              {errors.mileage && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[20px]">Seat *</span>
              </label>
              <input
                {...register("seat", { required: true })}
                type="text"
                placeholder="Seat*"
                className="input input-bordered w-full"
              />
              {errors.seat && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-[20px]">Colour **</span>
              </label>
              <input
                {...register("colour", { required: true })}
                type="text"
                placeholder="Colour "
                className="input input-bordered w-full"
              />
              {errors.colour && <span className="text-red-500">This field is required</span>}
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex gap-3">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[20px]">Price **</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
              {errors.price && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[20px]">Ratings **</span>
              </label>
              <input
                {...register("ratings", { required: true })}
                type="text"
                placeholder="Ratings*"
                className="input input-bordered w-full"
              />
              {errors.ratings && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[20px]">Discount**</span>
              </label>
              <input
                {...register("discount", { required: true })}
                type="text"
                placeholder="Discount*"
                className="input input-bordered w-full"
              />
              {errors.discount && <span className="text-red-500">This field is required</span>}
            </div>
          </div>

          {/* Car Description */}
          <div className="mt-3 w-3/5">
            <label className="label">
              <span className="label-text text-[20px]">Car Description*</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Write Car Description here"
              className="textarea w-4/5 h-[100px]"
            ></textarea>
            {errors.description && <span className="text-red-500">This field is required</span>}
          </div>

          {/* Car Facilities */}
          <h1 className="text-4xl mt-3 mb-5">Car Facilities</h1>
          <div className="flex flex-wrap">
            {facilities?.map((item, index) => (
              <div
                className={`type ${type === item.name ? "selected" : ""} p-3`}
                key={index}
                onClick={() => {
                  setType(item.name);
                  handleSelectAmenities(item.name);
                }}
              >
                <div className="text-gray-700">{item.icon}</div>
                <p className="font-semibold">{item.name}</p>
              </div>
            ))}
          </div>

          {/* Upload Photos */}
          <h3 className="text-lg font-semibold mb-4 mt-5">Add some photos of your place</h3>
          <div>
            <input id="image" type="file" accept="image/*" onChange={(e) => setFiles(Array.from(e.target.files))} multiple />
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Submit"
            className="btn btn-warning w-full mt-7"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
