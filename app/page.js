"use client"
import { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';


const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINTS)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECTID);

export default function Home() {

  const [nextblog, setNextblog] = useState([]);

  const fetchNextBlogs = async () => {
    try {
      const databases = new Databases(client);
      const response = await databases.listDocuments(process.env.NEXT_PUBLIC_APPWRITE_DOCUMENTID, process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONID);
      console.log(response.documents);
      setNextblog(response.documents); // Success
    } catch (error) {
      console.log("Some Error Occurred:", error); // Failure
    }
  };

  useEffect(() => {
    fetchNextBlogs();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Hello,World!
      </div>
    </main>
  )
}
