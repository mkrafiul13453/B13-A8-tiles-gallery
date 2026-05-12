"use client";

import {  Avatar, Card } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { UpdateUserModal } from "@/components/UpdateUserModal";

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user);
     
    return (
        <div className="flex items-center justify-center p-4">
            <Card
                className="
          w-full
          max-w-md
          shadow-xl
          rounded-2xl
          border border-gray-200
          hover:scale-[1.02]
          transition-all duration-300
        "
            >
                <Card className="p-6">
                    <div className="flex flex-col sm:flex-row items-center gap-5">

                        {/* Avatar */}
                        <Avatar>
                            <Avatar.Image alt="T" src={user?.image} />
                            <Avatar.Fallback>JD</Avatar.Fallback>
                        </Avatar>
                        

                        {/* User Info */}
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">

                            <div className="flex items-center gap-2">
                                <FaUser className="text-primary text-lg" />
                                <h2 className="text-xl font-bold text-gray-800">
                                    {user?.name}
                                </h2>
                            </div>

                            {/* <Divider className="my-3" /> */}

                            <div className="flex items-center gap-2 break-all">
                                <FaEnvelope className="text-danger text-lg" />
                                <p className="text-gray-600 text-sm sm:text-base">
                                    {user?.email}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <UpdateUserModal></UpdateUserModal>
                    </div>
                </Card>
            </Card>
        </div>
    );
};

export default ProfilePage;