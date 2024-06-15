import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { CgProfile } from "react-icons/cg";
import Modal from "./Modal";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaReply } from "react-icons/fa";
import { categoryData } from "../data";

const Posts = (props) => {
  const [seen, setSeen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [category, setCategory] = useState([]);
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState([]);

  const postRef = collection(db, "posts");

  function togglePop() {
    setSeen((prev) => !prev);
  }

  const getUser = async () => {
    const usersRef = collection(db, "users");
    // const u = query(usersRef, orderBy("timestamp", "desc"));
    const usersShot = await getDocs(usersRef);
    const usersData = usersShot.docs.map((doc) => {
      return doc.data().mentor;
    });
    setUserData(usersData);
    console.log("userData", ...usersData);
  };

  const fetchData = async () => {
    // const postsRef = collection(db, "posts");
    const q = query(postRef, orderBy("timestamp", "desc"));
    const snapshot = await getDocs(q);
    const postData = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const cpyPostData = postData;
    const filteredPost = cpyPostData.filter((val1) => {
      const categoryExist = val1.category ? val1 : false;

      const filterCat = categoryExist
        ? categoryExist.category.filter((val2) => {
            return val2 === props.category;
          })
        : false;

      const result = filterCat == [] || filterCat == false ? false : true;

      return result;
    });

    const result = props.category === "all" ? postData : filteredPost;
    setPosts(result);
  };

  const upVote = async (post) => {
    // console.log(post);
    const docRef = doc(db, "posts", post.id);

    const userId = user.uid;

    var alreadyUpvote = post.metadata.upvotes.find((val) => {
      return val === userId;
    });
    alreadyUpvote = alreadyUpvote ? alreadyUpvote : false;

    var alreadyDownvote = post.metadata.downvotes.find((val) => {
      return val === userId;
    });
    alreadyDownvote = alreadyDownvote ? alreadyDownvote : false;

    const upvoteList = post.metadata.upvotes;

    if (alreadyUpvote) {
      // console.log("already upvoted");
      const updatedUpvoteList = upvoteList.filter((val) => {
        return val === userId ? false : true;
      });
      // console.log(updatedUpvoteList);

      const updatedPost = {
        ...post,
        metadata: { ...post.metadata, upvotes: updatedUpvoteList },
      };

      const updatedPosts = posts.map((p) =>
        p.id === post.id ? updatedPost : p
      );

      setPosts(updatedPosts);

      await updateDoc(docRef, {
        "metadata.upvotes": updatedUpvoteList,
      });

      // fetchData();
    } else {
      upvoteList.push(userId);

      var updatedPost;
      if (alreadyDownvote) {
        const updatedDownvoteList = post.metadata.downvotes.filter((val) => {
          return val === userId ? false : true;
        });

        updatedPost = {
          ...post,
          metadata: {
            upvotes: upvoteList,
            downvotes: updatedDownvoteList,
          },
        };

        const updatedPosts = posts.map((p) =>
          p.id === post.id ? updatedPost : p
        );

        setPosts(updatedPosts);

        await updateDoc(docRef, {
          "metadata.downvotes": updatedDownvoteList,
          "metadata.upvotes": upvoteList,
        });
      } else {
        updatedPost = {
          ...post,
          metadata: { ...post.metadata, upvotes: upvoteList },
        };

        const updatedPosts = posts.map((p) =>
          p.id === post.id ? updatedPost : p
        );

        setPosts(updatedPosts);

        await updateDoc(docRef, {
          "metadata.upvotes": upvoteList,
        });
      }
      // const updatedPosts = posts.map((p) =>
      //   p.id === post.id ? updatedPost : p
      // );

      // setPosts(updatedPosts);

      // await updateDoc(docRef, {
      //   "metadata.upvotes": upvoteList,
      // });
    }
  };

  const downVote = async (post) => {
    // console.log(post);
    const docRef = doc(db, "posts", post.id);

    const userId = user.uid;

    var alreadyDownvote = post.metadata.downvotes.find((val) => {
      return val === userId;
    });
    alreadyDownvote = alreadyDownvote ? alreadyDownvote : false;

    var alreadyUpvote = post.metadata.upvotes.find((val) => {
      return val === userId;
    });
    alreadyUpvote = alreadyUpvote ? alreadyUpvote : false;

    const downvoteList = post.metadata.downvotes;

    if (alreadyDownvote) {
      // console.log("already downvoted, removing downvote");
      const updatedDownvoteList = downvoteList.filter((val) => {
        return val === userId ? false : true;
      });
      // console.log(updatedDownvoteList);

      const updatedPost = {
        ...post,
        metadata: { ...post.metadata, downvotes: updatedDownvoteList },
      };

      const updatedPosts = posts.map((p) =>
        p.id === post.id ? updatedPost : p
      );

      setPosts(updatedPosts);

      await updateDoc(docRef, {
        "metadata.downvotes": updatedDownvoteList,
      });

      // fetchData();
    } else {
      downvoteList.push(userId);

      var updatedPost;
      if (alreadyUpvote) {
        const updatedUpvoteList = post.metadata.upvotes.filter((val) => {
          return val === userId ? false : true;
        });

        updatedPost = {
          ...post,
          metadata: {
            upvotes: updatedUpvoteList,
            downvotes: downvoteList,
          },
        };

        const updatedPosts = posts.map((p) =>
          p.id === post.id ? updatedPost : p
        );

        setPosts(updatedPosts);

        await updateDoc(docRef, {
          "metadata.downvotes": downvoteList,
          "metadata.upvotes": updatedUpvoteList,
        });
      } else {
        updatedPost = {
          ...post,
          metadata: { ...post.metadata, downvotes: downvoteList },
        };

        const updatedPosts = posts.map((p) =>
          p.id === post.id ? updatedPost : p
        );

        setPosts(updatedPosts);

        await updateDoc(docRef, {
          "metadata.downvotes": downvoteList,
        });
      }

      // const updatedPosts = posts.map((p) =>
      //   p.id === post.id ? updatedPost : p
      // );

      // setPosts(updatedPosts);

      // await updateDoc(docRef, {
      //   "metadata.downvotes": downvoteList,
      // });
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const createPost = async () => {
      try {
        const postData = {
          text: newPost,
          timestamp: new Date().toISOString(),
          comments: [],
          uid: user.uid,
          metadata: {
            upvotes: [],
            downvotes: [],
          },
          category: category,
          // LikedBy: {
          //   upvotes: [],
          //   downvotes: [],
          // },
        };
        // const postRef = collection(db, "posts");
        const createdPost = await addDoc(postRef, postData);
        console.log(`Post created successfully with ID:`, createdPost.id);
        // setPosts([postData, ...posts]);
        setNewPost("");

        fetchData();
      } catch (error) {
        console.error("Error creating post:", error);
        alert("Error creating post: ", error.message);
      }
    };

    createPost();
    setSeen(false);
  };

  useEffect(() => {
    // console.count(1);
    fetchData();
    // getUser();
  }, [props.category]);

  return (
    <div className="overflow-auto w-full md:w-[50%] flex flex-col gap-2">
      <form
        className="p-4 flex flex-row gap-4 items-center border-blue-200 border rounded-md mx-2 mb-2 shadow-md"
        onSubmit={handleCreatePost}
      >
        <div>
          <CgProfile size={36} />
        </div>
        <input
          onClick={togglePop}
          className="border rounded-md p-2 w-full outline-none"
          type="text"
          placeholder="Enter your question"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          readOnly
        />
        <button
          onClick={togglePop}
          className="bg-primary text-white border h-full min-w-20 rounded-md"
        >
          Ask
        </button>

        {seen ? (
          <Modal
            newPost={newPost}
            setNewPost={setNewPost}
            toggle={togglePop}
            categoryData={categoryData}
            setCategory={setCategory}
          />
        ) : null}
      </form>

      {posts?.map((post) => {
        return (
          <div
            key={post.id}
            className="border-blue-100 border p-4 m-2 flex flex-col gap-2 rounded-md drop-shadow-md bg-white hover:shadow-xl transition duration-300 ease-in-out"
          >
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-4 rounded-md items-center">
                <CgProfile size={36} />
                <div className="items-center">
                  <div className="flex gap-2 items-center">
                    {post.author ?? "Anonymous"}
                    <div className="h-1.5 w-1.5 bg-[#bbb] inline-block rounded-full"></div>
                    {new Date(post?.timestamp)?.toDateString()}
                  </div>
                  <div className="text-xs">
                    {/* {console.log(post.category)} */}
                    {post?.category
                      ? post.category.map((val, key) => {
                          return <span key={key}>{val} &nbsp; </span>;
                        })
                      : "uncategorized"}
                  </div>
                </div>
              </div>
              <button
                className={post.uid === user.uid ? "" : "hidden"}
                onClick={async () => {
                  const docRef = doc(db, "posts", post.id);
                  await deleteDoc(docRef);
                  fetchData();
                }}
              >
                <MdOutlineDeleteOutline size={18} />
              </button>
            </div>

            <Link to={`/post/${post.id}`} className="">
              {post.text}
            </Link>

            <hr className="my-1" />

            <div className="flex flex-row gap-4 justify-between">
              <div className="flex flex-row gap-4">
                <button
                  type="button"
                  className="flex flex-row gap-1 items-center justify-center w-16 border-blue-200 bg-blue-50 border rounded-md p-1 shadow-md shadow-blue-50 hover:shadow-blue-100"
                  onClick={() => {
                    upVote(post);
                  }}
                >
                  <BiSolidUpvote color="#000" size={18} />
                  <span>
                    {post.metadata.upvotes.length
                      ? post.metadata.upvotes.length
                      : 0}
                  </span>
                </button>
                <button
                  type="button"
                  className="flex flex-row gap-1 items-center justify-center w-16 border-blue-200 bg-blue-50 border rounded-md p-1 shadow-md shadow-blue-50 hover:shadow-blue-100"
                  onClick={() => {
                    downVote(post);
                  }}
                >
                  <BiSolidDownvote color="#000" size={18} />

                  <span>
                    {post.metadata.downvotes.length
                      ? post.metadata.downvotes.length
                      : 0}
                  </span>
                </button>
              </div>

              <Link
                to={`/post/${post.id}`}
                className=" bg-primary bg-opacity-95 hover:bg-opacity-100 text-white py-1 text-center flex gap-1 justify-center items-center w-20 rounded-md font-semibold drop-shadow-md"
              >
                <FaReply color="white" size={14} />
                <span className="ml-1">Reply</span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
