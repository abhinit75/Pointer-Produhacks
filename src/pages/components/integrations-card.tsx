import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface IntegrationCardProps {
  name: string;
  description: string;
  icon: string;
  connectUrl: string;
}

const IntegrationCard = ({
  name,
  description,
  icon,
  connectUrl,
}: IntegrationCardProps) => {
  return (
    <Card className="w-fit">
      <CardHeader>
        <div className="flex space-x-2">
          <img height={24} width={24} src={icon} />
          <CardTitle>{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href={connectUrl}
          className={cn(buttonVariants({ variant: "outline" }) + "")}
        >
          Connected
        </Link>
      </CardFooter>
    </Card>
  );
};

export default IntegrationCard;
