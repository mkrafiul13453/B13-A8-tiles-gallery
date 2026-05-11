"use client";

import {
    Card,
    CardFooter,
    Button,
} from "@heroui/react";

import Image from "next/image";
import { FaEye } from "react-icons/fa";

const TilesCard = ({ tile }) => {
    const { title, description, image } = tile;

    return (
        <Card
            className="
        w-full
        h-full
        border
        border-gray-200
        shadow-lg
        rounded-2xl
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-1
        flex
        flex-col
      "
        >
            {/* Product Image */}
            <Card className="p-3 overflow-hidden">
                <div className="relative w-full h-64 rounded-xl overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            </Card>

            {/* Product Info */}
            <CardFooter className="flex flex-col items-start gap-3 px-4 pb-4 flex-grow">
                <div className="flex-grow w-full">
                    <h2 className="text-lg font-semibold line-clamp-1">
                        {title}
                    </h2>

                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                        {description}
                    </p>
                </div>

                <Button
                    color="primary"
                    variant="outline"
                    className="w-full font-medium"
                    startContent={<FaEye />}
                >
                    View Details
                </Button>
            </CardFooter>
        </Card>
    );
};

export default TilesCard;