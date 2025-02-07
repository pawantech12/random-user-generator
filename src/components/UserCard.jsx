// UserCard.js
import React from "react";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const UserCard = ({ user }) => {
  const { name, picture, email, location } = user;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };

  return (
    <Card className="bg-white ">
      <CardHeader className="text-center">
        <Avatar className="w-20 h-full mx-auto">
          <AvatarImage src={picture.large} className="" />
          <AvatarFallback>{name.first} Avatar</AvatarFallback>
        </Avatar>

        <CardTitle className="text-lg font-bold ">
          {name.first} {name.last}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-500">{email}</p>
        <span className="text-gray-700">
          {location.city}, {location.country}
        </span>
      </CardContent>
      <CardFooter className="text-center">
        <Button
          variant="link"
          color="blue"
          onClick={handleCopy}
          className="flex items-center mx-auto"
        >
          <FiCopy className="mr-2" /> Copy Email
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
