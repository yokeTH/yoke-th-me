import LinkGallery from "@/components/galleryLink";

const previewLink = [
  {
    title: "Terminal Like",
    url: "/terminal",
    thumbnail: "/thumbnail/terminal.png"
  },
  {
    title: "Resume",
    url: "/resume",
    thumbnail: "/thumbnail/resume.png"
  },
]

export default function Home() {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div
            className="text-white text-2xl font-bold cursor-pointer"
          >
            <a href="/">
              yoke.th
            </a>

          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="/"
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              Home
            </a>
          </div>
        </div>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LinkGallery links={previewLink} />
      </main>
    </>
  );
}
