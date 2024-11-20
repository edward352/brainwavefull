import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";
import Loading from "../../components/loading/Loading";
import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";

const Lecture = ({ user }) => {
  const [lectures, setLectures] = useState([]);
  const [lecture, setLecture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lecLoading, setLecLoading] = useState(false);
  const [show, setShow] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setvideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  async function fetchLectures() {
    try {
      const { data } = await axios.get(`${server}/api/lectures/${params.id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setLectures(data.lectures);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function fetchLecture(id) {
    setLecLoading(true);
    try {
      const { data } = await axios.get(`${server}/api/lecture/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setLecture(data.lecture);
      setLecLoading(false);
    } catch (error) {
      console.log(error);
      setLecLoading(false);
    }
  }

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setvideo(file);
    };
  };

  const submitHandler = async (e) => {
    setBtnLoading(true);
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);

    try {
      const { data } = await axios.post(
        `${server}/api/course/${params.id}`,
        myForm,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      toast.success(data.message);
      setBtnLoading(false);
      setShow(false);
      fetchLectures();
      setTitle("");
      setDescription("");
      setvideo("");
      setVideoPrev("");
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this lecture")) {
      try {
        const { data } = await axios.delete(`${server}/api/lecture/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchLectures();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  //   const [completed, setCompleted] = useState("");
  //   const [completedLec, setCompletedLec] = useState("");
  //   const [lectLength, setLectLength] = useState("");
  //   const [progress, setProgress] = useState([]);

  //   async function fetchProgress() {
  //     try {
  //       const { data } = await axios.get(
  //         `${server}/api/user/progress?course=${params.id}`,
  //         {
  //           headers: {
  //             token: localStorage.getItem("token"),
  //           },
  //         }
  //       );

  //       setCompleted(data.courseProgressPercentage);
  //       setCompletedLec(data.completedLectures);
  //       setLectLength(data.allLectures);
  //       setProgress(data.progress);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   const addProgress = async (id) => {
  //     try {
  //       const { data } = await axios.post(
  //         `${server}/api/user/progress?course=${params.id}&lectureId=${id}`,
  //         {},
  //         {
  //           headers: {
  //             token: localStorage.getItem("token"),
  //           },
  //         }
  //       );
  //       console.log(data.message);
  //       fetchProgress();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   console.log(progress);

  useEffect(() => {
    fetchLectures();
    // fetchProgress();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="lecture-page flex flex-col justify-evenly  mb-12 max-w-screen-xl p-8  mx-auto">
            <div className="left ">
              {lecLoading ? (
                <Loading />
              ) : (
                <>
                  {lecture.video ? (
                    <>
                      <video
                        src={`${server}/${lecture.video}`}
                        className="mb-4"
                        controls
                        controlsList="nodownload noremoteplayback"
                        disablePictureInPicture
                        disableRemotePlayback
                        autoPlay
                      ></video>
                      <div className="flex gap-4 flex-col">
                      <h1 className="">{lecture.title}</h1>
                      <h3>{lecture.description}</h3>
                      </div>
                     
                    </>
                  ) : (
                    <h1 className="text-2xl text-center">Please Select a Lecture</h1>
                  )}
                </>
              )}
            </div>
            <div className="right">
              {user && user.role === "admin" && (
                <button className="common-btn text-xl bg-orange-200 px-4 py-2" onClick={() => setShow(!show)}>
                  {show ? "Close" : "Add Lecture"}
                </button>
              )}

              {show && (
                <div className="lecture-form flex flex-col">
                  <h2>Add Lecture</h2>
                  <form onSubmit={submitHandler} className="flex flex-col">
                    <label className="mb-2 block font-medium text-gray-600" htmlFor="text">Title</label>
                    <input className="w-full px-4 py-4 bg-slate-200 rounded-md"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />

                    <label  className="mb-2 block font-medium text-gray-600" htmlFor="text">Description</label>
                    <input className="w-full px-4 py-4 bg-slate-200 rounded-md"
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />

                    <input className="w-full px-4 py-4 mt-4  bg-slate-200 rounded-md"
                      type="file"
                      placeholder="choose video"
                      onChange={changeVideoHandler}
                      required
                    />

                    {videoPrev && (
                      <video
                        src={videoPrev}
                        alt=""
                        width={300}
                        controls
                      ></video>
                    )}
                    <div className="flex justify-center">
                    <button
                      disabled={btnLoading}
                      type="submit"
                      className="common-btn mt-6 bg-slate-300 px-4 py-2 rounded "
                    >
                      {btnLoading ? "Please Wait..." : "Add"}
                    </button>
                    </div>
                    
                  </form>
                </div>
              )}

              {lectures && lectures.length > 0 ? (
                lectures.map((e, i) => (
                  < >
                    <div
                      onClick={() => fetchLecture(e._id)}
                      key={i}
                      className= {`lecture-number mb-4 mt-4  bg-orange-400 w-1/3 px-4 py-2 text-white rounded-md font-medium text-xl ${
                        lecture._id === e._id && "active"
                      }`}
                    >
                      {i + 1}. {e.title}
                    </div>
                    {user && user.role === "admin" && (
                      <button
                        className="common-btn bg-red-600 px-4 py-2 text-white rounded-md font-medium"
                       
                        onClick={() => deleteHandler(e._id)}
                      >
                        Delete {e.title}
                      </button>
                    )}
                  </>
                ))
              ) : (
                <p>No Lectures Yet!</p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Lecture;
