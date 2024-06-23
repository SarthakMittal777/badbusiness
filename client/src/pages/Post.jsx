import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import {
  collection,
  doc,
  getDoc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { auth, db } from "../config/firebase";

const Post = () => {
  const [showReply, setShowReply] = useState(false);
  const [newComment, setNewComment] = useState([]);
  const [userData, setUserData] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const [postDetail, setPostDetail] = useState({
    comments: [],
    upvotes: [],
    downvotes: [],
    text: "",
  });
  const [user] = useAuthState(auth);
  // console.log(user);
  const docRef = doc(db, "posts", id);

  const getUser = async () => {
    const usersRef = collection(db, "users");
    // const u = query(usersRef, orderBy("timestamp", "desc"));
    // console.log(usersRef);
    const usersShot = await getDocs(usersRef);
    const usersData = usersShot.docs.map((doc) => {
      return doc.data();
    });
    setUserData(usersData);
    console.log("userData", ...usersData);
  };

  const upVote = async () => {
    var AlreadyUpvote = postDetail.upvotes.find((val) => {
      return val === user.uid;
    });
    AlreadyUpvote = AlreadyUpvote ? AlreadyUpvote : false;

    var alreadyDownvote = postDetail.downvotes.find((val) => {
      return val === user.uid;
    });
    alreadyDownvote = alreadyDownvote ? alreadyDownvote : false;

    const upvoteList = postDetail.upvotes;

    if (AlreadyUpvote) {
      console.log("already upvoted");
      const updatedUpvoteList = upvoteList.filter((val) => {
        return val === user.uid ? false : true;
      });
      // console.log(updatedUpvoteList);

      const updatedPost = {
        ...postDetail,
        upvotes: updatedUpvoteList,
      };

      setPostDetail(updatedPost);

      await updateDoc(docRef, {
        "metadata.upvotes": updatedUpvoteList,
      });
    } else {
      upvoteList.push(user.uid);

      var updatedPost;
      if (alreadyDownvote) {
        const updatedDownvoteList = postDetail.downvotes.filter((val) => {
          return val === user.uid ? false : true;
        });

        updatedPost = {
          ...postDetail,
          upvotes: upvoteList,
          downvotes: updatedDownvoteList,
        };

        setPostDetail(updatedPost);

        await updateDoc(docRef, {
          "metadata.downvotes": updatedDownvoteList,
          "metadata.upvotes": upvoteList,
        });
      } else {
        updatedPost = {
          ...postDetail,
          upvotes: upvoteList,
        };
        setPostDetail(updatedPost);

        await updateDoc(docRef, {
          "metadata.upvotes": upvoteList,
        });
      }
    }
  };

  const downVote = async () => {
    var alreadyDownvote = postDetail.downvotes.find((val) => {
      return val === user.uid;
    });
    alreadyDownvote = alreadyDownvote ? alreadyDownvote : false;

    var alreadyUpvote = postDetail.upvotes.find((val) => {
      return val === user.uid;
    });
    alreadyUpvote = alreadyUpvote ? alreadyUpvote : false;

    const downvoteList = postDetail.downvotes;

    if (alreadyDownvote) {
      // console.log("already downvoted");
      const updatedDownvoteList = downvoteList.filter((val) => {
        return val === user.uid ? false : true;
      });
      // console.log(updatedDownvoteList);

      const updatedPost = {
        ...postDetail,
        downvotes: updatedDownvoteList,
      };

      setPostDetail(updatedPost);

      await updateDoc(docRef, {
        "metadata.downvotes": updatedDownvoteList,
      });
    } else {
      downvoteList.push(user.uid);

      var updatedPost;
      if (alreadyUpvote) {
        const updatedUpvoteList = postDetail.upvotes.filter((val) => {
          return val === user.uid ? false : true;
        });

        updatedPost = {
          ...postDetail,

          upvotes: updatedUpvoteList,
          downvotes: downvoteList,
        };

        setPostDetail(updatedPost);

        await updateDoc(docRef, {
          "metadata.downvotes": downvoteList,
          "metadata.upvotes": updatedUpvoteList,
        });
      } else {
        updatedPost = {
          ...postDetail,
          downvotes: downvoteList,
        };
        setPostDetail(updatedPost);

        await updateDoc(docRef, {
          "metadata.downvotes": downvoteList,
        });
      }
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    setShowReply(false);
    const docRef = doc(db, "posts", id);
    // setPostDetail({ ...postDetail, downvotes: updatedVotes });
    const docSnap = await getDoc(docRef);
    // console.log(docSnap.data());

    const cmtWid = {
      comment: newComment,
      uid: user.uid,
    };
    const listComment = docSnap.data().comments;
    const updatedComment = listComment ? [...listComment, cmtWid] : [cmtWid];
    console.log(updatedComment);

    await updateDoc(docRef, {
      comments: updatedComment,
    });

    setNewComment("");
  };

  const fetchPost = async () => {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const postData = docSnap.data();
      // console.log(postData);
      const result = {
        ...postDetail,
        category: postData.category,
        comments: postData.comments,
        upvotes: postData.metadata.upvotes,
        downvotes: postData.metadata.downvotes,
        text: postData.text,
        timestamp: postData.timestamp,
      };
      setPostDetail(result);

      // console.log(postData, postDetail);
    } else {
      navigate("/home");
    }
  };

  useEffect(() => {
    fetchPost();
    // console.count(1);
  }, [postDetail.comments]);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="flex flex-col items-center gap-4 m-4">
        <div className="border-blue-100 border p-4 m-2 flex flex-col gap-2 rounded-md drop-shadow-md bg-white w-3/5">
          <div className="flex flex-row gap-4 rounded-md items-center">
            <CgProfile size={36} />
            <div className="items-center">
              <div className="flex gap-2 items-center">
                {postDetail.author ?? "Anonymous"}
                <div className="h-1.5 w-1.5 bg-[#bbb] inline-block rounded-full"></div>
                {/* {postDetail.timestamp} */}
                {new Date(postDetail?.timestamp)?.toDateString()}
              </div>
              <div className="text-xs">
                {/* {postDetail.category ?? "Uncategorised"} */}
                {postDetail.category
                  ? postDetail.category.map((val, key) => {
                      return <span key={key}>{val} &nbsp; </span>;
                    })
                  : "uncategorized"}
              </div>
            </div>
          </div>

          <p>{postDetail.text}</p>

          <hr className="my-1" />

          <div className="flex flex-row gap-4 items-center">
            <button
              type="button"
              className="flex flex-row gap-1 items-center justify-center w-16 border-blue-200 bg-blue-50 border rounded-md p-1 shadow-md shadow-blue-50 hover:shadow-blue-100"
              onClick={async () => {
                upVote();
              }}
            >
              <BiSolidUpvote color="#000" size={18} />
              <div>
                {postDetail.upvotes.length ? postDetail.upvotes.length : 0}
              </div>
            </button>
            <button
              type="button"
              className="flex flex-row gap-1 items-center justify-center w-16 border-blue-200 bg-blue-50 border rounded-md p-1 shadow-md shadow-blue-50 hover:shadow-blue-100"
              onClick={async () => {
                downVote();
              }}
            >
              <BiSolidDownvote color="#000" size={18} />
              <div>
                {postDetail.downvotes.length ? postDetail.downvotes.length : 0}
              </div>
            </button>
          </div>
        </div>

        <form
          onSubmit={addComment}
          className="border-blue-200 border rounded-md p-4 gap-2 flex flex-col w-3/5 shadow-md"
        >
          <textarea
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
            className="border-blue-200 focus:border-blue-400 outline-none border rounded-md p-2 w-full"
            placeholder="Add a comment"
            rows={2}
            maxLength={800}
          ></textarea>

          <button
            type="submit"
            disabled={newComment.length < 1 ? true : false}
            className="rounded-md px-4 py-1.5 w-fit bg-primary drop-shadow-lg disabled:bg-opacity-90 text-black ml-auto"
          >
            Add a Reply
          </button>
        </form>

        <div className="rounded-md py-6 gap-4 w-3/5">
          <div className="text-2xl font-semibold">Answered by others</div>
          <br />

          <div className="flex flex-col gap-6">
            {postDetail.comments
              ? postDetail.comments.map((post, key) => {
                  const verified = userData.find((val) => {
                    return val.uid === post.uid && val.mentor;
                  });
                  return (
                    <div
                      key={key}
                      className="border-blue-300 shadow-md border p-4 rounded-md flex flex-col gap-4"
                    >
                      <div className="border-black flex flex-row gap-4 items-center">
                        <CgProfile size={36} />
                        <div>{verified ? verified.name : "Person"} </div>

                        {verified ? (
                          <div className="font-bold border-double border border-[#24a865] p-2 rounded flex flex-row gap-1 items-center">
                            <RiVerifiedBadgeFill color="#24a865" size={24} />{" "}
                            Mentor verified
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <p className="text-ellipsis line-clamp-[10]">
                        {post.comment}
                      </p>

                      {/* {showReply ? (
                        <div className="pl-20 flex flex-col gap-4">
                          <div className="border-black border rounded-md p-4 flex flex-row gap-4 items-center">
                            <CgProfile size={36} />
                            <div>User2</div>
                          </div>
                          <div className="border-black border rounded-md p-2 ">
                            Answer
                          </div>

                          <div className="flex flex-row gap-6">
                            <div className="flex flex-row gap-2">
                              <button>
                                <BiSolidUpvote size={24} />
                              </button>
                              <div>14</div>
                            </div>
                            <button className="bg-primary text-white rounded-md p-2 w-20">
                              Reply
                            </button>
                          </div>
                        </div>
                      ) : null} */}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Post;
