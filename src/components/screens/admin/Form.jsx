import React from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "../../../firebase";


export const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {

        try {
            await addDoc(collection(db, 'series'), {
                timestamp: serverTimestamp(),
                thumbnailPath: data.thumbnailPath,
                videoUrl: data.videoUrl
            })
        } catch (error) {
            alert(error);
        }

        reset();
    };



    return (
        <div
            className="py-10 px-20"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '45%' }}
        >
            <h2 className="mb-8 text-white font-bold text-2*1 text-center ">
                Add new series
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="w-full py-2 px-2 outline-none block mb-5 text-white "
                    placeHolder="Enter thumbnail path"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    {...register('thumbnailPath', {
                        required: true
                    })}
                />
                {errors.thumbnailPath && (
                    <span className="text-red-700"> Please fill thumbnail path field</span>
                )}

                <input
                    className="w-full py-2 px-2 outline-none block mb-5 text-white "
                    placeHolder="Enter video url"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    {...register('videoUrl', {
                        required: true
                    })}
                />
                {errors.thumbnailPath && (
                    <span className="text-red-700"> Please fill video url field</span>
                )}

                <input
                    type='submit'
                    value='Add'
                    className=' block border-none py-2 px-4 outline-none mx-auto mt-10 cursor-pointer bg-pink-800 '
                    style={{ minWidth: 140 }}
                />

            </form>
        </div>
    );
};