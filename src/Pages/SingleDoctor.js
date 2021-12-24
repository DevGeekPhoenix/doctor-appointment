import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Components/NavBar/NavBar";
import { buildQueries } from "@testing-library/react";

const SingleDoctor = () => {
  let { id } = useParams();

  const [thisDoctor, setThisDoctor] = useState(null);

  useEffect(() => {
    fetch(`https://www.tebinja.com/api/v1/doctors/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.doctor);
        setThisDoctor(data.doctor);
      });
  }, []);

  if (!thisDoctor) return <h1> loading </h1>;

  return (
    <div className="SingleDoctorCard">
      <div className="bg-[#30353b] pb-5">
        <Navbar />
      </div>
      <div className="bg-[#df7539] w-2/5 absolute left-0 h-full flex flex-col items-center">
        <img
          alt="img"
          className="rounded-full flex mt-10 "
          src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${thisDoctor.url}`}
        />
        <h4 className="font-sans mt-10  text-4xl">
          {thisDoctor.fname + " " + thisDoctor.lname}
        </h4>
        {thisDoctor.clinics.map(({ webSite }, i) => {
          return (
            <a
              href={`https://${webSite}`}
              className="text-[#30353b] mt-10  text-xl"
            >{`${webSite} `}</a>
          );
        })}
      </div>
      <div className="bg-[#30353b] w-3/5 absolute right-0 h-full ">
        <div className="bg-[#df7539] h-1 w-full "> .</div>
        <div className="absolute text-[#df7539] right-10 top-10">
          تخصص :
          {thisDoctor.spUnis.map(({ specialty }, i) => {
            return (
              <span className="text-[#df7539] p-1  ">{` ${specialty.name} `}</span>
            );
          })}
        </div>
        <div className=" text-[#df7539] absolute right-10 top-20">
          آدرس :
          {thisDoctor.clinics.map(({ address }, i) => {
            return (
              <span className="text-[#df7539] p-1   ">{` ${address} `}</span>
            );
          })}
        </div>
        <div className=" text-[#df7539] absolute right-10 top-32">
          زمان مراجعه :
          {thisDoctor.clinics.map(({ clinicsTimeSheets }, i) => {
            return (
              <span className="text-[#df7539] p-1  ">
                {`${clinicsTimeSheets[i].label} ${clinicsTimeSheets[i].startTime} الی ${clinicsTimeSheets[i].endTime} `}
              </span>
            );
          })}
        </div>
        <div className=" text-[#df7539] absolute right-10 top-44">
          تلفن :
          {thisDoctor.clinics.map(({ telePhones }, i) => {
            return (
              <span className="text-[#df7539] p-1  ">
                {`${telePhones[i].phone}`}
              </span>
            );
          })}
        </div>

        <div className=" text-[#df7539] absolute p-1 overflow-auto h-60 w-11/12	 right-10 top-52">
          درباره پزشک :
          <br />
          {`${thisDoctor.about}`}
        </div>
      </div>
    </div>
  );
};
export default SingleDoctor;
