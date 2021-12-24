import { useEffect, useState } from "react";
import Rate from "rc-rate";
import { Link } from "react-router-dom";
import Navbar from "../Components/NavBar/NavBar";

const DoctorsCardList = () => {
  const [Doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://www.tebinja.com/api/v1/doctors/searchi?page=0")
      .then((response) => response.json())
      .then((data) => {
        const DoctorsInfo = data.doctors.hits.map(({ _source }) => _source);
        setDoctors(DoctorsInfo);
      });
  }, []);
  if (!Doctors) return <h1> loading </h1>;
  return (
    <div className=" bg-[#df7539]">
      <div className="bg-[#30353b]  pb-5">
        <Navbar />
      </div>
      <div className=" flex flex-row text-[#df7539] text-base items-center flex-wrap m-5 ">
        {Doctors.map((doctor, i) => {
          return (
            <div className="w-56 flex flex-col items-center h-96 p-6 m-2 mr-3 rounded-lg bg-[#30353b]">
              <Link to={`/doctor/${doctor.id}`}>
                <div className="absolute ">
                  {<Rate value={doctor.Rating} />}
                </div>
                <img
                  alt="img"
                  className="rounded-full	mb-3"
                  src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${doctor.url}`}
                />
              </Link>
              <h4 className="p-1 font-bold	">
                {doctor.fname + " " + doctor.lname}
              </h4>
              <p className="p-1 	">{"کد پزشک : " + doctor.pezeshkCode}</p>
              <p className="pb-3 	">
                {"وضعیت" +
                  " : " +
                  (doctor.status === "active" ? "فعال" : "غیرفعال")}
              </p>
              <div className="flex flex-wrap justify-start ">
                {doctor.spUnis.map(({ specialty }, i) => {
                  return (
                    <span className="text-[#30353b] mb-1 rounded-lg text-xs p-1 bg-[#df7539]">
                      {`${specialty.name} `}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DoctorsCardList;
