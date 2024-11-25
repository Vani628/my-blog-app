import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";

async function ensureDBConnection() {
  await ConnectDB();
}

ensureDBConnection();

export async function GET(request) {
  const blogs=await BlogModel.find({});
  return NextResponse.json({ blogs });
  
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");
    if (!image) {
      return NextResponse.json({ error: "Image file is required" }, { status: 400 });
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/uploads/${timestamp}_${image.name}`;

    await writeFile(path, buffer);
    const imgUrl = `/uploads/${timestamp}_${image.name}`;

    const blogData = {
      title: formData.get("title") || "Untitled",
      description: formData.get("description") || "",
      category: formData.get("category") || "Uncategorized",
      author: formData.get("author") || "Anonymous",
      image: imgUrl,
      author_img: formData.get("authorImg") || null,
    };

    await BlogModel.create(blogData);
    console.log("Blog saved");

    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
