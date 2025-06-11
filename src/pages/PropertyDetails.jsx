import { useParams } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { useEffect, useState } from "react";
import house from "../assets/house-1.png"
import {
  Share,
  Bookmark,
  BookmarkMinus,
  MapPin,
  BedDouble,
  Toilet,
  HeartPlus
} from "lucide-react";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [saved, setSaved] = useState(false);
  const [carouselIdx, setCarouselIdx] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("properties");
    let found = null;
    if (stored) {
      const properties = JSON.parse(stored);
      found = properties.find((p) => String(p.id) === id);
    }
    if (!found) {
      // Dummy data
      found = {
        id: "001",
        title: "5 Bedroom Fully Detached",
        location: "Lekki",
        address: "Lagos State",
        images: [
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
          "https://images.unsplash.com/photo-1460518451285-97b6aa326961",
          "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
          house
        ],
        price: "#450,000",
        type: "Duplex",
        category: "Rental",
        beds: 5,
        toilets: 5,
        description:
          "A beautiful 5 bedroom fully detached duplex located in the heart of Lekki, Lagos. Spacious rooms, modern facilities, and a serene environment.",
        landlord: {
          name: "John Doe",
          role: "Landlord",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
      };
    }
    setProperty(found);
  }, [id]);

  if (!property) return null; // or a loader/spinne

  const images = property.images || [];
  const handlePrev = () =>
    setCarouselIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setCarouselIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Save property handler
  const handleSave = () => {
    setSaved((prev) => {
      const newSaved = !prev;
      let savedList = JSON.parse(localStorage.getItem("savedProperties") || "[]");
      if (newSaved) {
        // Add property
        if (!savedList.find(p => p.id === property.id)) {
          savedList.push(property);
        }
      } else {
        // Remove property
        savedList = savedList.filter(p => p.id !== property.id);
      }
      localStorage.setItem("savedProperties", JSON.stringify(savedList));
      return newSaved;
    });
  };

  // Share handler
  const handleShare = async () => {
    const shareData = {
      title: property.title,
      text: `Check out this property: ${property.title} in ${property.location}, ${property.address}`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        alert("Share cancelled or failed.");
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <MainLayout>
      <div className="max-w-3xl font-inter">
        {/* Title and Share/Save */}
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold">
            {property.title || "5 Bedroom Fully Detached"}
          </h1>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-1 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
              title="Share"
              onClick={handleShare}
            >
              <Share size={20} />
              <span className="hidden sm:inline">Share</span>
            </button>
            <button
              className="flex items-center gap-1 p-2 "
              title={saved ? "Unsave" : "Save"}
            >
              <span
                onClick={handleSave}
                className="cursor-pointer"
                title={saved ? "Unsave" : "Save"}
              >
                <HeartPlus
                  size={20}
                  color={saved ? "#e3342f" : "#000000"} // red if saved, gray if not
                  fill={saved ? "#e3342f" : "none"}
                  style={{ transition: "color 0.2s" }}
                />
              </span>
              <span className="hidden sm:inline">{saved ? "Saved Property" : "Save Property"}</span>
            </button>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-2 text-gray-600">
          <MapPin size={18} />
          {/* <span className="font-semibold">{property.title || "Property Name"}</span> */}
          <span>
            {property.location}, {property.address}
          </span>
        </div>

        {/* Carousel */}
        <div className="relative w-full h-full mb-4 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
          {images.length > 0 ? (
            <>
              <img
                src={
                  typeof images[carouselIdx] === "string"
                    ? images[carouselIdx]
                    : URL.createObjectURL(images[carouselIdx])
                }
                alt={`Property ${carouselIdx}`}
                className="object-fit w-full h-full"
              />
              {/* Only Dots */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 cursor-pointer">
                  {images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-4 h-4 rounded-full ${
                        carouselIdx === idx ? "bg-[#4D0000]" : "bg-white"
                      } border`}
                      style={{ display: "inline-block" }}
                      onClick={() => setCarouselIdx(idx)}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-gray-400">No images available</div>
          )}
        </div>

        {/* Price */}
        <div className="text-xl font-bold text-[#000000] mb-7">
          {property.price || "#450,000"}{" "}
          <span className="text-base font-normal">Per Annum</span>
        </div>

        {/* Property Info */}
        <div className="flex gap-6 mb-7 text-[#000000]">
          <span className="font-bold">
            Property ID: <span className="font-normal">{property.id}</span>
          </span>
          <span className="font-bold">
            Type:{" "}
            <span className="font-normal">{property.type || "Duplex"}</span>
          </span>
          <span className="font-bold">
            Category:{" "}
            <span className="font-normal">{property.category || "Rental"}</span>
          </span>
        </div>

        {/* Features */}
        <div className="flex gap-6 items-center mb-7">
          <div className="font-bold ">
            <h1>Property Features:</h1>
          </div>
          <span className="flex items-center gap-1">
            <BedDouble /> {property.beds || 5} Beds
          </span>
          <span className="flex items-center gap-1">
            <Toilet /> {property.toilets || 5} Toilets
          </span>
        </div>

        {/* Description */}
        <div className="mb-7 flex gap-6">
          <h2 className="font-bold mb-1">Description:</h2>
          <p className="text-gray-700">{property.description}</p>
        </div>

        {/* Landlord Info */}
        <div className="flex items-center gap-20 bg-gray-100 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <img
              src={
                property.landlord?.avatar ||
                "https://randomuser.me/api/portraits/men/32.jpg"
              }
              alt="Landlord"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div className="flex flex-col">
              <div className="font-bold">
                {property.landlord?.name || "John Doe"}
              </div>
              <div className="text-gray-500 text-sm">
                {property.landlord?.role || "Landlord"}
              </div>
            </div>
          </div>
          <button className="bg-[#4D0000] text-white px-4 py-2 rounded mt-2 w-max cursor-pointer">
             Unlock Details
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default PropertyDetails;
