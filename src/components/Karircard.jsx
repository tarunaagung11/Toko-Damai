import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Storemanager from "../assets/Storemanager.png";

const Karircard = () => {
  return (
    <div>
      <div className="h-auto justify-center">
        {/* Card1 */}
        <Card className=" relative isolate m-4 flex h-auto w-[350px] flex-col">
          <CardHeader
            shadow={false}
            floated={false}
            className="h-56 rounded-2xl bg-orange-500"
          >
            <img
              src={Storemanager}
              alt="card-image"
              className="absolute inset-0 z-0 size-full object-cover"
            />
            <div className="absolute inset-0 items-end "></div>
            <h3 className=" ml-1 mt-3 text-6xl font-bold text-white">
              Store Manager
            </h3>
            <div className=" ml-1 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
              Toko Damai
            </div>
          </CardHeader>
          <CardBody>
            <div className=" mb-2 flex justify-center text-center">
              <Typography color="blue-gray" className=" text-xl font-bold">
                Store Manager
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="text-center font-normal"
            >
              Seorang store manager adalah individu yang bertanggung jawab atas
              pengelolaan keseluruhan operasional sebuah toko atau gerai.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-400 text-white shadow-none hover:scale-105 hover:bg-blue-600 hover:text-white hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Lihat Selengkapnya
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Karircard;
