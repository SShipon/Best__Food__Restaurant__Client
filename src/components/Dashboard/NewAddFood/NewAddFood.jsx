import React from 'react';
import { useForm } from 'react-hook-form';

const NewAddFood = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgStorageKey = "ab4ebcd5f1e4f3b6eb095aa66b95920e";

  const onSubmit = (data) => {
    const img = data.image[0];
    const formData = new FormData();
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    formData.append("image", img);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const product = {
            name: data.name,
            email: data.email,
            Introduction: data.Introduction,
            newPrice: data.newPrice,
            oldPrice: data.oldPrice,
            img: image,
          };

          const url = `http://localhost:5000/food`;
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
            });
        }
      });
  };
  return (
    <div className="flex h-screen justify-center items-center lg:my-40">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-4xl font-bold text-lime-300">
            Add a Product
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-control w-full max-w-xs"
          >
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "provide a valid email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="level-text-alt text-rose-600">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="level-text-alt text-rose-600">
                  {errors.email.message}
                </span>
              )}
            </label>
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Product name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="level-text-alt text-rose-600">
                  {errors.name.message}
                </span>
              )}
            </label>
            <label className="label">
              <span className="label-text">Introduction</span>
            </label>
            <input
              type="text"
              placeholder="Introduction"
              className="input input-bordered w-full max-w-xs"
              {...register("Introduction", {
                required: {
                  value: true,
                  message: "Introduction is Required",
                },
              })}
            />

            <label className="label">
              {errors.Introduction?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.Introduction.message}
                </span>
              )}
            </label>
           

            <label className="label">
              <span className="label-text">Old Price</span>
            </label>
            <input
              type="text"
              placeholder="Old Price"
              className="input input-bordered w-full max-w-xs"
              {...register("oldPrice", {
                required: {
                  value: true,
                  message: "price is Required",
                },
              })}
            />

            <label className="label">
              <span className="label-text">New Price</span>
            </label>
            <input
              type="text"
              placeholder="New Price"
              className="input input-bordered  focus:outline-none focus:ring-0 w-[100%]"
              {...register("newPrice", {
                required: {
                  value: true,
                  message: "price is Required",
                },
              })}
            />

    

            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
            </label>
            <label className="label">
              <span className="label-text">Picture</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />

            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
            <input className="btn mt-8" type="submit" value="Add" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAddFood;