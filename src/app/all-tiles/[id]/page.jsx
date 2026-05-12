import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaBoxOpen, FaCheckCircle, FaDollarSign, FaLayerGroup, FaRulerCombined, FaTag, FaTimesCircle } from "react-icons/fa";

const ViewDetailsPage = async ({params}) => {
    const {id}=await params
    const res = await fetch("https://b13-a8-tiles-gallery-3p1e.vercel.app/data.json");
    const allTiles = await res.json();
    const tile = allTiles.find(t=>t.id==id);
    return (
        <div className="w-full flex justify-center items-center px-4 py-8">
            <Card
                className="
          w-full
          max-w-5xl
          shadow-2xl
          border
          border-gray-200
          rounded-3xl
          overflow-hidden
        "
            >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side Image */}
                    <div className="relative w-full h-[280px] sm:h-[400px] lg:h-full min-h-[300px]">
                        <Image
                            src={tile.image}
                            alt={tile.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Side Content */}
                    <div className="flex flex-col">
                        <Card className="p-5 sm:p-8 space-y-5">
                            {/* Category */}
                            <div className="flex justify-between items-center gap-3 flex-wrap">
                                <Chip
                                    color="primary"
                                    variant="flat"
                                    className="capitalize text-sm"
                                >
                                    {tile.category}
                                </Chip>

                                {tile.inStock ? (
                                    <Chip
                                        color="success"
                                        variant="flat"
                                        // startContent={<FaCheckCircle />}
                                    >
                                        In Stock
                                    </Chip>
                                ) : (
                                    <Chip
                                        color="danger"
                                        variant="flat"
                                        // startContent={<FaTimesCircle />}
                                    >
                                        Out of Stock
                                    </Chip>
                                )}
                            </div>

                            {/* Title */}
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                                    {tile.title}
                                </h1>

                                <p className="text-gray-600 mt-3 leading-relaxed text-sm sm:text-base">
                                    {tile.description}
                                </p>
                            </div>

                            {/* <Divider /> */}

                            {/* Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Price */}
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100">
                                    <FaDollarSign className="text-xl text-primary" />

                                    <div>
                                        <p className="text-sm text-gray-500">Price</p>
                                        <h3 className="font-semibold text-lg">
                                            {tile.currency} {tile.price}
                                        </h3>
                                    </div>
                                </div>

                                {/* Material */}
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100">
                                    <FaLayerGroup className="text-xl text-primary" />

                                    <div>
                                        <p className="text-sm text-gray-500">Material</p>
                                        <h3 className="font-semibold text-lg">
                                            {tile.material}
                                        </h3>
                                    </div>
                                </div>

                                {/* Dimensions */}
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100">
                                    <FaRulerCombined className="text-xl text-primary" />

                                    <div>
                                        <p className="text-sm text-gray-500">Dimensions</p>
                                        <h3 className="font-semibold text-lg">
                                            {tile.dimensions}
                                        </h3>
                                    </div>
                                </div>

                                {/* Category */}
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100">
                                    <FaTag className="text-xl text-primary" />

                                    <div>
                                        <p className="text-sm text-gray-500">Category</p>
                                        <h3 className="font-semibold text-lg capitalize">
                                            {tile.category}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Footer Buttons */}
                        <Card className="px-5 sm:px-8 pb-6 pt-0">
                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <Button
                                    color="primary"
                                    size="lg"
                                    className="w-full font-semibold"
                                    startContent={<FaBoxOpen />}
                                >
                                    Order Now
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full font-semibold"
                                >
                                    Add to Wishlist
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ViewDetailsPage;