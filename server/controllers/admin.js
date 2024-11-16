import { Courses } from "../models/Courses.js";
import { Lecture} from "../models/Lecture.js";
import TryCatch from "../utils/TryCatch.js";
import {rm} from "fs";
import fs from "fs"
import { promisify } from "util";
import { User } from "../models/User.js";
export const createCourse=TryCatch(async(req,res)=>
    {
        const {title,description,category,createdBy,duration}=req.body

        const image=req.file;
        await Courses.create({
        title,
        description,
        category,
        createdBy,
        image :image?.path,
        duration,
    })
    res.status(201).json(
        {
            message:"Course created succesfully"
        })
    })

    export const addLectures=TryCatch(async(req,res)=>
        {
            const course=await Courses.findById(req.params.id)

            if(!course) return res.status(404).json({
                message:"No course with this id",
            })

        const {title,description}=req.body
        const file=req.file
        const lecture = await Lecture.create(
            {
                title,
                description,
                video:file?.path,
                course:course._id
            })
            res.status(201).json(
                {
                    message:"Lecture Added",
                    lecture
                })
        })

        export const deleteLecture=TryCatch(async(req,res)=>
            {
                const lecture=await Lecture.findById(req.params.id)
                rm(lecture.video)
                {
                    console.log("video deleted")
                }
                await lecture.deleteOne();
                res.json({
                    message:"Lecture Deleted"
                })
            })
            const unlinkAsync= promisify(fs.unlink)
        export const deleteCourse=TryCatch(async(req,res)=>
            {
                const course=await Courses.findById(req.params.id)

                const lectures=await Lecture.find({course:course._id})
                lectures.map(async(lecture)=>
                    {
                        await unlinkAsync(lecture.video);
                        console.log("video deleted")
                    })

                    rm(course.video)
                {
                    console.log("image deleted")
                }
            await Lecture.find({course:req.params.id}).deleteMany()
            await course.deleteOne()
            await User.updateMany({},{$pull:{subscription:req.params.id}})
            res.json(
                {
                    message:"Course Deleted"
                })
            })