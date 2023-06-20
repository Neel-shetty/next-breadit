"use client";
import React, { FC } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { useToast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      //toast
      toast({
        title: "There was a problem",
        description: "There was an error logging in with google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={(cn("flex justify-center"), className)} {...props}>
      <Button onClick={loginWithGoogle} size={"sm"} className="w-full">
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-4" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
