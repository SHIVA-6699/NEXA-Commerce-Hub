import React, { useEffect, useState } from "react";
import { Storage } from "aws-amplify";
import { Image } from "react-bootstrap";
import Loading from "../components/Loading";

const Viewproducts = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  const getdata = async () => {
    try {
      const { results } = await Storage.list("", { pageSize: "ALL" });
      console.log("Results:", results); // Check the results in the console
      if (results.length > 0) {
        const urls = await Promise.all(
          results.map(async (result) => {
            return await Storage.get(result.key);
          })
        );
        console.log("Image URLs:", urls); // Check the image URLs in the console
        setImageUrls(urls);
      } else {
        console.log("No files found.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <h3 className="text-center mt-5 mb-5">Store Products</h3>
      <div className="d-flex flex-wrap gap-5 mt-5 justify-content-center border  border-2 m-4 p-4 rounded">
        {loading && <Loading />}
        {!loading &&
          imageUrls.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1} Loading..`}
              width={200}
              height={200}
              rounded
            />
          ))}
      </div>
    </>
  );
};

export default Viewproducts;
